"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Plus, Trash2, Edit, AlertCircle } from "lucide-react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import CreditCardForm from "@/components/checkout/CreditCardForm";

// Mock payment methods
const initialPaymentMethods = [
  {
    id: "pm_1",
    type: "visa",
    last4: "4242",
    expMonth: 12,
    expYear: 25,
    name: "John Doe",
    isDefault: true,
  },
  {
    id: "pm_2",
    type: "mastercard",
    last4: "5678",
    expMonth: 8,
    expYear: 24,
    name: "John Doe",
    isDefault: false,
  },
];

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const handleAddCard = (formData: any) => {
    setIsProcessing(true);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Create a new payment method
        const newMethod = {
          id: `pm_${Math.random().toString(36).substring(2, 9)}`,
          type: getCardType(formData.cardNumber),
          last4: formData.cardNumber.slice(-4),
          expMonth: parseInt(formData.expirationDate.split('/')[0]),
          expYear: parseInt(formData.expirationDate.split('/')[1]),
          name: formData.cardName,
          isDefault: paymentMethods.length === 0,
        };
        
        setPaymentMethods([...paymentMethods, newMethod]);
        setSuccess(true);
        
        // Reset after a delay
        setTimeout(() => {
          setIsAddingCard(false);
          setSuccess(false);
        }, 1500);
      } catch (err) {
        setError("An error occurred while adding your card. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }, 1500);
  };
  
  const handleRemoveCard = (id: string) => {
    const updatedMethods = paymentMethods.filter(method => method.id !== id);
    
    // If we removed the default card and there are other cards, make the first one default
    if (paymentMethods.find(method => method.id === id)?.isDefault && updatedMethods.length > 0) {
      updatedMethods[0].isDefault = true;
    }
    
    setPaymentMethods(updatedMethods);
  };
  
  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id,
    })));
  };
  
  const getCardType = (cardNumber: string) => {
    const cleanNumber = cardNumber.replace(/\D/g, "");
    
    if (/^4/.test(cleanNumber)) return "visa";
    if (/^5[1-5]/.test(cleanNumber)) return "mastercard";
    if (/^3[47]/.test(cleanNumber)) return "amex";
    if (/^6(?:011|5)/.test(cleanNumber)) return "discover";
    
    return "unknown";
  };
  
  const getCardLogo = (type: string) => {
    switch (type) {
      case "visa":
        return "text-blue-600 font-bold";
      case "mastercard":
        return "text-red-500 font-bold";
      case "amex":
        return "text-blue-500 font-bold";
      case "discover":
        return "text-orange-500 font-bold";
      default:
        return "text-gray-600 font-bold";
    }
  };
  
  const getCardName = (type: string) => {
    switch (type) {
      case "visa":
        return "Visa";
      case "mastercard":
        return "Mastercard";
      case "amex":
        return "American Express";
      case "discover":
        return "Discover";
      default:
        return "Card";
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payment Methods</h2>
          <p className="text-muted-foreground">
            Manage your payment methods
          </p>
        </div>
        <Button 
          onClick={() => setIsAddingCard(true)}
          className="bg-sky-500 hover:bg-sky-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </div>
      
      <Separator />
      
      {paymentMethods.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-100 p-3 mb-4">
              <CreditCard className="h-6 w-6 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">No payment methods found</h3>
            <p className="text-gray-500 text-center mb-6 max-w-md">
              You haven't added any payment methods yet. Add a credit card or PayPal account to make purchases.
            </p>
            <Button 
              onClick={() => setIsAddingCard(true)}
              className="bg-sky-500 hover:bg-sky-600"
            >
              Add Payment Method
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {paymentMethods.map(method => (
            <Card key={method.id} className={method.isDefault ? "border-sky-500" : ""}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-10 h-6 flex items-center justify-center mr-2 ${getCardLogo(method.type)}`}>
                      {method.type.toUpperCase().slice(0, 1)}
                    </div>
                    <CardTitle className="text-lg">{getCardName(method.type)} •••• {method.last4}</CardTitle>
                  </div>
                  {method.isDefault && (
                    <span className="text-xs bg-sky-50 text-sky-600 px-2 py-1 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <CardDescription>
                  Expires {method.expMonth.toString().padStart(2, '0')}/{method.expYear}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <div>
                  {!method.isDefault && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSetDefault(method.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                </div>
                <div className="flex gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remove Payment Method</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to remove this card ending in {method.last4}? 
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          className="bg-red-500 hover:bg-red-600"
                          onClick={() => handleRemoveCard(method.id)}
                        >
                          Remove
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Payment Method</DialogTitle>
                        <DialogDescription>
                          Update your card information
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="py-4">
                        <p className="text-sm text-amber-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          For security reasons, you can't edit an existing card. Please remove this card and add a new one.
                        </p>
                      </div>
                      
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      
      <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Add a new credit or debit card to your account
            </DialogDescription>
          </DialogHeader>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-start mb-4">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
          
          {success ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Card added successfully</h3>
              <p className="text-gray-500">Your new payment method has been added to your account.</p>
            </div>
          ) : (
            <CreditCardForm 
              onSubmit={handleAddCard}
              isProcessing={isProcessing}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}