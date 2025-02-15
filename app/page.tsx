import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./components/Navbar";
import About from "./about/page";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 pt-24">
      <NavigationBar />
      <main className="flex-1 flex flex-col sm:flex-row items-center justify-center p-12  px-6 py-12 sm:px-12 sm:py-16">
        <div className="sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 sm:mr-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-6 tracking-wide">
            Welcome to Wordzy
          </h1>

          <p className="text-base sm:text-xl text-gray-800 mb-12 leading-relaxed font-light">
          Wordzy is a vibrant blog dedicated to the magic of language, words, and communication.
           Here, we delve into the art of storytelling, the evolution of languages, 
           and the creativity behind expressions that connect us all.

          </p>

          <Link
            href="/blog"
            className="inline-block bg-purple-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 focus:ring-4 focus:ring-purple-300"
          >
            View Latest Blogs
          </Link>
        </div>

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[572px] lg:h-[572px]">
          <Image
            src="/images/main-image.jpg"
            alt="Tech Blog Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
      <About />
    </div>
  );
};

export default Home;
