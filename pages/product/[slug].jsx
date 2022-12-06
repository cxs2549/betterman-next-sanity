/* eslint-disable @next/next/no-img-element */
import React from "react"
import { client, urlFor } from "../../lib/client"
import { CheckIcon, StarIcon } from "@heroicons/react/solid"
import { AiOutlineHeart } from "react-icons/ai"
import { useStateContext } from "../../context/StateContext"
import { Playfair_Display } from "@next/font/google"
const playfair = Playfair_Display({
  weight: '500'
})

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const reviews = { average: 4, totalCount: 1624 }

const ProductDetailsPage = ({ product }) => {
  const {onAdd} = useStateContext()
  return (
    <div className=" mt-20 md:mt-28 xl:mt-16">
      <div className="max-w-2xl mx-auto px-4 md:py-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h3 className="uppercase text-sm md:text-base">{product.brand}</h3>
            <h1 className={`text-2xl md:text-3xl font-bold tracking-tight ${playfair.className}`}>
              {product.name}
            </h1>
          </div>
          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>
            <div className="flex items-center">
              <p className="text-lg sm:text-xl">${product.price}</p>
              <div className="ml-4 pl-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>
        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border dark:border-none">
              <img
                src={urlFor(product.image)}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute top-4 right-4">
              <AiOutlineHeart size={26} />
            </div>
          </div>
        </div>
        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>
            <form>
              <div className="mt-10">
                <button
                  onClick={() => onAdd(product, 1)}
                  type="button"
                  className="w-full bg-red-400 border border-transparent rounded-full py-3 px-8 flex items-center justify-center text-base font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                >
                  Add to Bag
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{'slug': slug.current}`
  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug,
    },
  }))
  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'product' && slug.current == '${slug}']{_id, 'slug': slug.current, 'image': image.asset._ref, 'category': category[]->title, name, brand, price}[0]`
  const product = await client.fetch(query)

  return {
    props: { product },
  }
}

export default ProductDetailsPage
