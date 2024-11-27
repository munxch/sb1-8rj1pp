"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MOCK_PRODUCTS } from "@/lib/constants"

interface ProductGridProps {
  category?: string
}

export function ProductGrid({ category }: ProductGridProps) {
  const products = category ? MOCK_PRODUCTS[category as keyof typeof MOCK_PRODUCTS] || [] : MOCK_PRODUCTS.Chips

  return (
    <div className="grid gap-6 grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="relative">
          <Link href={`/marketplace/${encodeURIComponent(category || "Chips")}/${encodeURIComponent(product.name)}`}>
            <CardHeader className="p-0">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {product.description}
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {product.pricePerUnit}
                </p>
              </div>
            </CardContent>
          </Link>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}