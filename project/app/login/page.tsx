"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["student", "instructor", "admin"], {
    required_error: "Please select a role",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if we have a redirect parameter
    const redirect = searchParams.get('redirect');
    if (redirect) {
      setRedirectPath(redirect);
    }
    
    // Or check session storage for any stored redirect (from checkout flow)
    else if (typeof window !== 'undefined') {
      const storedCourseId = sessionStorage.getItem('checkoutCourseId');
      if (storedCourseId) {
        setRedirectPath(`checkout/${storedCourseId}`);
      }
    }
  }, [searchParams]);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "student",
    },
  });
  
  const onSubmit = (data: LoginFormValues) => {
    console.log("Login data:", data);
    // In a real app, this would authenticate the user
    
    // Clear any stored checkout ID
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('checkoutCourseId');
    }
    
    // Redirect based on the flow
    if (redirectPath) {
      router.push(`/${redirectPath}`);
    } else {
      router.push("/dashboard");
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-12 md:py-20 bg-gradient-to-r from-sky-100 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="md:w-5/12 lg:w-4/12">
              <div className="hidden md:block">
                <div className="relative h-[400px] w-full">
                  <Image 
                    src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                    alt="Login illustration"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-7/12 lg:w-5/12 max-w-md">
              <Card className="w-full shadow-md">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
                  <CardDescription className="text-center">
                    {redirectPath ? 
                      "Sign in to your account to continue with your purchase" : 
                      "Sign in to your account to continue"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                type="email" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="••••••••" 
                                  type={showPassword ? "text" : "password"} 
                                  {...field}
                                />
                                <div 
                                  className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>I am a</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex gap-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="student" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Student
                                  </FormLabel>
                                </FormItem>
                                
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="instructor" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Instructor
                                  </FormLabel>
                                </FormItem>
                                
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="admin" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    Admin
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
                        Sign In
                      </Button>
                    </form>
                  </Form>
                  
                  <div className="mt-6 text-center text-sm">
                    <Link href="#" className="text-sky-500 hover:text-sky-700">
                      Forgot your password?
                    </Link>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <div className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-sky-500 hover:text-sky-700 font-medium">
                      Sign up
                    </Link>
                  </div>
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