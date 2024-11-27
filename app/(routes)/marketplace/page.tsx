import { ProductCategories } from "@/components/marketplace/product-categories"
import { ProductGrid } from "@/components/marketplace/product-grid"
import { ProductSidebar } from "@/components/marketplace/product-sidebar"

export default function MarketplacePage() {
  return (
    <div className="flex">
      <ProductSidebar />
      <main className="flex-1 px-8 py-6">
        <ProductCategories />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Recently Ordered Items</h2>
          <ProductGrid />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Products</h2>
          <ProductGrid />
        </div>
      </main>
    </div>
  )
}