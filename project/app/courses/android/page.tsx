import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AndroidCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Android Development Course</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              Learn Android app development from scratch. Build professional mobile applications
              using Kotlin and Android Studio. Master UI/UX design, app architecture, and deployment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Kotlin Programming Language</li>
                  <li>Android UI Components and Layouts</li>
                  <li>Activity and Fragment Lifecycle</li>
                  <li>Data Storage and SQLite</li>
                  <li>RESTful API Integration</li>
                  <li>Firebase Integration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Details</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Duration: 4 months</li>
                  <li>Level: Beginner to Advanced</li>
                  <li>Mode: Online/Offline</li>
                  <li>Projects: 6+ Real-world Apps</li>
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