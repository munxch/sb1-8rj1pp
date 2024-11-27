import { ProductSidebar } from "@/components/marketplace/product-sidebar"
import { ProductDetail } from "@/components/marketplace/product-detail"
import { Breadcrumbs } from "@/components/marketplace/breadcrumbs"
import { ALL_CATEGORIES, MOCK_PRODUCTS, RELATED_PRODUCTS } from "@/lib/constants"

// Generate all possible category and product combinations
export function generateStaticParams() {
  const params: { category: string; product: string }[] = []
  
  // Add products from MOCK_PRODUCTS
  Object.entries(MOCK_PRODUCTS).forEach(([category, products]) => {
    products.forEach(product => {
      params.push({
        category: encodeURIComponent(category),
        product: encodeURIComponent(product.name)
      })
    })
  })
  
  // Add related products
  RELATED_PRODUCTS.forEach(product => {
    params.push({
      category: encodeURIComponent(product.category),
      product: encodeURIComponent(product.name)
    })
  })
  
  return params
}

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string }
}) {
  const category = decodeURIComponent(params.category)
  const productName = decodeURIComponent(params.product)
  
  // Look for the product in both MOCK_PRODUCTS and RELATED_PRODUCTS
  const mockProduct = MOCK_PRODUCTS[category as keyof typeof MOCK_PRODUCTS]?.find(p => p.name === productName)
  const relatedProduct = RELATED_PRODUCTS.find(p => p.name === productName && p.category === category)
  
  const product = mockProduct || (relatedProduct && {
    ...relatedProduct,
    description: relatedProduct.brand
  })
  
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex">
      <ProductSidebar />
      <main className="flex-1 px-8 py-6">
        <Breadcrumbs category={category} product={productName} />
        <ProductDetail product={product} />
      </main>
    </div>
  )
}