import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div
      className="h-screen bg-gray-900 grid grid-flow-col items-center justify-center lg:justify-evenly text-white"
      style={{
        backgroundImage: `url(/img/RegistrationBackground.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="text-5xl hidden lg:flex flex-col">
        <span className="font-light leading-relaxed">Welcome To</span>
        <span className="font-semibold leading-relaxed">i-sight</span>
      </div>

      <div
        className="flex flex-col justify-center items-center px-6 py-12 sm:py-12 lg:px-14 w-screen sm:w-[488px] h-screen sm:h-auto rounded-md"
        style={{
          background:
            "linear-gradient(90deg, rgba(39, 69, 234, 0.5) 2.94%, rgba(207, 123, 244, 0.5) 100%)",
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold">Sign In</h2>
        </div>

        <div className="h-[1px] w-8 bg-[#C0BDCC] mt-5 mb-10"></div>

        <div className="w-full">
          <div className="">
            <form className="space-y-9" action="/">
              <div>
                <label htmlFor="email" className="block text-xs font-medium">
                  Your email
                </label>

                <div className="mt-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="dummy@example.com"
                    required
                    className="block w-full rounded-md bg-transparent text-xs border border-white h-12 py-3.5 px-5 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium">
                  Your password
                </label>

                <div className="mt-3">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="password"
                    required
                    className="block w-full rounded-md bg-transparent text-xs border border-white h-12 py-3.5 px-5 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-5 h-5 border border-[#C0BDCC] rounded-md flex items-center justify-center"
                    onClick={() => setRememberMe(!rememberMe)}
                  >
                    {rememberMe && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-full h-full p-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </div>

                  <label
                    htmlFor="remember-me"
                    className="ml-3.5 block text-xs font-normal text-[#7A86A1]"
                  >
                    Remember me
                  </label>
                </div>

                <Link href="/forget">
                  <span className="text-xs font-normal hover:underline">Forgot password?</span>
                </Link>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="flex w-full h-12 justify-center items-center rounded-md bg-white text-blue-500 hover:text-white hover:bg-blue-500 text-base font-bold"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <p className="mt-5 text-center text-xs font-normal">
            New user?{" "}
            <Link href="/signup">
              <span className="font-semibold hover:underline">
                Create an account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
