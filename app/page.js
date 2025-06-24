import { Divide } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-indigo-100 to-white">
      <section className="max-w-7xl mx-auto px-4 py-48 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-indigo-600">Connecto</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          The next-gen real-time chat app built for speed, simplicity, and security.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/forums"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </a>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-3 text-center">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Real-Time Messaging</h3>
          <p className="text-gray-600">
            Lightning-fast messaging experience with WebSocket-powered real-time chat.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">End-to-End Encryption</h3>
          <p className="text-gray-600">
            Your conversations are protected with strong encryption from device to device.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Group Chats & Media</h3>
          <p className="text-gray-600">
            Create channels, share images, videos, and more—seamlessly with your group.
          </p>
        </div>
      </section>
    </main>
  );
}


export const metadata ={
  title: 'Connecto',
  description: 'Connecto - The next-gen real-time chat app built for speed, simplicity, and security.',
  icons: {
    icon: '/favicon.ico',
  },
}