"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Download, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

export default function ConfirmationPage({ params }: { params: { courseId: string } }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const course = courses.find(c => c.id === params.courseId);
  
  useEffect(() => {
    // Simulate checking if payment was actually made (in a real app, this would verify with the backend)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-sky-500 border-opacity-20 border-t-sky-500 rounded-full"></div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Course not found</h1>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    );
  }
  
  // Generate a random order ID
  const orderId = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  const orderDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const price = course.price;
  const tax = price * 0.05; // 5% tax example
  const total = price + tax;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You for Your Purchase!</h1>
            <p className="text-gray-600">
              Your order has been successfully processed and you now have access to the course.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Order Confirmation</span>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>Receipt</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Order Number</h3>
                  <p className="font-medium text-gray-900">{orderId}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Date</h3>
                  <p className="font-medium text-gray-900">{orderDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                  <p className="font-medium text-gray-900">user@example.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Method</h3>
                  <p className="font-medium text-gray-900">Credit Card (•••• 4242)</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Order Details</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image 
                        src={course.image}
                        alt={course.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.instructor.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-4 w-4 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Access Your Course</h3>
                  <p className="text-gray-600 text-sm">
                    Your course is now available in your dashboard. You can start learning immediately.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-4 w-4 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Track Your Progress</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor your learning journey through the dashboard. Set goals and track your achievements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-4 w-4 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Connect with Peers</h3>
                  <p className="text-gray-600 text-sm">
                    Join the course community to connect with fellow learners and enhance your learning experience.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button 
                variant="outline" 
                onClick={() => router.push("/")}
              >
                Browse More Courses
              </Button>
              <Button 
                className="bg-sky-500 hover:bg-sky-600"
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}