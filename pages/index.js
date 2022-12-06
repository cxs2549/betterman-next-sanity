import React from "react"
import Featured from "../components/Featured"
import Filters from "../components/Filters"
import Hero from "../components/Hero"
import { client } from "../lib/client"

const HomePage = ({ products, featuredProducts, newProducts }) => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <Hero />
      <div className="md:flex gap-8 justify-center pb-12">
        <Filters />
        <div className="md:flex-1 overflow-y-scroll h-full">
          <Featured title="Featured" products={featuredProducts} />
          <Featured title="New arrivals" products={newProducts} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const query = `*[_type == 'product']{_id, slug, brand, name, price, 'image': image.asset._ref, category}`
  const featuredProductsQuery = `*[_type == 'product' && 'Featured' in category[]->title]{brand, name, price, "slug": slug.current, 'image': image.asset._ref,
}`
  const newProductsQuery = `*[_type == 'product' && 'New' in category[]->title]{name, brand, price, "slug": slug.current, 'image': image.asset._ref,
}`
  const products = await client.fetch(query)
  const featuredProducts = await client.fetch(featuredProductsQuery)
  const newProducts = await client.fetch(newProductsQuery)

  return {
    props: {
      products,
      featuredProducts,
      newProducts,
    },
  }
}

export default HomePage
