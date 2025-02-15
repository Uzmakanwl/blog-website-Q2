"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const posts = [
  {
    id: "1",
    title: "T A 3D Concept of Achieving Goals and Business Strategy",
    image: "/images/goal.jpg",
    content: [
      "In today's fast-paced business world, achieving success often requires a clear focus on goals and a well-defined strategy. This 3D render of a dartboard with a light bulb symbolizes the intersection of precision and innovation in reaching business milestones. Just like aiming for a bullseye on a dartboard, business leaders must target specific objectives while adapting their strategies to changing environments",
    ],
  },
  {
    id: "2",
    title: "The Future of Innovation: Understanding Artificial Intelligence and Machine Learning",
    image: "/images/artificial-intelligence.jpg",
    content: [
      "In the rapidly evolving world of technology, Artificial Intelligence (AI) and Machine Learning (ML) are at the forefront of transformative innovation. From self-driving cars to intelligent virtual assistants, AI and ML are shaping industries, enhancing efficiencies, and creating new possibilities across all sectors. But what do these technologies really mean, and how do they work?.",
    ],
  },
  {
    id: "3",
    title: "Unlocking the Power of Learning: A Journey to Personal and Professional Growth",
    image: "/images/learn.jpg",
    content: [
      "Learning is not just a process; it’s a journey—one that shapes who we are and who we can become. In both personal and professional spheres, continuous learning is the key to unlocking new opportunities, enhancing skills, and adapting to an ever-changing world. Whether it’s acquiring new knowledge, mastering a skill, or expanding your perspective, the power of learning is limitless.",
    ],
  },
  {
    id: "4",
    title: "Mastering the Art of Copywriting & UX Writing: Crafting Words That Convert",
    image: "/images/copy-ux.jpg",
    content: [
      "Copywriting and UX writing are two distinct yet interconnected disciplines that play a crucial role in the success of any digital product. While copywriting focuses on persuasive and engaging content aimed at driving action (like sales or sign-ups), UX writing ensures that the user interface (UI) is intuitive, clear, and easy to navigate.",

    ],
  },
  {
    id: "5",
    title: "Echoes of the Past: How History Continues to Shape Our Present",
    image: "/images/histroy.jpg",
    content: [
      " Visual Elements: A faded image of a historical monument or artifact, juxtaposed with modern elements (like a city skyline or modern technology). This could represent the connection between the past and the present.",
      "- Color Scheme: Soft, muted tones with contrasts of modern colors like teal, orange, or yellow to represent the ongoing influence of history.",
      "- Typography: A mix of vintage and contemporary fonts, balancing the old and new.",
    ],
  },
  {
    id: "6",
    title: "The Essence of Leadership: Cultivating the Attributes of Great Leaders",
    image: "/images/leadership.jpg",
    content: [
      "Leadership is not just about holding a position of authority; it’s about inspiring others, making strategic decisions, and leading by example. Great leaders possess certain key attributes that enable them to motivate, guide, and influence those around them. Whether you are a seasoned executive or just starting your leadership journey, understanding and developing these traits can unlock your full potential and the potential of your team.",
    ],
  },
  {
    id: "7",
    title: "The Business Playbook: Finance, Commerce, and Marketing for the Modern Entrepreneur",
    image: "/images/business.jpg",
    content: [
      "In the ever-changing world of business, success comes down to having a strong understanding of three key areas: finance, commerce, and marketing. Whether you’re starting your own business or looking to scale your existing company, mastering these areas is essential for long-term growth and profitability.",
    ],
  },
  {
    id: "8",
    title: "The Path to Wellness: Embracing a Healthy Lifestyle for a Better You",
    image: "/images/healthcare.jpg",
    content: [
      "Technology is transforming healthcare with innovations such as telemedicine, wearable devices, and AI diagnostics.",
      "These advancements improve patient outcomes, increase access to care, and reduce costs for both providers and patients.",
      "As the industry embraces digital transformation, ethical considerations around data privacy and accessibility are paramount.",
    ],
  },
  {
    id: "9",
    title: "Cyber Shadows: The Hidden World of Hackers and Digital Security",
    image: "/images/cybersecurity.jpg",
    content: [
      "In the digital age, hackers operate in the shadows, constantly testing the boundaries of what's secure and what's vulnerable. The battle between hackers and cybersecurity experts is a game of cat and mouse, where the stakes are high and the consequences can be catastrophic. This book takes you into the hidden world of hackers, examining their tactics, their motivations, and the ongoing struggle to secure our digital infrastructure.", 
    ],
  },
];

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };

  if (!post) {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-100 to-purple-200 pt-16">
      <Navbar />
      <div className="container mx-auto text-center p-6 sm:p-12 pt-16 md:pt-24">
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 sm:h-72 lg:h-96 mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black my-8">
          {post.title}
        </h1>
        <div className="text-lg sm:text-xl text-gray-700 leading-relaxed mx-auto max-w-4xl">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-10 max-w-sm md:max-w-2xl lg:max-w-4xl bg-gradient-to-t from-purple-200 via-indigo-100 to-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:ring focus:ring-purple-300 overflow-wrap break-words"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 ml-2 rounded-r hover:bg-purple-600"
            >
              Post
            </button>
          </div>
        </form>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to share your thoughts!
            </p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md p-4 text-gray-800"
              >
                {comment}
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
