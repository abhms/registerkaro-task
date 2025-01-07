"use client";

import { FaRegFileAlt, FaCreditCard, FaUserCheck, FaEnvelope } from "react-icons/fa";

const ConnectionPage = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-8">
          Get Connected with Us
        </h1>

        {/* Four Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ml-10 mr-10">
          {/* Step 1: Fill up Application Form */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaRegFileAlt className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">Fill up Application Form</h2>
            <p className="text-gray-500 mt-2">
              Complete the application form with necessary details to begin the process.
            </p>
          </div>

          {/* Step 2: Make Online Payment */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaCreditCard className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">Make Online Payment</h2>
            <p className="text-gray-500 mt-2">
              Pay online securely using our easy payment gateway.
            </p>
          </div>

          {/* Step 3: Executive will Process Application */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaUserCheck className="text-4xl text-orange-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">Executive will Process Application</h2>
            <p className="text-gray-500 mt-2">
              Our executive will review and process your application for approval.
            </p>
          </div>

          {/* Step 4: Get Confirmation Mail */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">Get Confirmation Mail</h2>
            <p className="text-gray-500 mt-2">
              Receive a confirmation email once your application is successfully processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;