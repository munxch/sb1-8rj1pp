"use client"

import { X, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface CartItem {
  name: string
  price: number
  quantity: number
  image: string
}

export function CartSheet() {
  // Mock cart items - in a real app, this would come from a cart state management system
  const cartItems: CartItem[] = [
    { name: "Classic Cola", price: 1.49, quantity: 1, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
    { name: "Lemon-Lime Sparkle", price: 1.39, quantity: 1, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400" },
    { name: "Cherry Pop", price: 1.49, quantity: 1, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400" },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const freeShippingThreshold = 995.63
  const remainingForFreeShipping = freeShippingThreshold - total
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="icon" className="relative">
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Shopping Cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 py-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium">
                    <h3>{item.name}</h3>
                    <p className="ml-4">${item.price}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-4">{item.quantity}</span>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t">
            {remainingForFreeShipping > 0 && (
              <div className="bg-muted/50 p-4 mt-6 rounded-lg">
                <p className="text-sm">
                  Add ${remainingForFreeShipping.toFixed(2)} more to your cart to unlock free
                  shipping and discounts!
                </p>
              </div>
            )}
            <div className="py-6">
              <div className="flex justify-between text-base font-medium">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Button className="w-full mt-6">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}