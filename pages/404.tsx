import Link from "next/link";

const Page = () => {
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
      <div className="flex flex-col items-center px-10 py-20">
        <h3 className="mb-8 text-6xl font-extrabold tracking-tight text-gray-100 leading-8">
          404
        </h3>
        <p className="mb-4 text-base font-semibold tracking-wide text-gray-100 uppercase leading-6">
          Page not found
        </p>
        <p className="text-base text-center text-gray-200 leading-6">
          The road you were on happened to lead to a dead end hombre
        </p>
        <p className="mt-2 text-base text-gray-500 leading-6">
          <Link href="/" passHref>
            <span className="text-blue-400 cursor-pointer"> Go Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
