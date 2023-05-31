import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          <h2 className="text-center text-3xl font-extrabold">Sign up</h2>
        </div>

        <div className="h-[1px] w-8 bg-[#C0BDCC] mt-5 mb-10"></div>

        <div className="w-full">
          <form className="space-y-9" action="/dashboard" method="POST">
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
                  onChange={(e) => setEmail(e?.target?.value)}
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
                  onChange={(e) => setPassword(e?.target?.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium">
                Confirm password
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
                  onChange={(e) => setConfirmPassword(e?.target?.value)}
                />
              </div>
            </div>

            {email !== "" &&
            email.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            ) &&
            password !== "" &&
            confirmPassword !== "" ? (
              <Link href={"/dashboard"}>
                <button
                  type="submit"
                  className="flex w-full mt-9 h-12 justify-center items-center rounded-md bg-white text-blue-500 hover:text-white hover:bg-blue-500 text-base font-bold"
                >
                  Sign up
                </button>
              </Link>
            ) : (
              <div>
                <button
                  type="submit"
                  className="flex w-full mt-4 h-12 justify-center items-center rounded-md bg-white text-blue-500 hover:text-white hover:bg-blue-500 text-base font-bold"
                >
                  Sign up
                </button>
              </div>
            )}
          </form>

          <p className="mt-5 text-center text-xs font-normal">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-semibold hover:underline">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
