import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    discountPrice?: number;
    duration: string;
    level: string;
    category: string;
    rating: number;
    reviewCount: number;
    students: number;
    instructor: {
      name: string;
    };
  };
  featured?: boolean;
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 ${
        isHovered ? "transform translate-y-[-4px]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/courses/${course.id}`)}
    >
      <div className="relative h-52 w-full">
        <Image 
          src={course.image}
          alt={course.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/80 text-gray-700 backdrop-blur-sm">
            {course.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
          {course.description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-sky-500 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-sky-500 mr-1" />
            <span>{course.students}+ students</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">({course.reviewCount})</span>
          </div>
          
          <div className="flex-grow"></div>
          
          <div className="flex items-center gap-2">
            {course.discountPrice && (
              <span className="text-sm line-through text-gray-500">${course.discountPrice}</span>
            )}
            <span className="font-semibold text-gray-900">${course.price}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100 flex items-center text-sm">
          <span className="text-gray-600">Instructor: </span>
          <span className="ml-1 font-medium text-gray-900">{course.instructor.name}</span>
        </div>
      </div>
    </div>
  );
}