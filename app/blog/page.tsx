"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const articles = [
  {
    id: "1",
    title: " A 3D Concept of Achieving Goals and Business Strategy",
    image: "/images/goal.jpg",
    summary:
      "In today's fast-paced business world, achieving success.",
  },
  {
    id: "2",
    title: "The Future of Innovation: Understanding Artificial Intelligence and Machine Learning",
    image: "/images/artificial-intelligence.jpg",
    summary: "Artificial Intelligence (AI) and Machine Learning (ML).",
  },
  {
    id: "3",
    title: "Unlocking the Power of Learning: A Journey to Personal and Professional Growth",
    image: "/images/learn.jpg",
    summary:
      "Learning is not just a process; it’s a journey—one that shapes.",
  },
  {
    id: "4",
    title: "Mastering the Art of Copywriting & UX Writing: Crafting Words That Convert",
    image: "/images/copy-ux.jpg",
    summary: "Copywriting and UX writing are two distinct yet interconnected disciplines that.",
  },
  {
    id: "5",
    title: "Echoes of the Past: How History Continues to Shape Our Present",
    image: "/images/histroy.jpg",
    summary:
      "How History Continues to Shape Our Present.",
  },
  {
    id: "6",
    title: "The Essence of Leadership: Cultivating the Attributes of Great Leaders",
    image: "/images/leadership.jpg",
    summary: "Leadership is not just about holding a position of authority.",
  },
  {
    id: "7",
    title: "The Business Playbook: Finance, Commerce, and Marketing for the Modern Entrepreneur",
    image: "/images/business.jpg",
    summary:
      "Marketing for the Modern Entrepreneur in the ever-changing world of business.",
  },
  {
    id: "8",
    title: "The Path to Wellness: Embracing a Healthy Lifestyle for a Better You",
    image: "/images/healthcare.jpg",
    summary: "Technology is transforming healthcare with innovations.",
  },
  {
    id: "9",
    title: "Cyber Shadows: The Hidden World of Hackers and Digital Security",
    image: "/images/cybersecurity.jpg",
    summary:
      "The Hidden World of Hackers and Digital Security.",
  },
];

const ArticlesPage = () => {
  const [displayLimit, setDisplayLimit] = useState(6);

  const showMoreArticles = () => {
    setDisplayLimit((currentLimit) => currentLimit + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-20">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 my-8">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10 md:p-16">
        {articles.slice(0, displayLimit).map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link href={`/articles/${article.id}`}>
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30"></div>
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 hover:text-purple-600">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
              <Link
                href={`/blog/${article.id}`}
                className="text-purple-500 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {displayLimit < articles.length && (
        <div className="text-center mb-10">
          <button
            onClick={showMoreArticles}
            className="bg-purple-500 text-white px-5 py-3 rounded-md hover:bg-purple-600"
          >
            Load More
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ArticlesPage;
