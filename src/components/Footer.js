import React from "react";
import { RiWhatsappFill, RiInstagramFill, RiTwitterFill, RiFacebookFill } from "react-icons/ri";

function Footer(props) {
  return (
    <div className="mt-20 border-t-4 border-violet-500 dark:border-transparent dark:bg-gray-900 dark:text-white py-8">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col items-center md:px-2">
          <div className="w-full md:w-1/2 flex space-x-5 text-gray-700  justify-center md:justify-start dark:text-white">
            <div className="lg:text-lg font-medium">Contact</div>
            <div className="lg:text-lg font-medium">FAQ</div>
            <div className="lg:text-lg font-medium">Term & Condition</div>
            <div className="lg:text-lg font-medium">Privacy Policy</div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-5 mt-7 md:mt-0">
            <button className="group">
              <RiFacebookFill className="text-3xl text-gray-500 dark:text-white group-hover:text-violet-500" />
            </button>
            <button className="group">
              <RiInstagramFill className="text-3xl text-gray-500 dark:text-white group-hover:text-violet-500" />
            </button>
            <button className="group">
              <RiTwitterFill className="text-3xl text-gray-500 dark:text-white group-hover:text-violet-500" />
            </button>
            <button className="group">
              <RiWhatsappFill className="text-3xl text-gray-500 dark:text-white group-hover:text-violet-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
