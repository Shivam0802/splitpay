import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { FaMapMarkerAlt, FaBriefcase, FaUniversity } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaListCheck } from "react-icons/fa6";


export default function Profile() {
  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
            <div className="absolute top-0 left-0 w-full z-10">
              <Navbar />
            </div>
          </div>
          <div
            className="top-auto -bottom-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 pl-16 lg:order-1 flex">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/shivam.webp"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-28 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "18rem" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 pl-4 lg:order-2 lg:self-center text-start mt-12">
                    <h3
                      className="text-4xl font-semibold leading-normal mb-2 text-gray-800"
                      style={{ lineHeight: "2.12rem" }}
                    >
                      Tarun Kumar
                    </h3>
                    <div className="flex items-center gap-1 text-sm leading-normal mb-2 text-gray-500 font-semibold uppercase">
                      <FaMapMarkerAlt className="ml-1 mr-2 text-lg text-[#1E3E62]" />
                      Delhi, India
                    </div>
                    <div className="flex items-center gap-1 text-gray-700 mb-2 mt-[2.7rem]">
                      <FaBriefcase className="ml-1 mr-2 text-[1.3rem] text-[#1E3E62]" />
                      Full-Stack Developer
                    </div>
                    <div className="flex items-center gap-1 mb-2 text-gray-700">
                      <FaUniversity className="ml-1 mr-2 text-[1.3rem] text-[#1E3E62]" />
                      Jagan Institute of Management Studies, Rohini, Delhi
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-[#CB80AB] active:bg-[#874b88] uppercase text-white font-medium hover:shadow-md hover:bg-[#874b88] shadow text-[0.85rem] px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Add an expenses
                      </button>
                      <button 
                        className="bg-[#C4DAD2] active:bg-[#6A9C89] uppercase text-gray-700 font-medium hover:shadow-md hover:bg-[#6A9C89] hover:text-white shadow text-[0.85rem] px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        >
                            Settle Up
                        </button>
                    </div>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-2/12 pl-8 lg:order-1 flex flex-col gap-3"> 
                        <button className="text-gray-600 text-[1.15rem] flex items-center bg-[#F5F5F5] hover:bg-[#dadada] px-4 py-1 rounded-sm">
                            <FaListCheck className="text-[1.3rem] text-gray-600 mr-2" />
                            All Expenses
                        </button>
                        <div className="flex flex-col items-center">
                        <button className="text-gray-600 text-[1.15rem] flex items-center bg-[#F5F5F5] hover:bg-[#dadada] px-4 py-1 rounded-sm">
                            <HiMiniUserGroup className="text-[1.5rem] text-gray-600 mr-2" />
                            Groups
                            <span className="text-[1rem] text-gray-400 ml-14 hover:text-blue-500"> +add</span>
                        </button>
                        <p className="text-gray-500 text-[0.9rem] h-16 shadow-lg px-3 py-1">You donot have any group yet.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-10/12 pl-8 lg:order-2 flex flex-col gap-3"> 
                        <div className="flex items-center justify-between bg-[#F5F5F5] px-4 py-2 rounded-sm">
                            <div className="flex items-center gap-2">
                                <img src="/Nitin.webp" alt="shivam" className="w-12 h-12 rounded-full"/>
                                <div>
                                    <h3 className="text-lg font-semibold">Nitin Singh Bisht</h3>
                                    <p className="text-gray-500">Paid Rs. 1000</p>
                                </div>
                            </div>
                            <button className="text-gray-600 text-[1.15rem] flex items-center bg-[#F5F5F5] hover:bg-[#dadada] px-4 py-1 rounded-sm">
                                <FaListCheck className="text-[1.3rem] text-gray-600 mr-2" />
                                View
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
