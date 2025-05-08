"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  cardName: z.string().min(3, "Enter the name on your card"),
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits")
    .max(19, "Card number must be at most 19 digits")
    .regex(/^[0-9\s]+$/, "Card number can only contain digits"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),
  cvv: z
    .string()
    .min(3, "CVV must be 3-4 digits")
    .max(4, "CVV must be 3-4 digits")
    .regex(/^\d+$/, "CVV can only contain digits"),
});

type CreditCardFormValues = z.infer<typeof formSchema>;

interface CreditCardFormProps {
  onSubmit: (data: CreditCardFormValues) => void;
  isProcessing: boolean;
}

export default function CreditCardForm({ onSubmit, isProcessing }: CreditCardFormProps) {
  const [focused, setFocused] = useState<string | null>(null);
  
  const form = useForm<CreditCardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  });
  
  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const groups = [];
    
    for (let i = 0; i < digits.length; i += 4) {
      groups.push(digits.slice(i, i + 4));
    }
    
    return groups.join(" ").trim();
  };
  
  const formatExpirationDate = (value: string) => {
    const digits = value.replace(/\D/g, "");
    
    if (digits.length <= 2) {
      return digits;
    }
    
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
  };
  
  const getCardType = (cardNumber: string) => {
    const cleanNumber = cardNumber.replace(/\D/g, "");
    
    if (/^4/.test(cleanNumber)) return "Visa";
    if (/^5[1-5]/.test(cleanNumber)) return "Mastercard";
    if (/^3[47]/.test(cleanNumber)) return "American Express";
    if (/^6(?:011|5)/.test(cleanNumber)) return "Discover";
    
    return "Unknown";
  };
  
  const cardType = getCardType(form.watch("cardNumber"));
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    e.target.value = formatted;
    form.setValue("cardNumber", formatted, { shouldValidate: true });
  };
  
  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpirationDate(e.target.value);
    e.target.value = formatted;
    form.setValue("expirationDate", formatted, { shouldValidate: true });
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="cardName"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="cardName">Name on card</Label>
              <FormControl>
                <Input
                  {...field}
                  id="cardName"
                  placeholder="John Doe"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={focused === "name" ? "border-sky-500 ring-1 ring-sky-500" : ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <Label htmlFor="cardNumber">Card number</Label>
              <FormControl>
                <div className="relative">
                  <Input
                    {...rest}
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    onChange={handleCardNumberChange}
                    maxLength={19}
                    onFocus={() => setFocused("number")}
                    onBlur={() => setFocused(null)}
                    className={`pl-10 ${focused === "number" ? "border-sky-500 ring-1 ring-sky-500" : ""}`}
                  />
                  <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  
                  {cardType !== "Unknown" && (
                    <div className="absolute right-3 top-2 text-xs font-medium text-gray-500">
                      {cardType}
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="expirationDate"
            render={({ field: { onChange, ...rest } }) => (
              <FormItem>
                <Label htmlFor="expirationDate">Expiration date</Label>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...rest}
                      id="expirationDate"
                      placeholder="MM/YY"
                      onChange={handleExpirationDateChange}
                      maxLength={5}
                      onFocus={() => setFocused("expiry")}
                      onBlur={() => setFocused(null)}
                      className={`pl-10 ${focused === "expiry" ? "border-sky-500 ring-1 ring-sky-500" : ""}`}
                    />
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="cvv">CVV</Label>
                <FormControl>
                  <Input
                    {...field}
                    id="cvv"
                    placeholder="123"
                    maxLength={4}
                    onFocus={() => setFocused("cvv")}
                    onBlur={() => setFocused(null)}
                    className={focused === "cvv" ? "border-sky-500 ring-1 ring-sky-500" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-green-500 hover:bg-green-600 mt-4"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center">
              <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-opacity-20 border-t-white rounded-full"></div>
              Processing...
            </div>
          ) : "Pay Now"}
        </Button>
      </form>
    </Form>
  );
}