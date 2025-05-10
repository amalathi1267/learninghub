import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CourseModal from "@/components/CourseModal";

export default function CloudComputingCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cloud Computing Training</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Best Cloud Computing Training Institute in Chennai
            </h2>
            <p className="text-base text-gray-700 mb-3">
              Attend & Decide after a Free Demo Class in Chennai with our Real Time Cloud Computing expert.
            </p>
            <p className="text-base text-gray-700 mb-3">
              Call us for Chennai Center: <a href="tel:+919999999999" className="text-sky-500 hover:text-sky-600">+91 99999 99999</a> and Become a Cloud Computing expert.
            </p>
            <p className="text-base text-gray-700 mb-4">
              LearnHub was recently awarded as the best Cloud Computing Training Institute in Chennai by CEO of top IT companies!
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
                  src="/images/cloud-computing/cloud-computing-aws.jpg"
                  alt="AWS Cloud"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AWS CLOUD</h3>
              <p className="text-sm text-gray-600 mb-4">
                Master Amazon Web Services (AWS) cloud platform. Learn to design, deploy, and manage scalable cloud infrastructure using AWS services like EC2, S3, Lambda, and more.
              </p>
              <CourseModal 
                courseTitle="AWS CLOUD"
                courseDescription="Master Amazon Web Services (AWS) cloud platform. Learn to design, deploy, and manage scalable cloud infrastructure using AWS services like EC2, S3, Lambda, and more."
              />
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/cloud-computing/cloud-computing-azure.jpg"
                  alt="Azure Cloud"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AZURE CLOUD</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn Microsoft Azure cloud platform. Master cloud services, virtual machines, storage solutions, and Azure DevOps for enterprise-grade cloud applications.
              </p>
              <CourseModal 
                courseTitle="AZURE CLOUD"
                courseDescription="Learn Microsoft Azure cloud platform. Master cloud services, virtual machines, storage solutions, and Azure DevOps for enterprise-grade cloud applications."
              />
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/cloud-computing/cloud-computing-google.jpg"
                  alt="Google Cloud"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">GOOGLE CLOUD</h3>
              <p className="text-sm text-gray-600 mb-4">
                Master Google Cloud Platform (GCP). Learn cloud architecture, data analytics, machine learning, and container orchestration with Kubernetes on GCP.
              </p>
              <CourseModal 
                courseTitle="GOOGLE CLOUD"
                courseDescription="Master Google Cloud Platform (GCP). Learn cloud architecture, data analytics, machine learning, and container orchestration with Kubernetes on GCP."
              />
            </div>

            {/* Course Card 4 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[255px] h-[150px] relative mb-5">
                <Image
                  src="/images/cloud-computing/cloud-computing-devops.jpg"
                  alt="DevOps"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DEVOPS</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn DevOps practices and tools for cloud environments. Master CI/CD pipelines, containerization, infrastructure as code, and cloud-native development.
              </p>
              <CourseModal 
                courseTitle="DEVOPS"
                courseDescription="Learn DevOps practices and tools for cloud environments. Master CI/CD pipelines, containerization, infrastructure as code, and cloud-native development."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 