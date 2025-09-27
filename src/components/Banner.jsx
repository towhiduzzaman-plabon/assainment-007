import React from "react";
import inProgressBg from "../assets/vector1.png";
import resolvedBg from "../assets/vector2.png";


function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* In-Progress */}
        <div
          className="relative rounded-2xl shadow-lg h-[250px] p-10 text-white flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #7f00ff, #9c27ff)",
          }}
        >
          <img
            src={inProgressBg}
            alt="in-progress bg"
            className="absolute inset-0 w-200px h-200px object-contain opacity-300"
          />
          <img
            src={inProgressBg}
            alt="in-progress bg"
            className="absolute bottom-0 right-0 w-200px h-200px object-contain opacity-400 transform scale-x-[-1]"
          />
          <img
            src={resolvedBg}
            alt="overlay bg"
            className="absolute inset-0 w-200px h-200px object-contain opacity-10"
          />


          <h2 className="text-2xl font-semibold relative z-10">In-Progress</h2>
          <p className="text-6xl font-bold mt-3 relative z-10">
            {inProgressCount}
          </p>
        </div>

        {/* Resolved */}
        <div
          className="relative rounded-2xl shadow-lg min-h-[250px] p-10 text-white flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #11998e, #38ef7d)",
          }}
        >
          <img
            src={inProgressBg}
            alt="in-progress bg"
            className="absolute inset-0 w-200px h-200px object-cover opacity-300"
          />

          <img
            src={inProgressBg}
            alt="resolved bg"
            className="absolute bottom-0 right-0 w-200px h-200px object-contain opacity-300 transform scale-x-[-1]"
          />

          <img
            src={resolvedBg}
            alt="overlay bg"
            className="absolute inset-0 w-200px h-200px object-cover opacity-10"
          />

          <h2 className="text-2xl font-semibold relative z-10">Resolved</h2>
          <p className="text-6xl font-bold mt-3 relative z-10">
            {resolvedCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;