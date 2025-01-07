"use client";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left ml-7">
          <p className="text-orange-300">Welcome To Registerkaro.in</p>
            <h1 className="text-4xl font-bold text-gray-800">About <span className="text-orange-500">RegisterKaro</span></h1>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat, urna id sodales sodales, nunc ligula fermentum quam, at
              vulputate libero ligula eu eros. Phasellus volutpat eros vel
              dignissim tempor. Integer vitae orci eu eros vestibulum tristique
              in nec velit. Duis ut nisi non lorem suscipit ullamcorper.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Quisque in bibendum metus. Nullam placerat, nisi id pretium
              pharetra, enim elit suscipit nunc, vel rutrum justo metus ut
              velit. Aenean nec bibendum risus, sed gravida mi. Integer id orci
              auctor, vehicula velit at, facilisis mi.
            </p>
            <button className="px-6 py-2 bg-blue-900 text-white rounded-lg mt-7 flex items-center space-x-2">
              <span>See all Services</span>
              <FaRegArrowAltCircleRight />
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1340226712/photo/successful-team.jpg?s=612x612&w=0&k=20&c=4oOBm64d7-nJ4rK49EDyQ2u6TN7WgywRapF8_hVn_wQ="
              alt="About Us"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;