"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { MARKETPLACE_CATEGORIES } from "@/lib/constants"

export function ProductSidebar() {
  const pathname = usePathname()
  const currentCategory = pathname.split("/").pop()

  return (
    <div className="w-64 border-r min-h-[calc(100vh-3.5rem)] p-6">
      <h2 className="font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {Object.entries(MARKETPLACE_CATEGORIES).map(([category, items]) => (
          <Collapsible key={category} defaultOpen={items.includes(decodeURIComponent(currentCategory || ""))}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                {category}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
              {items.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className={`w-full justify-start text-sm ${
                    currentCategory === encodeURIComponent(item) ? "bg-accent" : ""
                  }`}
                  asChild
                >
                  <Link href={`/marketplace/${encodeURIComponent(item)}`}>
                    {item}
                  </Link>
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}