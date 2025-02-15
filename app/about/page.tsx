import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200 pt-24">
      <Navbar />
      <main className="flex-1 flex flex-col items-center p-4 sm:p-12 sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-8 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-800 text-left mb-4 sm:mb-6 leading-tight font-light">
           Wordzy is a platform that provides engaging and informative content to help users improve their writing skills,
           expand their vocabulary, and stay updated on the latest trends in language and literature
          </p>
          <p className="text-sm sm:text-base md:text-xl text-gray-800 mb-4 text-left sm:mb-6 leading-tight md:leading-relaxed font-light">
            Wordzy's blog is a valuable resource for anyone passionate about word language.
             Stay up todate with the latest trends, tutorials, 
             and resources  both beginners and experts in the field!
          </p>
        </div>
        <div className="relative w-56 h-36 sm:w-44 sm:h-24 md:w-72 md:h-44 lg:w-96 lg:h-64 hover:shadow-lg hover:shadow-indigo-500 transition-shadow duration-300">
          <Image
            src="/images/word-power.jpg"
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <Link
          href="/blog"
          className="inline-block bg-purple-500 text-white mt-10 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm lg:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 focus:ring-4 focus:ring-purple-300"
        >
          View Latest Blogs
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default About;
