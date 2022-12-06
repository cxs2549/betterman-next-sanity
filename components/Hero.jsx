import React from "react"

const links = ["winter sale", `accessories`, "hats", "gym", "all"]

const Hero = () => {
  return (
    <div className="mt-24 xl:mt-8 border-b pb-8 dark:border-neutral-700 xl:border-none">
      <div className="px-4 flex md:hidden gap-1 flex-wrap">
        {links.map((link) => (
          <button
            key={link}
            className=" text-white bg-red-400 rounded-full px-5 h-9 flex items-center font-medium text-sm capitalize"
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero
