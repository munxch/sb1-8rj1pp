import { ProductGrid } from "@/components/marketplace/product-grid"
import { ProductSidebar } from "@/components/marketplace/product-sidebar"
import { Breadcrumbs } from "@/components/marketplace/breadcrumbs"
import { ALL_CATEGORIES } from "@/lib/constants"

export function generateStaticParams() {
  return ALL_CATEGORIES.map((category) => ({
    category: encodeURIComponent(category)
  }))
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = decodeURIComponent(params.category)
  
  return (
    <div className="flex">
      <ProductSidebar />
      <main className="flex-1 px-8 py-6">
        <Breadcrumbs category={category} />
        <h1 className="text-3xl font-bold mt-4 mb-8">{category}</h1>
        <ProductGrid category={category} />
      </main>
    </div>
  )
}