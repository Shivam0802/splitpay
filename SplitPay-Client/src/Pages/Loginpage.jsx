import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
              <h1 className="font-medium text-[5rem] pb-16 text-start" >SplitPay</h1>
              <p className="text-[1.12rem] font-normal text-gray-400 pb-10 text-justify" style={{lineHeight:"1.8rem"}}>
              SplitPay is a payment gateway that allows you to split your payments into multiple parts. SplitPay is a great way to manage your finances and make your payments more manageable. Try SplitPay today and see how easy it is to split your payments! 
              </p>

              <img src="/money.webp" alt="register" className='w-[32rem] text-center ml-16' />
             </div>
          </div>
          <div className="bg-white p-6 shadow-lg w-96 dark:bg-slate-100 ">
            <form>
              <div className="text-2xl text-blue-800 font-bold capitalize text-center mb-4">
                <h3>Welcome back!</h3>
                <p className="text-[1.12rem] font-normal text-gray-400">
                  Login to your account
                </p>
              </div>
              <div>
                {/* Username Field */}
                <div className="mb-4">
                  <label className="capitalize text-xl mb-2 block">username</label>
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
                      placeholder="enter username or email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label className="capitalize text-xl mb-2 block">password</label>
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

                {/* Remember Me and Forgot Password */}
                <div className="sm:flex sm:justify-between inline-block my-4">
                  <div className="flex">
                    <input className="text-blue-800" type="checkbox" />
                    <span className="pl-1">Remember me</span>
                  </div>
                  <div className="text-blue-800 hover:underline">
                    <a href="#">Forgot password?</a>
                  </div>
                </div>

                {/* Login Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100"
                  >
                    login
                  </button>
                </div>

                {/* Register Link */}
                <div className="text-[18px] text-center mt-4">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      className="capitalize text-blue-800 hover:underline cursor-pointer"
                      to="/signup"
                    >
                      register
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

export default Login;
