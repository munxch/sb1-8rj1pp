"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Store, Package, Headphones, UserCog, Eye, Download } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const quickActions = [
  {
    title: "Shop Marketplace",
    description: "Browse and purchase products",
    icon: Store,
    href: "/marketplace"
  },
  {
    title: "Shop Equipment",
    description: "Browse vending machines",
    icon: Package,
    href: "/equipment"
  },
  {
    title: "Contact Support",
    description: "Get help with your account",
    icon: Headphones,
    href: "/operator/support"
  },
  {
    title: "Manage Account",
    description: "Update your preferences",
    icon: UserCog,
    href: "/operator/account"
  }
]

const recentOrders = [
  {
    id: "ORD-005",
    date: "2023-06-09",
    status: "Pending",
    shippingMethod: "Pick and Pack",
    total: 130.00
  },
  {
    id: "ORD-004",
    date: "2023-06-07",
    status: "Shipped",
    shippingMethod: "Truck Delivery",
    total: 75.00
  },
  {
    id: "ORD-003",
    date: "2023-06-05",
    status: "Delivered",
    shippingMethod: "Pick and Pack",
    total: 170.00
  },
  {
    id: "ORD-002",
    date: "2023-06-03",
    status: "Delivered",
    shippingMethod: "Truck Delivery",
    total: 60.00
  }
]

export default function OperatorDashboard() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome to VendHub</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <Card key={action.title} className="hover:bg-accent transition-colors">
              <Link href={action.href}>
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {action.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          )
        })}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 text-sm">Order Number</th>
                <th className="text-left p-4 text-sm">Date</th>
                <th className="text-left p-4 text-sm">Status</th>
                <th className="text-left p-4 text-sm">Shipping Method</th>
                <th className="text-left p-4 text-sm">Total</th>
                <th className="text-left p-4 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                      {
                        "bg-yellow-100 text-yellow-800": order.status === "Pending",
                        "bg-blue-100 text-blue-800": order.status === "Shipped",
                        "bg-green-100 text-green-800": order.status === "Delivered"
                      }
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">{order.shippingMethod}</td>
                  <td className="p-4">${order.total.toFixed(2)}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-muted rounded-md">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-md">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}