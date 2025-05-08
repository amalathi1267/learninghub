"use client";

import { useState, useEffect } from "react";
import { Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ThreeDSecureModalProps {
  isOpen: boolean;
  onComplete: (success: boolean) => void;
  cardType: string;
  amount: number;
}

export default function ThreeDSecureModal({
  isOpen,
  onComplete,
  cardType,
  amount
}: ThreeDSecureModalProps) {
  const [step, setStep] = useState<'verification' | 'success' | 'error'>('verification');
  const [code, setCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep('verification');
      setCode("");
      setIsProcessing(false);
    }
  }, [isOpen]);
  
  const handleVerify = () => {
    setIsProcessing(true);
    
    // Simulate verification process
    setTimeout(() => {
      // 90% success rate for demo
      const success = Math.random() > 0.1;
      
      setStep(success ? 'success' : 'error');
      setIsProcessing(false);
      
      if (success) {
        // Auto-close after success
        setTimeout(() => {
          onComplete(true);
        }, 1500);
      }
    }, 1500);
  };
  
  const renderContent = () => {
    switch (step) {
      case 'verification':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Secure Verification</DialogTitle>
              <DialogDescription>
                Your bank requires additional verification for this purchase.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="bg-amber-50 border border-amber-100 rounded-md p-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium mb-1">Verification Required</p>
                  <p>
                    For security purposes, your bank has requested additional verification 
                    for this transaction. Please enter the code sent to your registered mobile number.
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Amount</p>
                    <p className="text-xl font-bold">${amount.toFixed(2)}</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-md px-3 py-2">
                    <p className="text-sm text-gray-500">Card Type</p>
                    <p className="font-medium capitalize">{cardType}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="verification-code">
                  Verification Code
                </label>
                <Input
                  id="verification-code"
                  placeholder="Enter the code sent to your phone"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="text-lg tracking-wide text-center"
                  maxLength={6}
                />
                <p className="text-xs text-gray-500">
                  A 6-digit code has been sent to your registered mobile number.
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <div className="flex items-center mr-auto text-xs text-gray-500">
                <Lock className="h-3 w-3 mr-1" />
                <span>Secured by your bank</span>
              </div>
              <Button
                variant="outline"
                onClick={() => onComplete(false)}
                disabled={isProcessing}
              >
                Cancel
              </Button>
              <Button
                onClick={handleVerify}
                disabled={code.length < 6 || isProcessing}
                className="bg-green-500 hover:bg-green-600"
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-opacity-20 border-t-white rounded-full"></div>
                    Verifying...
                  </div>
                ) : "Verify"}
              </Button>
            </DialogFooter>
          </>
        );
        
      case 'success':
        return (
          <>
            <div className="py-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Authorized</h3>
              <p className="text-gray-500">Your payment has been successfully verified. Completing your purchase...</p>
            </div>
          </>
        );
        
      case 'error':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Verification Failed</DialogTitle>
              <DialogDescription>
                We were unable to verify your payment.
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="bg-red-50 border border-red-100 rounded-md p-4 flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-red-800">
                  <p className="font-medium mb-1">Verification Failed</p>
                  <p>
                    The verification code you entered is incorrect or has expired. 
                    Please try again or use a different payment method.
                  </p>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setStep('verification')}
              >
                Try Again
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={() => onComplete(false)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </>
        );
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onComplete(false)}>
      <DialogContent className="max-w-md">
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}