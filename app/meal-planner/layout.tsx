import type React from "react"
import { Navigation } from "@/components/navigation"

export default function MealPlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pb-20">
      {children}
      <Navigation />
    </div>
  )
}
