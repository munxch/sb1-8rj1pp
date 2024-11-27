import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center space-y-8 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to EON Marketplace
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Exclusive deals for the food and beverage industry. Connect with suppliers and grow your business.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/marketplace">
            Browse Marketplace
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/operator">
            Operator Portal
          </Link>
        </Button>
      </div>
    </div>
  )
}