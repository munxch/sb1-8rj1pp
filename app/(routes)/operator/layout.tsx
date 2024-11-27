"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Store, Home, ShoppingBag, Building2, MapPin, Users, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { name: "Home", href: "/operator", icon: Home },
  { name: "Orders", href: "/operator/orders", icon: ShoppingBag },
  { name: "Business Details", href: "/operator/business", icon: Building2 },
  { name: "Delivery Address", href: "/operator/delivery", icon: MapPin },
  { name: "Membership", href: "/operator/membership", icon: Users },
  { name: "Account", href: "/operator/account", icon: Settings },
]

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      <div className="w-64 border-r bg-background">
        <div className="flex h-14 items-center border-b px-4">
          <Store className="mr-2 h-5 w-5" />
          <span className="font-semibold">VendHub</span>
          <span className="ml-2 text-muted-foreground">Operator</span>
        </div>
        <div className="flex flex-col">
          <nav className="flex-1 space-y-1 p-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    pathname === item.href 
                      ? "bg-secondary text-secondary-foreground" 
                      : "hover:bg-secondary/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="mt-auto p-2">
            <Link
              href="/logout"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}