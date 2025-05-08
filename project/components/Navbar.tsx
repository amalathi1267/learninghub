"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-sky-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">LearnHub</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-500 font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-sky-500 font-medium">
              Courses
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-500 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-500 font-medium">
              Contact
            </Link>
          </nav>
          
          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-sky-500 text-sky-500 hover:bg-sky-50"
              onClick={() => router.push("/login")}
            >
              Log In
            </Button>
            <Button
              className="bg-sky-500 hover:bg-sky-600 text-white"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
                onClick={() => {
                  router.push("/login");
                  setIsMenuOpen(false);
                }}
              >
                Log In
              </Button>
              <Button
                className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                onClick={() => {
                  router.push("/signup");
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}