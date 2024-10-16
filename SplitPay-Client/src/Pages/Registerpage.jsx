// import { Link } from "react-router-dom";

// const Registerpage = () => {
//   return (
//     <>
//       <section className="absolute w-full h-full">
//         {/* Background Image Section */}
//         <div
//           className="relative top-0 w-full h-full bg-[#F5F7F8] bg-cover bg-no-repeat"
//           style={{
//             backgroundImage: `url('/register.webp')`,
//             backgroundSize: "100%",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {/* Black Shade Overlay */}
//           <div className="absolute inset-0 bg-black opacity-90"></div>
//         </div>
//         <div className="absolute bg-gray-100 text-gray-900 flex justify-center">
//           <div className="max-w-[80rem] shadow sm:rounded-lg flex justify-center">
//             <div className="bg-white p-6 shadow-lg w-full dark:bg-slate-100">
//               <form>
//                 <div className="text-2xl text-teal-800 font-semibold capitalize text-center mb-4">
//                   <h3>Welcome to SplitPay!</h3>
//                   <p className="text-[1.12rem] font-normal text-gray-400">
//                     Register to your account
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex flex-col md:flex-row gap-3 w-full justify-between items-center mt-4">
//                     <div>
//                       <div className="capitalize mb-1">
//                         <label className="text-[1.12rem]">name</label>
//                       </div>
//                       <div className="border-2 relative">
//                         <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke-width="1.5"
//                             stroke="currentColor"
//                             className="size-5"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                             />
//                           </svg>
//                         </span>
//                         <input
//                           name="name"
//                           className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800"
//                           type="text"
//                           placeholder="enter name"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="capitalize text-xl mb-1">
//                         <label className="text-[1.12rem]">Email</label>
//                       </div>
//                       <div className="border-2 relative">
//                         <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-mail"
//                           >
//                             <rect width="20" height="16" x="2" y="4" rx="2" />
//                             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                           </svg>
//                         </span>
//                         <input
//                           name="email"
//                           className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800"
//                           type="text"
//                           placeholder="enter email"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <div className="capitalize text-xl mb-1">
//                       <label className="text-[1.12rem]">phone number</label>
//                     </div>
//                     <div className="border-2 relative">
//                       <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="1.7"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-phone"
//                         >
//                           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                         </svg>
//                       </span>
//                       <hr className="absolute inset-y-0 left-[2rem] border-gray-400" />
//                       <div className="text-gray-400 absolute inset-y-0 left-[2rem] flex items-center px-2 gap-2">
//                         <img src="/india.png" alt="india" className="w-5 h-5" />
//                         +91
//                       </div>
//                       <hr className="absolute inset-y-0 left-[8rem] border-gray-400" />
//                       <input
//                         name="phone"
//                         className="w-full placeholder:capitalize pl-28 pr-4 py-1.5 outline-blue-800"
//                         type="text"
//                         placeholder="enter phone number"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
//                     <div className="mt-4">
//                       <div className="capitalize text-xl mb-1">
//                         <label className="text-[1.12rem]">password</label>
//                       </div>
//                       <div className="border-2 relative">
//                         <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke-width="1.5"
//                             stroke="currentColor"
//                             className="size-5"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//                             />
//                           </svg>
//                         </span>
//                         <input
//                           name="password"
//                           className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800"
//                           type="password"
//                           placeholder="enter password"
//                         />
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <div className="capitalize text-xl mb-1">
//                         <label className="text-[1.12rem]">
//                           confirm password
//                         </label>
//                       </div>
//                       <div className="border-2 relative">
//                         <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke-width="1.5"
//                             stroke="currentColor"
//                             className="size-5"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//                             />
//                           </svg>
//                         </span>
//                         <input
//                           name="confirmPassword"
//                           className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800"
//                           type="password"
//                           placeholder="confirm password"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="sm:flex sm:justify-between flex-col inline-block my-4">
//                     <div className="flex">
//                       <input
//                         className="text-blue-800"
//                         type="checkbox"
//                         checked
//                       />
//                       <span className="pl-1">
//                         I agree to the
//                         <Link to="#" className="text-blue-800 hover:underline">
//                           {" "}
//                           Terms & Conditions
//                         </Link>
//                       </span>
//                     </div>
//                     <div className="flex">
//                       <input
//                         className="text-blue-800"
//                         type="checkbox"
//                         checked
//                       />
//                       <span className="pl-1">
//                         I agree to the
//                         <Link to="#" className="text-blue-800 hover:underline">
//                           {" "}
//                           Privacy Policy
//                         </Link>
//                       </span>
//                     </div>
//                   </div>
//                   <div>
//                     <button className="bg-teal-800 text-xl text-white font-normal uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
//                       Sign In
//                     </button>
//                   </div>
//                   <div className="text-[18px] text-center mt-4">
//                     <p>
//                       Already have an account?{" "}
//                       <Link
//                         className="capitalize text-blue-800 hover:underline cursor-pointer"
//                         to="/login"
//                       >
//                         login
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </form>
//               <div className="flex items-center space-x-2 mt-4">
//                 <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
//                 <span className="text-zinc-400 dark:text-zinc-700 text-sm">
//                   OR
//                 </span>
//                 <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
//               </div>
//               <div className="flex flex-col md:flex-row gap-4 mt-3">
//                 <button
//                   className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
//                   type="submit"
//                 >
//                   <span className="mr-2 inline-block">
//                     <svg
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-rose-500"
//                     >
//                       <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
//                     </svg>
//                   </span>
//                   Sign in with Google
//                 </button>
//                 <button
//                   className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
//                   type="button"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="h-6 w-6 text-blue-500"
//                   >
//                     <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.02 3.66 9.17 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.84c0-2.5 1.47-3.88 3.72-3.88 1.08 0 2.2.19 2.2.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85h2.72l-.43 2.89h-2.29V21.9C18.34 21.17 22 17.02 22 12z" />
//                   </svg>
//                   <span className="ml-2 font-semibold text-[1rem]">
//                     Sign in with Facebook
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Registerpage;

import React from "react";
import { Link } from "react-router-dom";

const Registerpage = () => {
  return (
    <>
      <section className="absolute w-full h-full">
        {/* Background Image Section */}
        <div
          className="relative top-0 w-full h-full bg-[#F5F7F8] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/register.webp')`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Black Shade Overlay */}
          <div className="absolute inset-0 bg-black opacity-90"></div>
        </div>

        {/* Login Form Section */}
        <div className="absolute inset-0 flex justify-center items-center gap-40 px-32">
          <div className="w-1/2">
            <div className="text-white text-4xl font-bold flex flex-col justify-between">
              <h1 className="font-medium text-[5rem] pb-10 text-start">
                SplitPay
              </h1>
              <p
                className="text-[1.12rem] font-normal text-gray-400 pb-10 text-justify"
                style={{ lineHeight: "1.8rem" }}
              >
                SplitPay is a payment gateway that allows you to split your
                payments into multiple parts. SplitPay is a great way to manage
                your finances and make your payments more manageable. Try
                SplitPay today and see how easy it is to split your payments!
              </p>

              <img
                src="/registerMoney.webp"
                alt="register"
                className="w-[28rem] text-center ml-16"
              />
            </div>
          </div>
          <div className="bg-white p-6 shadow-lg w-[32rem] dark:bg-slate-100 ">
            <form>
              <div className="text-2xl text-blue-800 font-bold capitalize text-center mb-4">
                <h3>Welcome to SplitPay!</h3>
                <p className="text-[1.12rem] font-normal text-gray-400">
                  Register to your account
                </p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
                  {/* Username Field */}
                  <div className="mb-4">
                    <label className="capitalize text-xl mb-2 block">
                      Name
                    </label>
                    <div className="border-2 relative">
                      <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label className="capitalize text-xl mb-2 block">
                      Email
                    </label>
                    <div className="border-2 relative">
                      <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                </div>
                {/* Phone Number Field */}
                <div className="mb-4">
                  <div className="capitalize text-xl mb-1">
                    <label className="text-[1.12rem]">phone number</label>
                  </div>
                  <div className="border-2 relative">
                    <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <hr className="absolute inset-y-0 left-[2rem] border-gray-400" />
                    <div className="text-gray-400 absolute inset-y-0 left-[2rem] flex items-center px-2 gap-2">
                      <img src="/india.png" alt="india" className="w-5 h-5" />
                      +91
                    </div>
                    <hr className="absolute inset-y-0 left-[8rem] border-gray-400" />
                    <input
                      name="phone"
                      className="w-full placeholder:capitalize pl-28 pr-4 py-1.5 outline-blue-800"
                      type="text"
                      placeholder="enter phone number"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
                  {/* Password Field */}
                  <div className="mb-4">
                    <label className="capitalize text-xl mb-2 block">
                      password
                    </label>
                    <div className="border-2 relative">
                      <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                          />
                        </svg>
                      </span>
                      <input
                        name="password"
                        className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                        type="password"
                        placeholder="enter password"
                      />
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="mb-4">
                    <label className="capitalize text-xl mb-2 block">
                      Confirm Password
                    </label>
                    <div className="border-2 relative">
                      <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                          />
                        </svg>
                      </span>
                      <input
                        name="password"
                        className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                        type="password"
                        placeholder="Re-enter password"
                      />
                    </div>
                  </div>
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="sm:flex sm:justify-between flex-col inline-block my-4">
                  <div className="flex">
                    <input className="text-blue-800" type="checkbox" checked />
                    <span className="pl-1">
                      I agree to the
                      <Link to="#" className="text-blue-800 hover:underline">
                        {" "}
                        Terms & Conditions
                      </Link>
                    </span>
                  </div>
                  <div className="flex">
                    <input className="text-blue-800" type="checkbox" checked />
                    <span className="pl-1">
                      I agree to the
                      <Link to="#" className="text-blue-800 hover:underline">
                        {" "}
                        Privacy Policy
                      </Link>
                    </span>
                  </div>
                </div>
                <div>
                  <button className="bg-teal-800 text-xl text-white font-normal uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
                    Sign In
                  </button>
                </div>
                <div className="text-[18px] text-center mt-4">
                  <p>
                    Already have an account?{" "}
                    <Link
                      className="capitalize text-blue-800 hover:underline cursor-pointer"
                      to="/login"
                    >
                      login
                    </Link>
                  </p>
                </div>
              </div>
            </form>

            {/* Divider with OR */}
            <div className="flex items-center space-x-2 mt-4">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
              <span className="text-zinc-400 dark:text-zinc-700 text-sm">
                OR
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            </div>

            {/* Social Login Buttons */}
            <div className="mt-3 space-y-3">
              <button
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                type="button"
              >
                <span className="mr-2 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registerpage;
