"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import EnquiryForm from "@/components/InquiryCapsule";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-sky-100 to-blue-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover Your Next Learning Adventure
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Explore our wide range of courses designed to help you advance your skills and career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-sky-500 hover:bg-sky-600 text-white" 
                  size="lg"
                >
                  Browse Courses
                </Button>
                <Button 
                  variant="outline" 
                  className="border-sky-500 text-sky-500 hover:bg-sky-50"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg" 
                  alt="Learning online" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
<section className="py-10 bg-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="flex justify-center">
      <div className="relative w-full max-w-xl">
        <Input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 py-6 text-lg rounded-full border-gray-200 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>

    {/* Course Icons Grid */}
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <Link href="/courses/java">
        <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <Image
            src="/courses-img/java.png"
            alt="Java Course"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-sm font-medium text-gray-800">Java</span>
        </div>
      </Link>
      <Link href="/courses/android">
        <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <Image
            src="/courses-img/android.png"
            alt="Android Course"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-sm font-medium text-gray-800">Android</span>
        </div>
      </Link>
      <Link href="/courses/hadoop">
        <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <Image
            src="/courses-img/hadoop.png"
            alt="Hadoop Course"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-sm font-medium text-gray-800">Big Data Hadoop</span>
        </div>
      </Link>
      <Link href="/courses/dotnet">
        <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <Image
            src="/courses-img/dotnet.png"
            alt=".NET Course"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-sm font-medium text-gray-800">.NET</span>
        </div>
      </Link>
      <Link href="/courses/mobile-testing">
        <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <Image
            src="/courses-img/web-designing.png"
            alt="Mobile Testing Course"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-sm font-medium text-gray-800">Mobile Testing</span>
        </div>
      </Link>
      <Link href="/courses/php">
        <div className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
          <Image
            src="/courses-img/php.png"
            alt="PHP Course"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-sm font-medium text-gray-800">PHP</span>
        </div>
      </Link>
    </div>
  </div>
</section>

      
      
      {/* Featured Courses Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <Link 
              href="/courses" 
              className="text-sky-500 hover:text-sky-600 flex items-center text-sm font-medium"
            >
              View all courses <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn With Us</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our platform offers an exceptional learning experience with expert instructors and comprehensive courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-700">
                Learn from industry professionals with years of experience in their fields.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-700">
                Study at your own pace and access course materials anytime, anywhere.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-700">
                Gain skills that employers are looking for and advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-sky-500">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already advancing their careers with our courses.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-sky-500 hover:bg-sky-50"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Any Questions?</h2>
            <p className="text-lg text-gray-700 mb-8">Fill out the form below and we will get back to you as soon as possible.</p>
            <Link href="/Inquiry">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                InquiryCapsule
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}