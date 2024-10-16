import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { IoPerson } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdEditCalendar } from "react-icons/md";
import { FaRegLaughBeam, FaBalanceScale } from "react-icons/fa";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaEarthAsia } from "react-icons/fa6";
import About from "../Components/About";
import Team from "../Components/Team";
import Faq from "../Components/Faq";
import { BiArrowFromLeft } from "react-icons/bi";

export default function Homepage() {
  return (
    <>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/home.webp')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            <div className="fixed top-0 left-0 w-full z-10">
              <Navbar />
            </div>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 text-start">
                <div className="pr-12">
                  <h1 className="text-white font-normal text-[4rem]" style={{lineHeight:"3.95rem"}}>
                    Change the way you split expenses with SplitPay!
                  </h1>
                  <p className="mt-4 text-lg text-gray-300 mb-10">
                    A simple and fair way to share expenses, ensuring
                    contributions are based on everyone's salary. 
                  </p>

                  <Link to="/signup" className="mt-8 px-6 py-2 bg-[#8C3061] text-gray-200 rounded-full text-[1.05rem]">
                    Get Started Now 
                    <BiArrowFromLeft className="inline-block ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden">
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
                className="text-[#E9EFEC] fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-[#E9EFEC] -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FaBalanceScale className="text-[1.7rem]"/>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Split Expenses Fairly
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Ensures that expenses are divided fairly among group members based on their individual incomes, ensuring
                      contributions are fair.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <LuCalendarCheck2 className="text-[1.7rem]"/>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Track Shared Expenses
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Easily track all shared expenses in one place, allowing to monitor contributions and outstanding balances and know who owes what to whom.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 lg:pt-12 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#B5CFB7]">
                      <FaEarthAsia className="text-[1.7rem]"/>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Hassle-Free Experience
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Enjoy a hassle-free experience with SplitPay, where expense management becomes effortless and stress-free. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-24 mx-6 md:mx-32">
              <div className="flex flex-col md:flex-row justify-between bg-transparent md:p-8 gap-24">
                {/* Left Section */}
                <div className="md:w-1/2 ">
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                    With SplitPay, you can easily split expenses among friends
                    and family based on their income!
                  </h1>
                  <p className="text-lg text-gray-500">
                    A simple and fair way to share expenses, ensuring
                    contributions are based on everyone's salary.
                  </p>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="flex flex-col space-y-10">
                    {/* Step 1 */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFF0D1] p-[1.35rem] rounded-full">
                        <IoPerson className="w-7 h-7 text-[#795757]" />
                      </div>
                      <div>
                        <h3 className="text-[1.5rem] font-medium text-gray-800">
                          Signup
                        </h3>
                        <p className="text-gray-500 font-normal">
                          Create an account and add your income details.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFF0D1] p-[1.35rem] rounded-full">
                        <HiUserGroup className="w-7 h-7 text-[#795757]" />
                      </div>
                      <div>
                        <h3 className="text-[1.5rem] font-medium text-gray-800">
                          Create a Group
                        </h3>
                        <p className="text-gray-500 font-normal">
                          Form a group with your family or friends and start
                          tracking shared expenses.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFF0D1] p-[1.35rem] rounded-full">
                        <MdEditCalendar className="w-7 h-7 text-[#795757]" />
                      </div>
                      <div>
                        <h3 className="text-[1.5rem] font-medium text-gray-800">
                          Split
                        </h3>
                        <p className="text-gray-500 font-normal">
                          Split the amount among group members based on their income.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#FFF0D1] p-[1.35rem] rounded-full">
                        <FaRegLaughBeam className="w-7 h-7 text-[#795757]" />
                      </div>
                      <div>
                        <h3 className="text-[1.5rem] font-medium text-gray-800">
                          Enjoy the Balance
                        </h3>
                        <p className="text-gray-500 font-normal">
                          Enjoy a hassle-free experience, knowing everyone paid
                          their fair share!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Team />
        <section className="pb-20 relative block bg-[#F5F5F5]">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
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
                className="text-[#F5F5F5] fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4 lg:pt-16">
            <Faq />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
