import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import logo from "../assets/logo.png";
import { appTheme } from "../store";

const navbarVariant = {
  hidden: {
    x: -1000,
  },
  visibel: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: -1000,
    transition: { duration: 0.3 },
  },
};

const cartVariant = {
  hidden: { x: 1000 },
  visible: { x: 0, transition: { duration: 1 } },
  exit: { x: 1000, transition: { duration: 1 } },
};

function Navbar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const [theme, setTheme] = useRecoilState(appTheme);

  const selectTheme = (value) => {
    localStorage.setItem("theme", value);
    setTheme(value);

    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));
    if (value === "dark") {
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.add(localStorage.getItem("theme"));
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 shadow fixed top-0 w-full lg:w-auto lg:static">
        <div className="flex justify-between items-center px-4 lg:px-10 py-3">
          <div className="lg:hidden flex items-center">
            <button onClick={() => setOpenMenu(true)} className="focus:outline-none">
              <svg className="w-6 h-6 text-violet-500 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="">
            <img src={logo} className="w-10" alt="" />
          </div>

          <div className="flex justify-between items-center lg:w-full lg:ml-6">
            <div className="space-x-4 hidden lg:block">
              <NavLink to="/" exact activeClassName="text-violet-500 font-medium" className="text-gray-400 hover:text-violet-700">
                Home
              </NavLink>
              <NavLink to="/about" activeClassName="text-violet-500 font-medium" className="text-gray-400 hover:text-violet-700">
                About
              </NavLink>
              <NavLink to="/shop" activeClassName="text-violet-500 font-medium" className="text-gray-400 hover:text-violet-700">
                Shop
              </NavLink>
              <NavLink to="/merch" activeClassName="text-violet-500 font-medium" className="text-gray-400 hover:text-violet-700">
                Merch
              </NavLink>
            </div>

            <div className="flex items-center space-x-5">
              {theme === "light" ? (
                <motion.div onClick={() => selectTheme("dark")} whileHover={{ scale: 1.1 }} className={`bg-gray-800 rounded-full flex items-center p-1 fixed bottom-0 right-0 mb-10 md:mb-16 lg:mb-0 mr-6 lg:mr-0 lg:static`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </motion.div>
              ) : null}
              {theme === "dark" ? (
                <motion.div onClick={() => selectTheme("light")} whileHover={{ scale: 1.1 }} className={`bg-gray-400 rounded-full flex items-center p-1 fixed bottom-0 right-0 mb-10 md:mb-16 lg:mb-0 mr-6 lg:mr-0 lg:static`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              ) : null}

              <NavLink to="" className="text-gray-400 hidden lg:block hover:text-violet-700 hover:font-medium">
                Info
              </NavLink>
              <NavLink to="" className="text-gray-400 hidden lg:block hover:text-violet-700 hover:font-medium">
                Account
              </NavLink>
              <button onClick={() => setOpenCart(true)} className="focus:outline-none flex items-center">
                <div className="mr-1 text-sm font-medium text-violet-500 dark:text-white hidden lg:block">Rp 0.00</div>
                <svg className="w-6 h-6 text-violet-500 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        {openMenu && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-black w-full h-full overflow-y-auto fixed z-20 top-0 bg-opacity-50 lg:hidden blur-for-backdrop">
            {openMenu && (
              <motion.div variants={navbarVariant} initial="hidden" animate="visibel" exit="exit" className="bg-white dark:bg-gray-800 rounded-r-3xl w-3/4 min-h-screen px-4">
                <div className="py-4 flex justify-end">
                  <div className="rounded-full p-3 bg-violet-200 flex items-center">
                    <button onClick={() => setOpenMenu(!openMenu)} className="focus:outline-none">
                      <svg className="w-6 h-6 text-violet-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="search" className="uppercase text-xs block text-center text-gray-400 mb-2">
                    Search
                  </label>
                  <div className="flex items-center">
                    <input type="text" autoFocus className="font-light w-full rounded-full focus:outline-none shadow px-5 py-2" placeholder="I want to find.." />
                    <button className="absolute focus:outline-none right-0 mr-3">
                      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap mt-10 -mx-2">
                  <div className="px-2 w-1/2">
                    <div className="bg-violet-200 rounded-3xl text-sm flex items-center justify-center font-medium h-20">Games</div>
                  </div>
                  <div className="px-2 w-1/2">
                    <div className="bg-blue-200 rounded-3xl text-sm flex items-center justify-center font-medium h-20">Apps</div>
                  </div>
                  <div className="px-2 w-1/2 mt-4">
                    <div className="bg-red-200 rounded-3xl text-sm flex items-center justify-center font-medium h-20">Apps</div>
                  </div>
                  <div className="px-2 w-1/2 mt-4">
                    <div className="bg-green-200 rounded-3xl text-sm flex items-center justify-center font-medium h-20">Apps</div>
                  </div>
                </div>
                <NavLink to="/" className="mt-10 py-3 font-medium text-green-500 rounded-xl bg-green-200 flex justify-between items-center px-2">
                  <span>Order Table</span>
                  <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>
                <div className="mt-10 text-center space-y-2 flex flex-col">
                  <Link className="text-gray-400 font-light">Feedback</Link>
                  <Link className="text-gray-400 font-light">Tearm of Use</Link>
                  <Link className="text-gray-400 font-light pb-7">Copyright</Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openCart && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpenCart(false)} className="fixed top-0 bg-black bg-opacity-50 w-full h-full blur-for-backdrop"></motion.div>
            <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: 1000 }} transition={{ duration: 0.4 }} className="fixed bg-white dark:bg-gray-800 w-3/4 md:w-1/2 lg:w-1/4 right-0 top-0 h-full rounded-l-3xl">
              <div className="py-4 px-4 flex justify-between items-center border-b border-violet-200">
                <button onClick={() => setOpenCart(false)} className="rounded-full bg-violet-200 p-3 focus:outline-none">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="uppercase font-medium text-violet-500 dark:text-gray-200">Shopping Cart</div>
              </div>
              <div className="px-4 py-5">
                <div className="text-lg text-gray-500">Your cart is empty!</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
