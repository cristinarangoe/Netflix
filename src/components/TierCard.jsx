import React from "react";

export default function TierCard({ name, info, onClick }) {
  const { title, description, tier, currentTier, price } = info;

  return (
    <div>
      <button className="mx-auto">
        {tier === currentTier ? (
          <button
            onClick={onClick}
            className="mt-4 md:mt-0 block bg-red-600 rounded-2xl md:rounded-none  md:rounded-r-2xl md:rounded-bl-2xl mx-auto md:mx-2 lg:mx-5 h-40 w-62 md:h-72 md:w-52 lg:h-96 lg:w-64 focus:outline focus:outline-3 focus:outline-blue-500 "
          >
            {/* <div className="left-0 top-0">
              <svg
                className="w-6 h-6"
                color={"rgb(29,78,216)"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div> */}

            <div className="flex flex-col space-y-4 md:space-y-8">
              <h5 class="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-black">
                {title}
              </h5>
              <span className="text-xl md:text-3xl lg:text-4xl text-white font-semibold ">
                ${price}/month
              </span>
              <p class="font-normal text-md text-black mt-[5%] mx-5 lg:text-lg">
                {description}.
              </p>
              <br />
            </div>
            <div className="hidden md:absolute top-3 right-[48%]">
              <svg
                className="w-8 h-8 mx-auto"
                color={"rgb(29,78,216)"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
          </button>
        ) : (
          <button
            onClick={onClick}
            className="mt-4 md:mt-0 block bg-black rounded-2xl md:rounded-none  md:rounded-r-2xl md:rounded-bl-2xl mx-auto md:mx-2 lg:mx-5 h-40 w-62 md:h-72 md:w-52 lg:h-96 lg:w-64 focus:outline focus:outline-3 focus:outline-blue-500 "
          >
            <div className="flex flex-col space-y-4 md:space-y-8">
              <h5 class="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white">
                {title}
              </h5>
              <span className="text-xl md:text-3xl lg:text-4xl text-red-600 font-semibold ">
                ${price}/month
              </span>
              <p class="font-normal text-md text-white mt-[5%] mx-5 lg:text-lg">
                {description}.
              </p>
              <br />
            </div>
          </button>
        )}
      </button>
    </div>
  );
}
