"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the toggle button

  // Toggle menu visibility
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Do nothing if the click is on the toggle button itself
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }
      
      // Close the menu if the click is outside the nav container
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const user = useUser();
  // console.log(user.user?.id)

  return (
    <nav className="bg-white shadow sticky top-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left section: logo and toggle */}
        <div className="flex items-center">
          {/* Toggle button with its own ref */}
          <button
            ref={buttonRef}
            className="md:hidden mr-3 cursor-pointer"
            onClick={toggleMenu}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            Connecto
          </Link>
        </div>

        {/* Center nav links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link
            href="/"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/forums"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Forums
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Contact us
          </Link>
        </div>
        

        {/* Right section: always show user button */}
        <div className="flex items-center">
          <UserButton />
        </div>
      </div>

      {/* Mobile menu (below nav on small screens) */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-700 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/forums"
            onClick={() => setOpen(false)}
            className="block text-gray-700 cursor-pointer"
          >
            Forums
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-gray-700 cursor-pointer"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}