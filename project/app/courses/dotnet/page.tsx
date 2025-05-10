import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CourseModal from "@/components/CourseModal";

export default function DotNetCourse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">.NET Training</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Level up your .NET Programming Skills
            </h2>
            <p className="text-base text-gray-700 mb-3">
              Feel & Decide after a Free Demo Class with our Experts.
            </p>
            <p className="text-base text-gray-700 mb-4">
              Call us: <a href="tel:+919999999999" className="text-sky-500 hover:text-sky-600">+91-9999999999</a> and Become a .NET Developer.
            </p>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg">
              BOOK A FREE DEMO
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#f2f4f4] p-6 rounded-lg">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[150px] relative mb-5">
                <Image
                  src="/images/dotnet-developing-as-dotnet.jpeg"
                  alt="ASP.NET Core MVC"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Developing ASP.NET Core MVC Web Applications</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how to develop a web application that uses the ASP.NET Core routing engine to present friendly URLs and a logical navigation hierarchy to users
              </p>
              <CourseModal 
                courseTitle="Developing ASP.NET Core MVC Web Applications"
                courseDescription="Learn how to develop a web application that uses the ASP.NET Core routing engine to present friendly URLs and a logical navigation hierarchy to users"
              />
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[150px] relative mb-5">
                <Image
                  src="/images/dotnet-web-service.jpeg"
                  alt=".NET Web Services"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">.NET Web Services Training: WCF, Web API and SignalR</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how to create Windows Communication Foundation (WCF) services, develop RESTful web services with ASP.NET Web API and connect MVC, WPF, and HTML5 browser clients to .NET services
              </p>
              <CourseModal 
                courseTitle=".NET Web Services Training: WCF, Web API and SignalR"
                courseDescription="Learn how to create Windows Communication Foundation (WCF) services, develop RESTful web services with ASP.NET Web API and connect MVC, WPF, and HTML5 browser clients to .NET services"
              />
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[150px] relative mb-5">
                <Image
                  src="/images/dotnet-visual-basic.jpeg"
                  alt="Visual Basic .NET"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming with Visual Basic .NET Training</h3>
              <p className="text-sm text-gray-600 mb-4">
                Construct web and Windows applications that fully exploit Visual Basic and .NET, Learn Model business logic through coding classes with fields, properties, methods, and events.
              </p>
              <CourseModal 
                courseTitle="Programming with Visual Basic .NET Training"
                courseDescription="Construct web and Windows applications that fully exploit Visual Basic and .NET, Learn Model business logic through coding classes with fields, properties, methods, and events."
              />
            </div>

            {/* Course Card 4 */}
            <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-[220px] h-[150px] relative mb-5">
                <Image
                  src="/images/dotnet-design-patterns.jpg"
                  alt=".NET Best Practices"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">.NET Best Practices and Design Patterns Training</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how to identify and apply the most modern of design patterns and architectures available for .NET – from lazy singletons to asynchronous adapters.
              </p>
              <CourseModal 
                courseTitle=".NET Best Practices and Design Patterns Training"
                courseDescription="Learn how to identify and apply the most modern of design patterns and architectures available for .NET – from lazy singletons to asynchronous adapters."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 