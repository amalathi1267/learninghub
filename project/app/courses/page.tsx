"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import Link from "next/link";

export default function CoursesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-100 to-blue-50 pt-24 pb-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore our comprehensive range of courses designed to help you advance your career.
            </p>
            
            {/* Search Bar */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl">
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg rounded-full border-gray-200 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Icons Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Link href="/courses/java">
              <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src="/courses-img/java.png"
                  alt="Java"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <span className="text-sm font-medium text-gray-800">Java</span>
              </div>
            </Link>
            <Link href="/courses/dotnet">
              <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src="/courses-img/dotnet.png"
                  alt=".Net"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <span className="text-sm font-medium text-gray-800">.Net</span>
              </div>
            </Link>
            <Link href="/courses/selenium">
              <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src="/courses-img/selenium.png"
                  alt="Selenium"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <span className="text-sm font-medium text-gray-800">Selenium</span>
              </div>
            </Link>
            <Link href="/courses/python">
              <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src="/courses-img/python.png"
                  alt="Python"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <span className="text-sm font-medium text-gray-800">Python</span>
              </div>
            </Link>
            <Link href="/courses/cloud-computing">
              <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src="/courses-img/cloud-computing.png"
                  alt="Cloud Computing"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <span className="text-sm font-medium text-gray-800">Cloud Computing</span>
              </div>
            </Link>
            <Link href="/courses/aws">
              <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
                <Image
                  src="/courses-img/aws.png"
                  alt="AWS"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <span className="text-sm font-medium text-gray-800">AWS</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
