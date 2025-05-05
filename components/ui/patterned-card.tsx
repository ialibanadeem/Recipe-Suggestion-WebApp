import type React from "react"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/patterns/dot-pattern"
import { GeometricPattern } from "@/components/patterns/geometric-pattern"
import { FoodPattern } from "@/components/patterns/food-pattern"

type PatternType = "dots" | "geometric" | "food" | "none"

interface PatternedCardProps {
  children: React.ReactNode
  className?: string
  pattern?: PatternType
  patternOpacity?: number
  patternClassName?: string
  accent?: boolean
}

export function PatternedCard({
  children,
  className,
  pattern = "none",
  patternOpacity = 0.05,
  patternClassName,
  accent = false,
}: PatternedCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-blue-100 p-4 relative overflow-hidden",
        accent && "border-l-4 border-l-blue-400",
        className,
      )}
    >
      {pattern === "dots" && (
        <DotPattern className={cn(`absolute inset-0 z-0 opacity-${patternOpacity * 100}`, patternClassName)} />
      )}
      {pattern === "geometric" && (
        <GeometricPattern className={cn(`absolute inset-0 z-0 opacity-${patternOpacity * 100}`, patternClassName)} />
      )}
      {pattern === "food" && (
        <FoodPattern className={cn(`absolute inset-0 z-0 opacity-${patternOpacity * 100}`, patternClassName)} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
