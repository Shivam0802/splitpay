import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrSubtractCircle } from "react-icons/gr";
import { RiAddCircleLine } from "react-icons/ri";
import Questionbank from "../StaticData/Questionbank.json";

function Faq() {
    const [openIndex, setOpenIndex] = React.useState();

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="relative">
            <div className="flex flex-col md:flex-row justify-between bg-transparent md:p-8 gap-24">
                {/* Left section */}
                <div className="md:w-1/2 ">
                    <h1
                        className="text-3xl md:text-[3rem] font-medium text-gray-800 mb-10"
                        style={{ lineHeight: "3rem" }}
                    >
                        What do you want to know about SplitPay ?
                    </h1>

                    <Link
                        to="/profile"
                        className="flex gap-4 items-center w-fit text-lg text-gray-100 bg-[#C75B7A] px-10 py-2 rounded-full"
                    >
                        Contact Us
                        <FaArrowRightLong />
                    </Link>

                    <img
                        src="/faq.webp"
                        alt="faq illustration"
                        className="w-[35rem] mt-10"
                    />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    {Questionbank.Faq.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden my-4 rounded-tl-[1.12rem] rounded-br-[1.12rem] shadow-md"
                        >
                            <button
                                className={`flex items-center justify-between w-full px-5 py-3 text-left ${openIndex === index
                                        ? "bg-[#8a8f99bf] focus:bg-[#8a8f99bf]"
                                        : "bg-gray-200 hover:bg-[#8a8f99bf]"
                                    } focus:outline-none`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-normal text-[1.12rem] ${openIndex === index ? "text-gray-800" : "text-gray-800"}`}>
                                    {index + 1}. {faq.ques}
                                </span>
                                {openIndex === index ? (
                                    <GrSubtractCircle
                                        size={20}
                                        className={`inline-block float-right text-gray-800`}
                                    />
                                ) : (
                                    <RiAddCircleLine
                                        size={20}
                                        className={`inline-block float-right text-gray-800`}
                                    />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className={`px-4 py-2 bg-gray-300`}>
                                    <p className={`text-[1.05rem] font-normal text-justify text-gray-800`}>
                                        {faq.ans}
                                    </p>
                                </div>
                            )}
                        </div>
                    )).slice(0, 8)}
                </div>
            </div>
        </section>
    );
}

export default Faq;
