"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreditCardForm from "@/components/checkout/CreditCardForm";
import PayPalButton from "@/components/checkout/PayPalButton";
import { courses } from "@/data/courses";

export default function CheckoutPage({ params }: { params: { courseId: string } }) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"credit-card" | "paypal">("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const course = courses.find(c => c.id === params.courseId);
  
  useEffect(() => {
    // Check if user is logged in - in a real app, this would use auth context
    const isLoggedIn = false; // Simulate not logged in
    
    if (!isLoggedIn) {
      // Store the intended course in localStorage/sessionStorage for after login
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('checkoutCourseId', params.courseId);
      }
      router.push(`/login?redirect=checkout/${params.courseId}`);
    }
  }, [params.courseId, router]);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Course not found</h1>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    );
  }
  
  const handlePaymentSubmit = async (formData?: any) => {
    // In a real app, this would send payment info to a payment processor
    setIsProcessing(true);
    setPaymentStatus("processing");
    
    // Simulate payment processing
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      
      if (success) {
        setPaymentStatus("success");
        // In a real app, would create an order and enroll the user
        setTimeout(() => {
          router.push(`/checkout/confirmation/${params.courseId}`);
        }, 1500);
      } else {
        setPaymentStatus("error");
        setErrorMessage("Your payment could not be processed. Please try again.");
      }
      
      setIsProcessing(false);
    }, 2000);
  };
  
  const isDiscount = course.discountPrice !== undefined;
  const price = course.price;
  const originalPrice = course.discountPrice || course.price;
  const discount = isDiscount ? originalPrice - price : 0;
  const tax = price * 0.05; // 5% tax example
  const total = price + tax;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <Link 
              href={`/courses/${course.id}`}
              className="inline-flex items-center text-sky-500 hover:text-sky-600"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to course</span>
            </Link>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Secure Checkout</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Payment Section */}
            <div className="lg:w-8/12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Payment Method</CardTitle>
                  <CardDescription>
                    Choose how you'd like to pay
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <RadioGroup 
                      defaultValue="credit-card" 
                      value={paymentMethod}
                      onValueChange={(value) => setPaymentMethod(value as "credit-card" | "paypal")}
                      className="space-y-4"
                    >
                      <div>
                        <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                            <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                            Credit or Debit Card
                          </Label>
                        </div>
                        
                        {paymentMethod === "credit-card" && (
                          <div className="mt-4 ml-6">
                            <CreditCardForm 
                              onSubmit={handlePaymentSubmit} 
                              isProcessing={isProcessing}
                            />
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                            <div className="h-5 w-5 mr-2 text-blue-600 font-bold text-sm">P</div>
                            PayPal
                          </Label>
                        </div>
                        
                        {paymentMethod === "paypal" && (
                          <div className="mt-4 ml-6">
                            <PayPalButton 
                              amount={total} 
                              onSubmit={handlePaymentSubmit}
                              isProcessing={isProcessing}
                            />
                          </div>
                        )}
                      </div>
                    </RadioGroup>
                    
                    {paymentStatus === "error" && (
                      <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <p>{errorMessage}</p>
                      </div>
                    )}
                    
                    {paymentStatus === "success" && (
                      <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <p>Payment successful! Redirecting to confirmation...</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t px-6 py-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Lock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Your payment information is secured with SSL encryption</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-4/12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image 
                        src={course.image}
                        alt={course.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.instructor.name}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Original Price</span>
                      <span className={isDiscount ? "line-through text-gray-500" : "text-gray-900"}>
                        ${originalPrice.toFixed(2)}
                      </span>
                    </div>
                    
                    {isDiscount && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Discount</span>
                        <span className="text-green-600">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price</span>
                      <span className="text-gray-900">${price.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-900">${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() => handlePaymentSubmit()}
                    disabled={paymentStatus === "processing"}
                  >
                    {paymentStatus === "processing" ? (
                      <div className="flex items-center">
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-opacity-20 border-t-white rounded-full"></div>
                        Processing...
                      </div>
                    ) : "Complete Purchase"}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    By completing your purchase you agree to our{" "}
                    <Link href="#" className="text-sky-500 hover:text-sky-600">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-sky-500 hover:text-sky-600">
                      Privacy Policy
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}