"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const cards = [
  {
    id: 1,
    name: "Small business & Startup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPZhHESL453VhUi4sihZg6Op2wxeOfisAg&s",
    person: "John Doe",
    date: "2025-01-05",
    description: "An excellent package for startups.",
  },
  {
    id: 2,
    name: "Scale-up Company Offer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSyPdiyNCp8d1ChIYGGQkS5BcDX1Y-OZiFBFlyTgkmoPwQn-38LSvn1njTGkLJPSlXHY&usqp=CAU",
    person: "Jane Smith",
    date: "2025-01-06",
    description:
      "Designed for companies aiming to scale operations quickly and effectively.",
  },
  {
    id: 3,
    name: "Growing Business Package",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHyO_DO1gzYhrF_RlQzSelWtGJFK-dfGNSWW7kGICp-VVDzx7ku3a40q5Pnd_n-xNy2I&usqp=CAU",
    person: "Alice Johnson",
    date: "2025-01-04",
    description: "Ideal for growing businesses.",
  },
  {
    id: 4,
    name: "Small business & Startup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c5arf0sjcLUiQmiMz0GoZPdbbN31X9zYcmR1jmcFBH1sSmKAZhIPg6D6yXHy74E0Q28&usqp=CAU",
    person: "Robert Brown",
    date: "2025-01-07",
    description: "A perfect solution for entrepreneurs.",
  },
  {
    id: 5,
    name: "Scale-up Company Offer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNjeeiygeQAI6LO4gIpZpohnS7tC8SL_HWCOU53Da8xG09FOqs_v8ncs2rlPkrw9-kHg&usqp=CAU",
    person: "Emily Davis",
    date: "2025-01-08",
    description: "Comprehensive tools for businesses ready to expand globally.",
  },
  {
    id: 6,
    name: "Small business & Startup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwBKcRmjVEnZ7T7-jyQzUlIZGFJLpZcqxk_lBH9J6dMoO9_v-XmulKZfpcH3RePM3CMo&usqp=CAU",
    person: "Michael Wilson",
    date: "2025-01-03",
    description: "Tailored to meet the needs of small.",
  },
];

const TransformationPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <p className="text-orange-300 text-center">Explore our blogs</p>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Accelerate Digital Transformation
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white w-64 h-72 rounded-lg shadow-md overflow-hidden flex flex-col relative"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-32 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-medium text-gray-700 mb-2 flex items-center justify-between">
                  {card.name}
                  <FaArrowRight className="text-gray-500 text-lg ml-2" />
                </h2>

                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Person:</span> {card.person}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Date:</span> {card.date}
                </p>
                <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              </div>

              {/* Links Section */}
              <div className="border-t px-4 py-2 flex justify-between items-center">
                <div className="flex space-x-4">
                  {/* Ensure text and management links are visible */}
                  <Link
                    href="#"
                    className="text-blue-500 text-xs hover:underline font-medium"
                  >
                    Text
                  </Link>
                  <Link
                    href="#"
                    className="text-blue-500 text-xs hover:underline font-medium"
                  >
                    Management
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <button className="px-6 py-2 bg-blue-900 text-white rounded-lg mt-7 flex items-center space-x-2 justify-center">
            <span>Show more blogs</span>
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformationPage;