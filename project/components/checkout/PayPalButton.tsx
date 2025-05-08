"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PayPalButtonProps {
  amount: number;
  onSubmit: () => void;
  isProcessing: boolean;
}

export default function PayPalButton({ amount, onSubmit, isProcessing }: PayPalButtonProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      // In a real app, this would validate with PayPal
      setIsLoggedIn(true);
    } else {
      onSubmit();
    }
  };
  
  if (isLoggedIn) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">{email}</p>
              <p className="text-sm text-gray-600">PayPal Balance</p>
            </div>
            <div className="text-right">
              <p className="font-medium">${amount.toFixed(2)}</p>
              <button 
                className="text-sm text-sky-500 hover:text-sky-600"
                onClick={() => setIsLoggedIn(false)}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700" 
          onClick={onSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center">
              <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-opacity-20 border-t-white rounded-full"></div>
              Processing...
            </div>
          ) : "Pay with PayPal"}
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="paypal-email">Email</Label>
        <Input
          id="paypal-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your-email@example.com"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="paypal-password">Password</Label>
        <Input
          id="paypal-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={!email || !password}
      >
        Log in to PayPal
      </Button>
      
      <p className="text-xs text-center text-gray-500">
        By continuing, you agree to PayPal's terms and conditions.
      </p>
    </form>
  );
}