import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CourseModal from "@/components/CourseModal";

export default function SeleniumCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Selenium Training</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Best Selenium Training Institute in Chennai
            </h2>
            <p className="text-base text-gray-700 mb-3">
              Attend & Decide after a Free Demo Class in Chennai with our Real Time Selenium expert.
            </p>
            <p className="text-base text-gray-700 mb-3">
              Call us for Chennai Center: <a href="tel:+919999999999" className="text-sky-500 hover:text-sky-600">+91 99999 99999</a> and Become a Selenium expert.
            </p>
            <p className="text-base text-gray-700 mb-4">
              Greens Technologies was recently awarded as the best Selenium Training Institute in Chennai by CEO of top IT companies!
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
                  src="/images/selenium-core-java.jfif"
                  alt="Core Java"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">CORE JAVA</h3>
              <p className="text-sm text-gray-600 mb-4">
                It is a part of basic java programming language where it is an open source, secure and free mainly used for creating or developing general purpose application. It works on different platforms (Mac, Windows etc…) and it has a large demand in the current market.
              </p>
              <CourseModal 
                courseTitle="CORE JAVA"
                courseDescription="It is a part of basic java programming language where it is an open source, secure and free mainly used for creating or developing general purpose application. It works on different platforms (Mac, Windows etc…) and it has a large demand in the current market."
              />
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/selenium-manual-testing.png"
                  alt="Manual Testing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">MANUAL TESTING</h3>
              <p className="text-sm text-gray-600 mb-4">
                Manual Testing is one of the fundamental testing software which can be used to detect defects by both visible and hidden, and also it helps to determine the behavior. In simple terms it can be defined as a process by which test cases are executed manually without using any automation tool.
              </p>
              <CourseModal 
                courseTitle="MANUAL TESTING"
                courseDescription="Manual Testing is one of the fundamental testing software which can be used to detect defects by both visible and hidden, and also it helps to determine the behavior. In simple terms it can be defined as a process by which test cases are executed manually without using any automation tool."
              />
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/selenium-automation-testing.jpg"
                  alt="Automation Testing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AUTOMATION TESTING</h3>
              <p className="text-sm text-gray-600 mb-4">
                Automation testing is a testing method where it makes possible to run tests without and human intervention. In other words testers use specialized tools to execute test cases automatically. This approach reduces the time and effort needed for repetitive and resource-intensive tasks that are challenging to perform manually.
              </p>
              <CourseModal 
                courseTitle="AUTOMATION TESTING"
                courseDescription="Automation testing is a testing method where it makes possible to run tests without and human intervention. In other words testers use specialized tools to execute test cases automatically. This approach reduces the time and effort needed for repetitive and resource-intensive tasks that are challenging to perform manually."
              />
            </div>

            {/* Course Card 4 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/selenium-database.jpg"
                  alt="Database"
                  fill
                  className="object-cover rounded-lg bg-white"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DATABASE</h3>
              <p className="text-sm text-gray-600 mb-4">
                It is a well-structured and organized data collection stored in the system, where it helps for rapid search and retrieval by the computer. All data's are controlled by (DBMS) Data Base Management System. Most databases use structured query language (SQL) for writing and querying data.
              </p>
              <CourseModal 
                courseTitle="DATABASE"
                courseDescription="It is a well-structured and organized data collection stored in the system, where it helps for rapid search and retrieval by the computer. All data's are controlled by (DBMS) Data Base Management System. Most databases use structured query language (SQL) for writing and querying data."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 