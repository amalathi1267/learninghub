"use client";

import { CreditCard, Box, Globe, LucideCrop as LucideProps } from "lucide-react";

interface PaymentMethodBadgeProps {
  type: string;
  last4?: string;
  className?: string;
  compact?: boolean;
}

export default function PaymentMethodBadge({ 
  type, 
  last4, 
  className = "", 
  compact = false 
}: PaymentMethodBadgeProps) {
  const getCardDetails = () => {
    switch (type.toLowerCase()) {
      case 'visa':
        return {
          name: 'Visa',
          color: 'text-blue-600 bg-blue-50',
          icon: CreditCard
        };
      case 'mastercard':
        return {
          name: 'Mastercard',
          color: 'text-red-600 bg-red-50',
          icon: CreditCard
        };
      case 'amex':
      case 'american express':
        return {
          name: 'American Express',
          color: 'text-blue-500 bg-blue-50',
          icon: CreditCard
        };
      case 'discover':
        return {
          name: 'Discover',
          color: 'text-orange-600 bg-orange-50',
          icon: CreditCard
        };
      case 'paypal':
        return {
          name: 'PayPal',
          color: 'text-blue-700 bg-blue-50',
          icon: Globe
        };
      case 'apple pay':
        return {
          name: 'Apple Pay',
          color: 'text-gray-800 bg-gray-100',
          icon: CreditCard
        };
      case 'google pay':
        return {
          name: 'Google Pay',
          color: 'text-gray-700 bg-gray-100',
          icon: CreditCard
        };
      default:
        return {
          name: 'Card',
          color: 'text-gray-600 bg-gray-100',
          icon: CreditCard
        };
    }
  };
  
  const { name, color, icon: Icon } = getCardDetails();
  
  if (compact) {
    return (
      <div className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${color} ${className}`}>
        <Icon className="h-3 w-3 mr-1" />
        <span>{last4 ? `•••• ${last4}` : name}</span>
      </div>
    );
  }
  
  return (
    <div className={`inline-flex items-center rounded-md px-2.5 py-1 text-sm font-medium ${color} ${className}`}>
      <Icon className="h-4 w-4 mr-1.5" />
      <span>{name}{last4 ? ` •••• ${last4}` : ''}</span>
    </div>
  );
}