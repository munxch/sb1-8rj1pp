"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ProductDetailProps {
  product: {
    name: string
    price: number
    originalPrice: number
    description: string
    image: string
    pricePerUnit: string
  }
}

const RELATED_PRODUCTS = [
  {
    name: "Kettle Cooked Chips",
    brand: "Crunchy Co.",
    price: 2.49,
    originalPrice: 2.99,
    pricePerUnit: "$0.25/oz",
    image: "https://images.unsplash.com/photo-1599629954294-5f1ad182a96a?w=800&auto=format&fit=crop&q=60",
    category: "Chips"
  },
  {
    name: "Butterscotch Discs",
    brand: "Classic Sweets",
    price: 1.39,
    originalPrice: 1.89,
    pricePerUnit: "$0.17/oz",
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=800&auto=format&fit=crop&q=60",
    category: "Candy"
  },
  {
    name: "Tropical Thunder",
    brand: "Zap Drinks",
    price: 3.19,
    originalPrice: 3.69,
    pricePerUnit: "$0.27/fl oz",
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=800&auto=format&fit=crop&q=60",
    category: "Energy Drinks"
  }
]

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState("1")
  const router = useRouter()

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product.name]) // Scroll when product name changes

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 gap-12">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.originalPrice > product.price && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">{product.description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-muted-foreground">{product.pricePerUnit}</p>
          </div>

          <div className="flex gap-4">
            <Select value={quantity} onValueChange={setQuantity}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 10, 15, 20].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="flex-1">Add to Cart</Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Details</AccordionTrigger>
              <AccordionContent>
                A classic snack perfect for any occasion. Made with premium ingredients
                and carefully crafted to ensure the perfect crunch in every bite.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nutrition">
              <AccordionTrigger>Nutrition & Ingredients</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Nutrition Facts (per serving)</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Calories: 150</li>
                      <li>Total Fat: 9g</li>
                      <li>Sodium: 180mg</li>
                      <li>Total Carbohydrates: 15g</li>
                      <li>Protein: 2g</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Ingredients</h4>
                    <p className="text-sm">Potatoes, Vegetable Oil (Sunflower, Corn, and/or Canola Oil), 
                    Salt, and Natural Flavors.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="specifications">
              <AccordionTrigger>Specifications</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-medium">Package Size:</span> 8 oz (226.8g)</li>
                  <li><span className="font-medium">Case Pack:</span> 12 units</li>
                  <li><span className="font-medium">Shelf Life:</span> 6 months</li>
                  <li><span className="font-medium">UPC:</span> 123456789</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="storage">
              <AccordionTrigger>Storage</AccordionTrigger>
              <AccordionContent>
                Store in a cool, dry place. Once opened, consume within 7 days for 
                best quality. Keep sealed when not in use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-3 gap-6">
          {RELATED_PRODUCTS.map((relatedProduct) => (
            <Link
              key={relatedProduct.name}
              href={`/marketplace/${encodeURIComponent(relatedProduct.category)}/${encodeURIComponent(relatedProduct.name)}`}
              className="rounded-lg border bg-card transition-colors hover:bg-accent"
            >
              <div className="aspect-square relative">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{relatedProduct.name}</h3>
                <p className="text-sm text-muted-foreground">{relatedProduct.brand}</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">${relatedProduct.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${relatedProduct.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{relatedProduct.pricePerUnit}</p>
                </div>
                <Button className="w-full mt-4">Add to Cart</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}