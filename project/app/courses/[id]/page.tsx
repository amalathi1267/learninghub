"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Clock, BookOpen, Users, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

// Add generateStaticParams function to pre-render all course pages
export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id
  }));
}

export default function CourseDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const course = courses.find(c => c.id === params.id);
  const [selectedTab, setSelectedTab] = useState("overview");
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Course not found</h1>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    );
  }

  const handleEnrollment = () => {
    router.push(`/checkout/${params.id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Course Header */}
      <div className="bg-gradient-to-r from-sky-100 to-blue-50 pt-24 pb-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-7/12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-700">{course.lessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-700">{course.students}+ students</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-sky-500 mr-2" />
                  <span className="text-gray-700">{course.level}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Instructors</h3>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image 
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{course.instructor.name}</p>
                    <p className="text-sm text-gray-600">{course.instructor.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleEnrollment}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <div className="relative h-[240px] md:h-[320px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={course.image}
                  alt={course.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-3xl font-bold text-gray-900">${course.price}</p>
                  {course.discountPrice && (
                    <p className="text-lg line-through text-gray-500">${course.discountPrice}</p>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white mb-4"
                  size="lg"
                  onClick={handleEnrollment}
                >
                  Enroll Now
                </Button>
                
                <p className="text-sm text-center text-gray-600 mb-6">
                  30-day money-back guarantee
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Full lifetime access</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Access on mobile and desktop</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Certificate of completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="py-12 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex bg-gray-100 rounded-lg p-1">
              <TabsTrigger value="overview" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-sky-500">
                Overview
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-sky-500">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-sky-500">
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-8">
              <TabsContent value="overview">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                  <p className="text-gray-700 mb-6">{course.fullDescription || course.description}</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {course.learningOutcomes?.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Prerequisites</h3>
                  <ul className="list-disc pl-5 mb-8 space-y-1 text-gray-700">
                    {course.prerequisites?.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Target Audience</h3>
                  <p className="text-gray-700">
                    {course.targetAudience || "This course is designed for anyone looking to advance their skills in this subject area."}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                  
                  <div className="space-y-4">
                    {course.curriculum?.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Section {sectionIndex + 1}: {section.title}
                          </h3>
                        </div>
                        
                        <div className="divide-y divide-gray-200">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="p-4 flex justify-between items-center">
                              <div className="flex items-center">
                                {lesson.type === "video" ? (
                                  <BookOpen className="h-5 w-5 text-sky-500 mr-3" />
                                ) : (
                                  <Award className="h-5 w-5 text-green-500 mr-3" />
                                )}
                                <span className="text-gray-800">{lesson.title}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-500">{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-gray-900 mr-2">{course.rating}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">({course.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {course.reviews?.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-center mb-2">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image 
                              src={review.avatar || "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
                              alt={review.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{review.name}</p>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      
      {/* Related Courses */}
      <section className="py-12 bg-sky-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter(c => c.id !== course.id && c.category === course.category)
              .slice(0, 3)
              .map(relatedCourse => (
                <div 
                  key={relatedCourse.id} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  onClick={() => router.push(`/courses/${relatedCourse.id}`)}
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{relatedCourse.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(relatedCourse.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600">({relatedCourse.reviewCount})</span>
                      </div>
                      <span className="font-semibold text-gray-900">${relatedCourse.price}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}