import { AdminDashboard } from "@/components/admin/dashboard"

export default function AdminPage() {
  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Admin Portal</h1>
        <p className="text-muted-foreground">
          Manage products, orders, and user accounts.
        </p>
      </div>
      <AdminDashboard />
    </div>
  )
}