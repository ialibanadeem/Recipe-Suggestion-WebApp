"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Calendar, ShoppingCart, User } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-6 relative">
      {/* Subtle blue gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50 opacity-70"
        aria-hidden="true"
      ></div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nav-dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-dot-pattern)" />
        </svg>
      </div>

      <div className="flex justify-between items-center max-w-md mx-auto relative z-10">
        <NavItem href="/recipes" icon={<Home className="h-6 w-6" />} label="Home" isActive={pathname === "/recipes"} />
        <NavItem
          href="/explore"
          icon={<Search className="h-6 w-6" />}
          label="Explore"
          isActive={pathname === "/explore"}
        />
        <NavItem
          href="/meal-planner"
          icon={<Calendar className="h-6 w-6" />}
          label="Meal Plan"
          isActive={pathname === "/meal-planner"}
        />
        <NavItem
          href="/shopping-list"
          icon={<ShoppingCart className="h-6 w-6" />}
          label="Shopping"
          isActive={pathname === "/shopping-list"}
        />
        <NavItem
          href="/profile"
          icon={<User className="h-6 w-6" />}
          label="Profile"
          isActive={pathname === "/profile"}
        />
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}

function NavItem({ href, icon, label, isActive }: NavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div className={`p-1 ${isActive ? "text-blue-500" : "text-gray-500"}`}>{icon}</div>
      <span className={`text-xs ${isActive ? "text-blue-500 font-medium" : "text-gray-500"}`}>{label}</span>
      {isActive && <div className="absolute -bottom-2 w-10 h-1 bg-blue-500 rounded-t-full"></div>}
    </Link>
  )
}
