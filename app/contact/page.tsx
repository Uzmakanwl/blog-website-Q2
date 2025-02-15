import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineX } from "react-icons/ai";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 text-gray-800 py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center">
          Connect with me on social media or drop a message through any platform
          below.
        </p>

        <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <div className="flex items-center text-lg hover:text-purple-500 transition duration-300">
            <AiOutlineMail size={24} />
            <Link
              href="mailto:muzamilqureashi2222@gmail.com"
              className="ml-2 hover:underline"
            >
              muzamilqureashi2222@gmail.com
            </Link>
          </div>

          <div className="flex items-center text-lg hover:text-purple-500 transition duration-300">
            <AiOutlinePhone size={24} />
            <Link href="tel:+92 3132003571" className="ml-2 hover:underline">
              +92 312 58380559
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link
            href="https://github.com/"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Github"
          >
            <FaGithub size={40} />
          </Link>
         
          <Link
            href=""
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={40} />
          </Link>
          <Link
            href="https://www.instagram.com/muhammadmuzamil128"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muzamil-khan-40a9742a9"
            target="_blank"
            className="hover:text-purple-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
