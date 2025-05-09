import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CourseModal from "@/components/CourseModal";

export default function JavaCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Java Training</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Level up your Java Programming Skills
            </h2>
            <p className="text-base text-gray-700 mb-3">
              Feel & Decide after a Free Demo Class with our Experts.
            </p>
            <p className="text-base text-gray-700 mb-4">
              Call us: <a href="tel:+919999999999" className="text-sky-500 hover:text-sky-600">+91-9999999999</a> and Become a Java Developer.
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg">
              BOOK A FREE DEMO
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Course Card 1 */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 relative mb-3">
                <Image
                  src="/images/django-vs-flask.jpg"
                  alt="Java SE"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Java SE 8 Developer Bootcamp</h3>
              <p className="text-sm text-gray-600 mb-4">
                Master Java SE 8 programming with hands-on projects and real-world applications.
              </p>
              <CourseModal 
                courseTitle="Java SE 8 Developer Bootcamp"
                courseDescription="Master Java SE 8 programming with hands-on projects and real-world applications."
              />
            </div>

            {/* Course Card 2 */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 relative mb-3">
                <Image
                  src="/images/machine-learn.png"
                  alt="Android & Java"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Android & Java Developer Course</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn Android app development using Java with practical mobile app projects.
              </p>
              <CourseModal 
                courseTitle="Android & Java Developer Course"
                courseDescription="Learn Android app development using Java with practical mobile app projects."
              />
            </div>

            {/* Course Card 3 */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 relative mb-3">
                <Image
                  src="/images/data-analysis.png"
                  alt="Java Programming"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Java Programming</h3>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive Java programming course for beginners to advanced developers.
              </p>
              <CourseModal 
                courseTitle="Java Programming"
                courseDescription="Comprehensive Java programming course for beginners to advanced developers."
              />
            </div>

            {/* Course Card 4 */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 relative mb-3">
                <Image
                  src="/images/selenium-with-python.png"
                  alt="Selenium with Java"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Selenium with Java Training</h3>
              <p className="text-sm text-gray-600 mb-4">
                Master automated testing with Selenium WebDriver and Java programming.
              </p>
              <CourseModal 
                courseTitle="Selenium with Java Training"
                courseDescription="Master automated testing with Selenium WebDriver and Java programming."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 