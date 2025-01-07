"use client";

import Link from "next/link";
import { GrVirtualMachine } from "react-icons/gr";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";
import {MdOutlineLocationCity } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FcServices } from "react-icons/fc";

const Services = () => {
  const services = [
    {
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
      icon: <FiSettings className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
      icon: <FcServices className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: "Virtual Office Address",
      description:
        "Foster customer relationship by effectively serving your market.",
      icon: <GrVirtualMachine className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
      icon: <MdOutlineLocationCity className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      icon: <BiBuildingHouse className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: "Bookkeeping Services",
      description: "Curabitur sit amet eros sed elit vehicula tincidunt.",
      icon: <TbBrandBooking className="text-4xl text-orange-500 mb-4" />,
    },
  ];

  return (
    <div className="bg-gray-300 min-h-screen py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Page Title */}
        <p className="text-center mb-2 text-orange-600 text-lg">
          Welcome To RegisterKaro.in
        </p>
        <h1 className="text-4xl font-bold mb-10 text-black">
          Explore Our Services
        </h1>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 rounded-lg p-6 shadow-lg bg-white flex flex-col items-center"
            >
              {/* Dynamic Icon */}
              {service.icon}
              {/* Service Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              {/* Service Description */}
              <p className="text-gray-600 text-center">{service.description}</p>
              <Link
                href="/"
                className="text-blue-800 mt-4 flex items-center space-x-2"
              >
                <span>Learn more</span>
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
          ))}
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg mt-7">
          See all Services
        </button>
      </div>
    </div>
  );
};

export default Services;