"use client";

import { Lock, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function HomeContent() {
  const [userCount, setUserCount] = useState(4312);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((count) => count + Math.floor(Math.random() * 3));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      let interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    setCount(0); // reset count to restart animation
    const el = document.getElementById("features");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-b from-indigo-100 via-white to-white min-h-screen flex flex-col scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-200 rounded-full blur-[100px] opacity-40" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-200 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            Welcome to <span className="text-indigo-600">Connecto</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            Simple, secure 1-on-1 chats and vibrant forum discussions — all in one place.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/forums"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Explore Forums
            </Link>
            <Link
              href="/chat"
              className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold border border-indigo-600 hover:bg-indigo-50 transition duration-200"
            >
              Private Chat
            </Link>
          </div>
        </div>

        <a
          href="#features"
          className="mt-16 text-indigo-600 hover:underline text-sm z-10 animate-bounce"
          onClick={handleLearnMoreClick}
        >
          ↓ Learn more
        </a>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-4 py-24 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center"
      >
        <FeatureCard
          icon={<MessageCircle className="w-8 h-8 text-indigo-600 mb-4 mx-auto" />}
          title="Private Messaging"
          description="Fast and lightweight one-on-one conversations — no clutter, just chat."
        />
        <div ref={ref}>
          <FeatureCard
            icon={<Users className="w-8 h-8 text-indigo-600 mb-4 mx-auto" />}
            title={`${count}+ Users Connected`}
            description="Connecto grows every second — people are joining from around the world."
          />
        </div>
        <FeatureCard
          icon={<Lock className="w-8 h-8 text-indigo-600 mb-4 mx-auto" />}
          title="Vibrant Forums"
          description="Join open discussions and share ideas in a clean, distraction-free environment."
        />
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-4 pb-32 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center md:text-left">
          <strong>Connecto</strong> is crafted with passion to enable seamless one-on-one conversations and public discussions.
          Inspired by modern communication challenges, we focus on speed, simplicity, and intuitive design — without unnecessary complexity
          like group creation or bloated social features.
          <br /><br />
          At the heart of Connecto lies our <strong>Forum system</strong> — an open space for thoughtful discussions, idea sharing, and building communities.
          Whether you&apos;re engaging privately or exploring topics publicly, Connecto keeps conversations fast, secure, and distraction-free.
        </p>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      {icon}
      <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
