import Link from "next/link"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Spin as Hamburger } from "hamburger-react"
// icons
import { TbMenu } from "react-icons/tb"
import { AiOutlineUser } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import Image from "next/image"
import { useStateContext } from "../context/StateContext"
// fonts
import { Playfair_Display } from "@next/font/google"
const playfair = Playfair_Display({
  weight: "500",
})

const links = [
  { name: "Winter Sale" },
  { name: "All Products" },
  { name: "Tops" },
  { name: "Bottoms" },
  { name: "Outerwear" },
  { name: "Accessories" },
  { name: "Coming Soon" },
]

const Container = ({ children }) => (
  <div className="flex items-center justify-between h-16 px-4 relative z-50 xl:gap-8 max-w-[1440px] mx-auto">
    {children}
  </div>
)
const Container2 = ({ children }) => (
  <div className="hidden md:flex items-center justify-center h-12 px-4 relative xl:gap-8 max-w-[1440px] mx-auto bg-white xl:hidden">
    {children}
  </div>
)

const SignUpBtn = () => (
  <button className="border text-red-400 border-red-400 rounded-full px-5 h-9 flex items-center font-medium text-sm md:hidden hover:text-red-500 dark:bg-white dark:border-none">
    Sign up
  </button>
)

const Logo = () => (
  <Link
    href={`/`}
    className={`absolute md:static md:left-0 md:translate-x-0 text-2xl left-1/2 -translate-x-1/2`}
  >
    <Image src="/logo.png" width={40} height={40} />
  </Link>
)

const Links = () => (
  <nav>
    <ul className="hidden md:flex gap-8">
      {links.map((link) => (
        <li key={link.name} className="capitalize text-sm cursor-pointer">
          {link.name}
        </li>
      ))}
    </ul>
  </nav>
)

const Icons = () => {
  const { totalQuantities } = useStateContext()
  return (
    <div className="hidden md:flex items-center gap-4 xl:flex-1">
      <div className="flex xl:flex-1 items-center relative">
        <input
          type="search"
          placeholder="Search"
          className="rounded-full w-full  ml-auto h-10 px-4  border dark:border-none focus:outline-none"
        />
        <button className=" absolute right-4 text-neutral-700/50 dark:text-neutral-400">
          <FiSearch size={24} />
        </button>
      </div>
      <button className=" dark:text-white shadow rounded-full px-5 h-9 flex items-center font-medium text-sm hover:text-red-500 dark:bg-[#2B2A33] dark:border-none">
        Sign up
      </button>
      <div className="flex">
        <button className="h-12 w-12 rounded-full hover:bg-neutral-100 grid place-items-center">
          <AiOutlineUser size={24} />
        </button>
        <div className="relative">
          <button className="h-12 w-12 rounded-full hover:bg-neutral-100 grid place-items-center">
            <BsBag size={24} />
            <div className="absolute bottom-1 right-1 w-4 h-4 grid place-items-center bg-black text-white font-semibold text-xs rounded-full">
              {totalQuantities}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button
        className="hover:bg-red-400 hover:text-white rounded-full h-12 w-12 grid place-items-center"
        onClick={() => setOpen(!open)}
      >
        <Hamburger toggled={open} size={20} toggle={setOpen} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 p-4 z-50"
          >
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 bg-black/75 backdrop-blur-sm mt-16 h-screen"
                ></motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: -12 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: 0.15 }}
                  className="bg-neutral-50 dark:bg-neutral-700  sm:max-w-xs sm:ml-auto p-8 rounded-lg shadow-lg overflow-y-scroll z-50"
                >
                  <nav className="mb-8">
                    <ul className="flex flex-col gap-2">
                      {links.map((link) => (
                        <li
                          key={link.name}
                          className={`text-xl font-semibold h-12 flex items-center cursor-pointer hover:underline ${playfair.className}`}
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div>
                    <input
                      type="search"
                      placeholder="Search"
                      className="border dark:border-none rounded-full w-full h-12 px-4"
                    />
                    <button className="bg-red-400 mt-2 text-white font-semibold w-full h-12 rounded-full">
                      Sign in
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Header = () => {
  return (
    <header className="fixed w-full h-16 top-0 left-0 dark:bg-neutral-800 bg-white  z-50">
      <Container>
        <SignUpBtn />
        <Logo />
        <div className="hidden xl:block">
          <Links />
        </div>
        <Icons />
        <Menu />
      </Container>
      <Container2>
        <Links />
      </Container2>
    </header>
  )
}

export default Header
