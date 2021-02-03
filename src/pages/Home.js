import React from "react";
import landing from "../assets/images/landing.png";
import produk1 from "../assets/images/produk1.png";

function Home(props) {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row my-10">
        <div className="bg-violet-500 p-6 w-full md:w-1/3 h-96 flex items-center justify-center">
          <div>
            <div className="text-white font-medium text-4xl">Space O'Book</div>
            <div className="text-white mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, excepturi asperiores beatae earum amet tempora ipsa qui corporis.</div>
            <button className="text-white font-medium flex items-center mt-10 border border-white pl-4 pr-2 rounded-full hover:bg-white  py-1 group">
              <span className=" group-hover:text-violet-700 transition-colors duration-300">SHOP</span>
              <svg className="text-white w-5 h-5 transform rotate-180 group-hover:text-violet-700 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-red-200 w-full md:w-2/3 h-96">
          <img src={landing} className="object-cover h-96 w-full" alt="" />
        </div>
      </div>

      <section id="bestseller">
        <div className="text-center text-xl font-medium text-violet-900 dark:text-white">LATEST PRODUCTS & BESTSELLERS</div>
        <div className="flex flex-wrap">
          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/3 mt-12">
            <div className="mx-9 md:mx-4 group">
              <img src={produk1} className="w-full h-auto object-fill" alt="" />
              <div className="mt-3">
                <div className="font-medium text-lg dark:text-white dark:group-hover:text-violet-500">Moon Poster</div>
                <div className="text-gray-500 dark:text-gray-300">Rp 50.000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
