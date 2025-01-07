"use client";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Company Name */}
        <div className="text-2xl font-semibold ml-4">
          <Link href="/"><span className="text-blue-900">Register</span><span className="text-orange-500">Karo</span></Link>
        </div>

        {/* Right side - Navigation and Icons */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <nav className="space-x-6 hidden md:flex">
            <Link href="/">Home</Link>
            <div className="relative">
              <button className="inline-flex items-center">Our Services</button>
              
            </div>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/about">About Us</Link>
          </nav>

          {/* Search Icon */}
          <button className="p-2">
            <FaSearch />
          </button>

          {/* Talk Button */}
          <button className="p-2 bg-orange-500 text-white rounded-lg">
            Talk An Export
          </button>

          {/* User Icon (Optional for profile) */}
          <button className="p-2">
            <FaUserCircle />
          </button>
        </div>
      </div>

      <style jsx>{`
        nav div:hover > .absolute {
          display: block;
        }
      `}</style>
    </header>
  );
};

export default Header;