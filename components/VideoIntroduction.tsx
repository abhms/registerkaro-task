"use client";

import { PiLightbulbFilamentBold } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";

const VideoIntroduction = () => {
  return (
    <div className="bg-sky-950 py-10">
      <div className="container mx-auto px-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:w-1/2 w-full mb-6 sm:mb-0 sm:order-1 order-2 ml-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Our Video Introduction
          </h1>
          <p className="text-white text-xs mb-4">
            We&apos;re excited to introduce our services and how we can help you
            grow your business. Watch the video on the right to learn more about
            us and our journey.
          </p>

          <div className="flex items-center mb-4">
            <PiLightbulbFilamentBold className="text-white text-4xl mr-3 bg-orange-500 rounded" />
            <h2 className="text-white text-2xl font-semibold">
              Explore ideas together
            </h2>
          </div>
          <p className="text-gray-400 mt-0 ml-10">
            Engage audience segment and finally create actionable insights,
            Amplify vertical integration.
          </p>

          {/* Second Icon and Heading on the same line */}
          <div className="flex items-center mb-4 mt-5">
            <BsGraphUp className="text-white text-4xl mr-3 bg-orange-500" />
            <h2 className="text-white text-2xl font-semibold">
              Bring those ideas to life
            </h2>
          </div>
          <p className="text-gray-400 mt-0 ml-10">
            Engage audience segment and finally create actionable insights,
            Amplify vertical integration.
          </p>
        </div>

        <div className="sm:w-1/2 w-full sm:order-2 order-1 mt-0 sm:mt-0">
          <div
            className="relative w-full"
            style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://youtu.be/JjHFubUPLV0?si=tlQ369izltvCvib5"
              title="Video Introduction"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroduction;
