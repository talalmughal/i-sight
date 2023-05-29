import Link from "next/link";

export default function Forget() {
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
          <h2 className="text-center text-3xl font-extrabold">
            Recover account
          </h2>
        </div>

        <div className="h-[1px] w-8 bg-[#C0BDCC] mt-5 mb-10"></div>

        <div className="w-full">
          <form className="space-y-9" action="/dashboard" method="POST">
            <span className="text-gray-300 text-xs font-light flex justify-center text-center">
              We will send you an account recovery code on the email you enter
              below
            </span>

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

            <button
              type="submit"
              className="flex w-full h-12 justify-center items-center rounded-md bg-white text-blue-500 hover:text-white hover:bg-blue-500 text-base font-bold"
            >
              Get Code
            </button>
          </form>

          <p className="mt-5 text-center text-xs font-normal">
            Remember your password?{" "}
            <Link href="/login">
              <span className="font-semibold hover:underline">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
