/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { urlFor } from "../lib/client"
// icons
import { AiOutlineHeart } from "react-icons/ai"
// fonts
import { Playfair_Display } from "@next/font/google"
const playfair = Playfair_Display({
  weight: '500'
})

const Featured = ({ products, title }) => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-bold mb-3 px-4 md:px-0 ${playfair.className}`}>{title}</h2>
        <div className="pr-4 text-xs underline opacity-90 cursor-pointer">
          view all
        </div>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar gap-1 px-4 md:px-0">
        {products.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            className="min-w-fit"
            key={product._id}
          >
            <div key={product._id}>
              <div
                key={product._id}
                className="rounded-2xl overflow-hidden   border-neutral-200 relative border"
              >
                <img
                  src={urlFor(product.image)}
                  width={250}
                  height={240}
                  alt={product.name}
                />
                <div className="absolute top-2 right-2 opacity-75">
                  <AiOutlineHeart size={26} />
                </div>
              </div>
              <p className="mx-1 mt-2 text-xs uppercase opacity-75">{product.brand}</p>
              <div className="text-xs mx-1 flex justify-between">
                <p className="max-w-[220px]">{product.name}</p>
                <p>${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Featured
