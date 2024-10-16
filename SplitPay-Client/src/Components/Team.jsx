import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

function Team() {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Our Team</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              These are the amazing people who make this project possible.
              Transform the way people manage their finances by making expense
              splitting seamless and efficient with SplitPay. Together, we'll
              empower families and friends to stay connected and financially
              balanced through innovation and teamwork!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="/shivam.webp"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "10rem" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Shivam</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Full-Stack Developer
                </p>
                <div className="mt-6 flex gap-2 justify-center">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaInstagram
                      className="w-[1.95rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                  <button
                    className="bg-gray-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaXTwitter
                      className="w-[1.97rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                  <button
                    className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaThreads 
                        className="w-[1.95rem] text-white"
                        style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="/Tarun.webp"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "10rem" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Tarun Kumar</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Full-Stack Developer
                </p>
                <div className="mt-6 flex gap-2 justify-center">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaInstagram
                      className="w-[1.95rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaFacebookF
                      className="w-[1.9rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                  <button
                    className="bg-gray-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaXTwitter
                      className="w-[1.97rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="/Nitin.webp"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "10rem" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Nitin Singh Bisht</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Data Scientist
                </p>
                <div className="mt-6 flex gap-2 justify-center">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaInstagram
                      className="w-[1.95rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                  <button
                    className="bg-gray-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaXTwitter
                      className="w-[1.97rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <FaFacebookF
                      className="w-[1.9rem] text-white"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
