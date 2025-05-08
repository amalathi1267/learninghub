"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Download, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  CalendarIcon,
  CheckCircle,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/data/courses";

// Mock order data
const initialOrders = [
  {
    id: "ORD-1234",
    date: "2025-04-20",
    courseId: "1",
    amount: 99.99,
    status: "completed",
  },
  {
    id: "ORD-2345",
    date: "2025-04-15",
    courseId: "2",
    amount: 89.99,
    status: "completed",
  },
  {
    id: "ORD-3456",
    date: "2025-04-10",
    courseId: "3",
    amount: 79.99,
    status: "completed",
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  
  // Filter and sort orders
  const filteredOrders = orders
    .filter(order => {
      // Filter by status
      if (filterStatus !== "all" && order.status !== filterStatus) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm) {
        const course = courses.find(c => c.id === order.courseId);
        const searchLower = searchTerm.toLowerCase();
        return (
          order.id.toLowerCase().includes(searchLower) ||
          course?.title.toLowerCase().includes(searchLower)
        );
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sort by selected option
      switch (sortBy) {
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "amount-asc":
          return a.amount - b.amount;
        case "amount-desc":
          return b.amount - a.amount;
        default:
          return 0;
      }
    });
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const handleViewOrderDetails = (order: any) => {
    setSelectedOrder(order);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Purchase History</h2>
        <p className="text-muted-foreground">
          View and manage your course purchases
        </p>
      </div>
      
      <Separator />
      
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        
        <div className="flex gap-4">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Latest Orders</SelectItem>
              <SelectItem value="date-asc">Oldest Orders</SelectItem>
              <SelectItem value="amount-desc">Highest Amount</SelectItem>
              <SelectItem value="amount-asc">Lowest Amount</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredOrders.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-100 p-3 mb-4">
              <GraduationCap className="h-6 w-6 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">No orders found</h3>
            <p className="text-gray-500 text-center mb-6 max-w-md">
              {searchTerm || filterStatus !== "all" 
                ? "Try changing your search or filter criteria."
                : "You haven't purchased any courses yet. Browse our catalog to find courses you're interested in."}
            </p>
            {!searchTerm && filterStatus === "all" && (
              <Button className="bg-sky-500 hover:bg-sky-600">
                <Link href="/">Browse Courses</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map(order => {
            const course = courses.find(c => c.id === order.courseId);
            
            if (!course) return null;
            
            return (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image 
                        src={course.image}
                        alt={course.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <p className="text-sm text-gray-500">Order #{order.id}</p>
                          <h3 className="font-medium text-gray-900">{course.title}</h3>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{formatDate(order.date)}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between mt-3">
                        <div className="flex items-center">
                          {order.status === "completed" && (
                            <span className="inline-flex items-center text-xs rounded-full bg-green-50 text-green-700 px-2 py-1">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </span>
                          )}
                          {order.status === "refunded" && (
                            <span className="inline-flex items-center text-xs rounded-full bg-amber-50 text-amber-700 px-2 py-1">
                              Refunded
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center mt-3 md:mt-0 gap-3">
                          <span className="font-semibold">${order.amount.toFixed(2)}</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewOrderDetails(order)}
                          >
                            View Details
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing {filteredOrders.length} of {orders.length} orders
            </p>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-sky-50 text-sky-600">
                1
              </Button>
              <Button variant="outline" size="icon" disabled>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
              <DialogDescription>
                Order #{selectedOrder.id}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {(() => {
                const course = courses.find(c => c.id === selectedOrder.courseId);
                if (!course) return null;
                
                return (
                  <>
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
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Order Date</p>
                        <p className="font-medium">{formatDate(selectedOrder.date)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Order Status</p>
                        <p className="font-medium capitalize">{selectedOrder.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Subtotal</p>
                        <p className="font-medium">${(selectedOrder.amount * 0.95).toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Tax</p>
                        <p className="font-medium">${(selectedOrder.amount * 0.05).toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">Total</p>
                      <p className="font-semibold">${selectedOrder.amount.toFixed(2)}</p>
                    </div>
                    
                    <Separator />
                    
                    <div className="text-sm">
                      <p className="text-gray-500">Payment Method</p>
                      <p className="font-medium">Credit Card (•••• 4242)</p>
                    </div>
                  </>
                );
              })()}
            </div>
            
            <DialogFooter className="flex gap-2 justify-between sm:justify-between">
              <Button variant="outline" onClick={() => setSelectedOrder(null)}>
                Close
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Receipt
                </Button>
                <Button className="bg-sky-500 hover:bg-sky-600">
                  <Link href={`/dashboard`}>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      View Course
                    </div>
                  </Link>
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}