"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function OperatorShipping() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="street">Street Address</Label>
            <Input id="street" placeholder="123 Business St" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="unit">Unit/Suite</Label>
            <Input id="unit" placeholder="Suite 100" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="San Francisco" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="CA" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" placeholder="94105" />
          </div>
        </div>
        <Button className="w-full sm:w-auto">Update Address</Button>
      </CardContent>
    </Card>
  )
}