import React from "react";
import { FaStar } from "react-icons/fa";
import { AiFillYoutube, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

const HomeCarousel: React.FC = () => {
  return (
    <div className="relative bg-gray-300 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side - Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Google Rating */}
          <div className="flex justify-center md:justify-start items-center space-x-2 mb-4 ml-10">
            <div className="flex text-yellow-400">
              {[...Array(1)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <span className="text-x font-semibold text-black">
              Google Rating
            </span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-4 ml-10 mt-4">
            <h1 className="text-3xl font-bold text-black">
              Your Trusted Partner
            </h1>
            <h1 className="text-3xl font-bold text-black">
              for compliance business needs
            </h1>
          </div>

          {/* Description */}
          <div className="mb-6 ml-10">
            <p className="text-lg text-gray-700">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,
              <span className="font-bold">register, tax filings,</span> and
              other
              <span className="font-bold"> legal matters.</span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-8 mt-6 ml-20">
            {/* Handshake Icon */}
            <div className="flex flex-col items-center">
              <FaHandshake className="text-blue-500 text-3xl" />
              <p className="text-sm font-medium text-gray-700 mt-2"><span className="text-orange-400 text-xl font-bold">98.6%</span> financial stability</p>
            </div>
            {/* Clients Icon */}
            <div className="flex flex-col items-center">
              <AiOutlineUsergroupAdd className="text-green-500 text-3xl" />
              <p className="text-sm font-medium text-gray-700 mt-2"><span className="text-orange-400 text-xl font-bold">20,000+</span> Clients</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 ml-10 mt-6">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
              Talk An Export
            </button>
            <AiFillYoutube className="text-red-500 ml-9 mt-4" />
            <p className="font-semibold text-gray-700 mt-2 ml-4 mr-0">
              See how it works
            </p>
          </div>
        </div>

        {/* Right side - Single Image */}
        <div className="md:w-1/2 mt-6 mr-20 md:mt-0 flex justify-center md:justify-end">
          <img
            src="https://img.freepik.com/free-vector/male-programmer-glasses-working-computer-his-office-flat-vector-illustration_1284-66913.jpg"
            alt="Your Image"
            className="w-64 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;