import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CourseModal from "@/components/CourseModal";

export default function AWSCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AWS Training</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Best AWS Training Institute in Chennai
            </h2>
            <p className="text-base text-gray-700 mb-3">
              Attend & Decide after a Free Demo Class in Chennai with our Real Time AWS expert.
            </p>
            <p className="text-base text-gray-700 mb-3">
              Call us for Chennai Center: <a href="tel:+919999999999" className="text-sky-500 hover:text-sky-600">+91 99999 99999</a> and Become an AWS expert.
            </p>
            <p className="text-base text-gray-700 mb-4">
              LearnHub was recently awarded as the best AWS Training Institute in Chennai by CEO of top IT companies!
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg">
              BOOK A FREE DEMO
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#f2f4f4] p-6 rounded-lg">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[220px] relative mb-5">
                <Image
                  src="/images/aws/aws-cloud-practitioner.png"
                  alt="Cloud Practitioner"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">CLOUD PRACTITIONER</h3>
              <p className="text-sm text-gray-600 mb-4">
                Build your AWS Cloud Skills with Training and Certification. Learn fundamental AWS cloud concepts and services.
              </p>
              <CourseModal 
                courseTitle="CLOUD PRACTITIONER"
                courseDescription="Build your AWS Cloud Skills with Training and Certification. Learn fundamental AWS cloud concepts and services."
              />
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[220px] relative mb-5">
                <Image
                  src="/images/aws/aws-architect.png"
                  alt="Architect"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ARCHITECT</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn to design highly available systems. Master AWS architecture patterns and best practices for scalable applications.
              </p>
              <CourseModal 
                courseTitle="ARCHITECT"
                courseDescription="Learn to design highly available systems. Master AWS architecture patterns and best practices for scalable applications."
              />
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[220px] relative mb-5">
                <Image
                  src="/images/aws/aws-developer.png"
                  alt="Developer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DEVELOPER</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn to develop applications for the cloud. Master AWS development tools and services for building cloud-native applications.
              </p>
              <CourseModal 
                courseTitle="DEVELOPER"
                courseDescription="Learn to develop applications for the cloud. Master AWS development tools and services for building cloud-native applications."
              />
            </div>

            {/* Course Card 4 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[220px] relative mb-5">
                <Image
                  src="/images/aws/aws-devops.png"
                  alt="DevOps Engineer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DEVOPS ENGINEER</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn to design, deploy and manage AWS Cloud systems. Master CI/CD, infrastructure as code, and cloud automation.
              </p>
              <CourseModal 
                courseTitle="DEVOPS ENGINEER"
                courseDescription="Learn to design, deploy and manage AWS Cloud systems. Master CI/CD, infrastructure as code, and cloud automation."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 