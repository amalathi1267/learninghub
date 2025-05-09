import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HadoopCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Big Data Hadoop Course</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              Master Big Data technologies with our comprehensive Hadoop course. Learn to process
              and analyze large datasets using the Hadoop ecosystem and related tools.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Hadoop Architecture and Components</li>
                  <li>HDFS and MapReduce</li>
                  <li>Hive and Pig for Data Processing</li>
                  <li>Spark for Real-time Processing</li>
                  <li>HBase for NoSQL Database</li>
                  <li>Data Ingestion and ETL</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Details</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Duration: 4 months</li>
                  <li>Level: Intermediate to Advanced</li>
                  <li>Mode: Online/Offline</li>
                  <li>Projects: 5+ Big Data Projects</li>
                  <li>Certificate: Industry-recognized</li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              Enroll Now
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 