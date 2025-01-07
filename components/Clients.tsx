"use client";

import { FaGoogle, FaFacebook, FaAmazon, FaApple } from "react-icons/fa";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const clientLogos = [
  { name: "Google", icon: <FaGoogle className="text-4xl text-blue-500" /> },
  { name: "Facebook", icon: <FaFacebook className="text-4xl text-blue-800" /> },
  { name: "Amazon", icon: <FaAmazon className="text-4xl text-orange-500" /> },
  { name: "Apple", icon: <FaApple className="text-4xl text-black" /> },
  // Add more logos as needed
];

const Clients = () => {
  return (
    <div className="bg-gray-400 py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Our Happy Clients
        </h1>

        {/* Client Logos and Learn More Link */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                {client.icon}
              </div>
            ))}
          </div>

          {/* Learn More Link */}
          <Link href="/" className="text-blue-800 flex items-center space-x-2">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clients;