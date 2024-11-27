"use client"

import Link from "next/link"
import { Cookie, Candy, Coffee, Beer, Sandwich, Shirt, Popcorn, Droplets, Apple, IceCream } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MARKETPLACE_CATEGORIES } from "@/lib/constants"

const CATEGORY_ICONS = {
  Chips: Cookie,
  Candy: Candy,
  "Energy Drinks": Coffee,
  Soda: Beer,
  Sandwiches: Sandwich,
  Toiletries: Shirt,
  Popcorn: Popcorn,
  Water: Droplets,
  Fruits: Apple,
  "Ice Cream": IceCream,
} as const

// Select the first item from each main category for the quick access buttons
const FEATURED_CATEGORIES = Object.entries(MARKETPLACE_CATEGORIES).map(([_, items]) => items[0]).slice(0, 6)

export function ProductCategories() {
  return (
    <div className="grid grid-cols-6 gap-4">
      {FEATURED_CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] || Cookie
        return (
          <Button
            key={category}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
            asChild
          >
            <Link href={`/marketplace/${encodeURIComponent(category)}`}>
              <Icon className="h-8 w-8" />
              <span className="text-sm">{category}</span>
            </Link>
          </Button>
        )
      })}
    </div>
  )
}