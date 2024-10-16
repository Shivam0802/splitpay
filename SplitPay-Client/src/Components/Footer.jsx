import React, { useState } from "react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

import Modal from "./Modal";
import Contact from "./Contact";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const OpenModal = () => {
    setIsOpenModal(true);
  };

  const CloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <footer className="relative bg-gray-300 pt-8">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "81px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap pb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-[2.1rem] items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaXTwitter
                    className="w-[3.5rem] text-gray-600"
                    style={{ fontSize: "1.25rem" }}
                  />
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-[2.1rem] items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebookF
                    className="w-[3.5rem] text-blue-400"
                    style={{ fontSize: "1.25rem" }}
                  />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-[2.1rem] items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaInstagram
                    className="w-[3.5rem] text-red-400"
                    style={{ fontSize: "1.25rem" }}
                  />
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-[2.1rem] items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaThreads
                    className="w-[3.5rem] text-gray-900"
                    style={{ fontSize: "1.25rem" }}
                  />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 ">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-md font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-normal block pb-2 text-sm"
                        href="#"
                      >
                        Who we are
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-normal block pb-2 text-sm"
                        href="#"
                      >
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-md font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-normal block pb-2 text-sm"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-normal block pb-2 text-sm"
                        href="#"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={OpenModal}
                        className="text-gray-700 hover:text-gray-900 font-normal block pb-2 text-sm"
                      >
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-400 w-full" />
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 px-8 py-4">
            <p className="text-gray-600 items-center">
              <span className={`font-semibold text-gray-500 text-[1.2rem]`}>
                &copy;
              </span>{" "}
              2024 SplitPay. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-10">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={`group text-gray-600 transition-all duration-300 ease-in-out`}
              >
                <span
                  className={`bg-left-bottom bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
                >
                  Privacy Policy
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={`group text-gray-600 transition-all duration-300 ease-in-out`}
              >
                <span
                  className={`bg-left-bottom bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
                >
                  Terms of Service
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* {
         <Modal show={OpenModal} close={CloseModal}>
         <Contact />
       </Modal>
      } */}
    </>
  );
}
