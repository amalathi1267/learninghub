import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CourseModal from "@/components/CourseModal";

export default function PythonCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Python Training</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Best Python Training Institute in Chennai
            </h2>
            <p className="text-base text-gray-700 mb-3">
              Attend & Decide after a Free Demo Class in Chennai with our Real Time Python expert.
            </p>
            <p className="text-base text-gray-700 mb-3">
              Call us for Chennai Center: <a href="tel:+919999999999" className="text-sky-500 hover:text-sky-600">+91 99999 99999</a> and Become a Python expert.
            </p>
            <p className="text-base text-gray-700 mb-4">
              LearnHub was recently awarded as the best Python Training Institute in Chennai by CEO of top IT companies!
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg">
              BOOK A FREE DEMO
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#f2f4f4] p-6 rounded-lg">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/python/python-basics.jpg"
                  alt="Python Basics"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">PYTHON BASICS</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn Python programming fundamentals, data types, control structures, functions, and object-oriented programming concepts. Perfect for beginners starting their programming journey.
              </p>
              <CourseModal 
                courseTitle="PYTHON BASICS"
                courseDescription="Learn Python programming fundamentals, data types, control structures, functions, and object-oriented programming concepts. Perfect for beginners starting their programming journey."
              />
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/python/python-web-development.png"
                  alt="Web Development"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">WEB DEVELOPMENT</h3>
              <p className="text-sm text-gray-600 mb-4">
                Master web development with Python using Django and Flask frameworks. Learn to build robust, scalable web applications with modern features and best practices.
              </p>
              <CourseModal 
                courseTitle="WEB DEVELOPMENT"
                courseDescription="Master web development with Python using Django and Flask frameworks. Learn to build robust, scalable web applications with modern features and best practices."
              />
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/python/python-machine-learning.png"
                  alt="Data Science"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DATA SCIENCE</h3>
              <p className="text-sm text-gray-600 mb-4">
                Explore data science with Python using libraries like NumPy, Pandas, and Scikit-learn. Learn data analysis, visualization, machine learning, and statistical modeling.
              </p>
              <CourseModal 
                courseTitle="DATA SCIENCE"
                courseDescription="Explore data science with Python using libraries like NumPy, Pandas, and Scikit-learn. Learn data analysis, visualization, machine learning, and statistical modeling."
              />
            </div>

            {/* Course Card 4 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/python/python-automation-testing.png"
                  alt="Automation Testing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AUTOMATION TESTING</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn automation testing with Python using Selenium. Master web testing automation, test frameworks, and best practices for efficient software testing.
              </p>
              <CourseModal 
                courseTitle="AUTOMATION TESTING"
                courseDescription="Learn automation testing with Python using Selenium. Master web testing automation, test frameworks, and best practices for efficient software testing."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 