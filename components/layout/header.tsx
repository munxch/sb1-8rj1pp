"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Store, User, LogOut, Moon, Sun, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { CartSheet } from "@/components/cart-sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  
  // Don't show the main header in operator portal
  if (pathname.startsWith('/operator')) {
    return null
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Store className="h-6 w-6" />
            <span className="font-bold">VendHub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/marketplace"
              className={pathname.startsWith("/marketplace") ? "text-foreground" : "text-foreground/60 hover:text-foreground"}
            >
              Market
            </Link>
            <Link
              href="/equipment"
              className={pathname.startsWith("/equipment") ? "text-foreground" : "text-foreground/60 hover:text-foreground"}
            >
              Equipment
            </Link>
          </nav>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <input
              placeholder="Search products..."
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="/operator" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                  Operator Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/admin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                  Admin Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <CartSheet />
        </div>
      </div>
    </header>
  )
}