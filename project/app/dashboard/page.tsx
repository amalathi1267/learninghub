"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  LayoutDashboard, 
  LifeBuoy, 
  LogOut, 
  MessageSquare, 
  Settings, 
  Star, 
  User, 
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { courses } from "@/data/courses";

export default function Dashboard() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("overview");
  
  // Mock enrolled courses (in a real app, this would come from API)
  const enrolledCourses = courses.slice(0, 3);
  
  // Mock user data (in a real app, this would come from authentication context)
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "student",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    joined: "May 2023",
    completedCourses: 2,
    activeCourses: 3,
    certificates: 1,
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r border-gray-200 bg-white">
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-sky-500" />
            <span className="font-bold text-lg">LearnHub</span>
          </Link>
        </div>
        
        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
          <nav className="flex-1 px-3 space-y-2">
            <Link 
              href="/dashboard" 
              className="flex items-center px-3 py-2 text-gray-900 rounded-md bg-sky-50 font-medium"
            >
              <LayoutDashboard className="mr-3 h-5 w-5 text-sky-500" />
              Dashboard
            </Link>
            
            <Link 
              href="/dashboard/courses" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <BookOpen className="mr-3 h-5 w-5 text-gray-500" />
              My Courses
            </Link>
            
            <Link 
              href="/dashboard/calendar" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Calendar className="mr-3 h-5 w-5 text-gray-500" />
              Calendar
            </Link>
            
            <Link 
              href="/dashboard/messages" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <MessageSquare className="mr-3 h-5 w-5 text-gray-500" />
              Messages
            </Link>
            
            <Link 
              href="/dashboard/profile" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <User className="mr-3 h-5 w-5 text-gray-500" />
              Profile
            </Link>
            
            <Separator className="my-4" />
            
            <Link 
              href="/dashboard/settings" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <Settings className="mr-3 h-5 w-5 text-gray-500" />
              Settings
            </Link>
            
            <Link 
              href="/dashboard/help" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <LifeBuoy className="mr-3 h-5 w-5 text-gray-500" />
              Help Center
            </Link>
            
            <Link 
              href="/" 
              className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-500" />
              Logout
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Mobile Header */}
        <div className="sticky top-0 z-10 md:hidden flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-sky-500" />
            <span className="font-bold text-lg">LearnHub</span>
          </div>
          <Button variant="outline" size="icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </Button>
        </div>
        
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-sky-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Enrolled Courses</p>
                        <p className="text-3xl font-bold text-gray-900">{user.activeCourses}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <GraduationCap className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Completed</p>
                        <p className="text-3xl font-bold text-gray-900">{user.completedCourses}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                        <Star className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Certificates</p>
                        <p className="text-3xl font-bold text-gray-900">{user.certificates}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Member Since</p>
                        <p className="text-xl font-bold text-gray-900">{user.joined}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex bg-white rounded-lg p-1">
                    <TabsTrigger value="overview" className="rounded-md data-[state=active]:bg-sky-50 data-[state=active]:text-sky-500">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="in-progress" className="rounded-md data-[state=active]:bg-sky-50 data-[state=active]:text-sky-500">
                      In Progress
                    </TabsTrigger>
                    <TabsTrigger value="completed" className="rounded-md data-[state=active]:bg-sky-50 data-[state=active]:text-sky-500">
                      Completed
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {enrolledCourses.map((course) => (
                        <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="relative h-48 w-full">
                            <Image 
                              src={course.image}
                              alt={course.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="bg-white/90 text-gray-700">
                                {course.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription className="flex items-center text-sm mt-1">
                              <Clock className="h-4 w-4 mr-1 text-gray-500" />
                              <span>Last accessed 2 days ago</span>
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="pb-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>Progress</span>
                                <span className="font-medium">{Math.floor(Math.random() * 100)}%</span>
                              </div>
                              <Progress value={Math.floor(Math.random() * 100)} className="h-2" />
                            </div>
                            
                            <Button 
                              variant="outline" 
                              className="w-full mt-4 border-sky-500 text-sky-500 hover:bg-sky-50"
                              onClick={() => router.push(`/courses/${course.id}`)}
                            >
                              Continue Learning
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle>Recommended Courses</CardTitle>
                        <CardDescription>Based on your interests and learning history</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {courses.slice(3, 6).map((course) => (
                            <div 
                              key={course.id} 
                              className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-md cursor-pointer"
                              onClick={() => router.push(`/courses/${course.id}`)}
                            >
                              <div className="relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden">
                                <Image 
                                  src={course.image}
                                  alt={course.title}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{course.title}</p>
                                <p className="text-sm text-gray-500 truncate mt-1">{course.instructor.name}</p>
                                <div className="flex items-center mt-1">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <svg 
                                        key={i} 
                                        className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="ml-1 text-xs text-gray-500">({course.reviewCount})</span>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <span className="text-sm font-medium text-gray-900">${course.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-center">
                          <Link 
                            href="/" 
                            className="text-sky-500 hover:text-sky-600 flex items-center justify-center text-sm font-medium"
                          >
                            Browse more courses <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="in-progress" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {enrolledCourses.slice(0, 2).map((course) => (
                        <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="relative h-48 w-full">
                            <Image 
                              src={course.image}
                              alt={course.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="bg-white/90 text-gray-700">
                                {course.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription className="flex items-center text-sm mt-1">
                              <Clock className="h-4 w-4 mr-1 text-gray-500" />
                              <span>Last accessed 2 days ago</span>
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="pb-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>Progress</span>
                                <span className="font-medium">{Math.floor(Math.random() * 100)}%</span>
                              </div>
                              <Progress value={Math.floor(Math.random() * 100)} className="h-2" />
                            </div>
                            
                            <Button 
                              variant="outline" 
                              className="w-full mt-4 border-sky-500 text-sky-500 hover:bg-sky-50"
                              onClick={() => router.push(`/courses/${course.id}`)}
                            >
                              Continue Learning
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="completed" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {enrolledCourses.slice(2, 3).map((course) => (
                        <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="relative h-48 w-full">
                            <Image 
                              src={course.image}
                              alt={course.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="bg-white/90 text-gray-700">
                                {course.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription className="flex items-center text-sm mt-1">
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="pb-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>Progress</span>
                                <span className="font-medium">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>
                            
                            <div className="flex gap-2 mt-4">
                              <Button 
                                variant="outline" 
                                className="flex-1 border-sky-500 text-sky-500 hover:bg-sky-50"
                                onClick={() => router.push(`/courses/${course.id}`)}
                              >
                                View Course
                              </Button>
                              <Button 
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                              >
                                Certificate
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}