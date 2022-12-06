import React, { useState } from "react"
import { BsPlusLg } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"

const Filters = () => {
  const FilterItem = ({ title, children }) => {
    const [open, setOpen] = useState(false)
    return (
      <li className="flex flex-col">
        <div
          onClick={() => setOpen(!open)}
          className="flex w-full justify-between items-center h-20"
        >
          <p className="text-lg">{title}</p>
          <BsPlusLg size={16} />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=""
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    )
  }
  return (
    <div className="">
      <div className="hidden   md:block w-[260px] xl:w-[360px] px-4 mt-12">
        <ul className="divide-y dark:divide-neutral-600">
          <FilterItem title="Color">
            <div className="flex gap-2 pb-8">
              <div className="rounded-full w-5 h-5 bg-red-500"></div>
              <div className="rounded-full w-5 h-5 bg-green-500"></div>
              <div className="rounded-full w-5 h-5 bg-blue-500"></div>
              <div className="rounded-full w-5 h-5 bg-indigo-500"></div>
              <div className="rounded-full w-5 h-5 bg-black"></div>
              <div className="rounded-full w-5 h-5 bg-white border"></div>
            </div>
          </FilterItem>
          <FilterItem title="Brand">
            <fieldset className="flex flex-col gap-2 pb-8">
              <div className="flex items-center">
                <input type="checkbox" id="th" />
                <label htmlFor="th" className="ml-2">
                  Tommy Hilfiger
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  Calvin Klein
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  Alfani
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  Club Room
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  Marmot
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  Puma
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  Lacoste
                </label>
              </div>
            </fieldset>
          </FilterItem>
          <FilterItem title="Price">
            <fieldset className="flex flex-col gap-2 pb-8">
              <div className="flex items-center">
                <input type="checkbox" id="th" />
                <label htmlFor="th" className="ml-2">
                  Under $50
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  $50 - $100
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  $100 - $250
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  $250 - $500
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="ck" />
                <label htmlFor="ck" className="ml-2">
                  $500 & above
                </label>
              </div>
            </fieldset>
          </FilterItem>
          <FilterItem title="Availability">
            <fieldset>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="stock" />
                <label htmlFor="stock">In-stock only</label>
              </div>
            </fieldset>
          </FilterItem>
        </ul>
      </div>
    </div>
  )
}

export default Filters
