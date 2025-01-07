"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

// Define the structure of a Testimonial
interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

// Define the structure of the company prop
interface CompanyDetailsProps {
  company: {
    directorname: string;
    // Add other company fields as necessary
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations. I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.",
    image: "/director.png",
  },
  // Add more testimonials as needed
];

export default function CompanyDetails({ company }: CompanyDetailsProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-[#FF9B3E]">
          87.6% Customer Satisfaction
        </h2>
        <h3 className="text-3xl font-bold text-[#3D2410]">
          Serving Clients Across the Globe
        </h3>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative">
          <div className="text-center">
            <blockquote className="relative">
              <div className="text-2xl font-serif text-left">
                <span className="text-4xl absolute -left-6 -top-4">&quot;</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {testimonials[currentSlide].quote}
                </p>
                <span className="text-4xl absolute -right-6 bottom-0">
                  &quot;
                </span>
              </div>
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center text-left">
                <div className="flex-shrink-0">
                  <Image
                    className="h-14 w-14 rounded-full object-cover"
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    width={56}
                    height={56}
                  />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    {company.directorname}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentSlide].title}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Image
                    src="/Vector.png"
                    alt="Google"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-black">
                    Google Reviews
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-black">
                    4.3/5
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-600 w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
