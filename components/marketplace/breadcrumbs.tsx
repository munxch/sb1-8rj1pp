import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbsProps {
  category: string
  product?: string
}

export function Breadcrumbs({ category, product }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link 
        href="/marketplace"
        className="hover:text-foreground transition-colors"
      >
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link 
        href="/marketplace"
        className="hover:text-foreground transition-colors"
      >
        Categories
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link 
        href={`/marketplace/${encodeURIComponent(category)}`}
        className="hover:text-foreground transition-colors"
      >
        {category}
      </Link>
      {product && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product}</span>
        </>
      )}
    </nav>
  )
}