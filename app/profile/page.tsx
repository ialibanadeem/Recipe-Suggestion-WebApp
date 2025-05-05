"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Settings, LogOut, Heart, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

// Mock saved recipes
const savedRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image: "/placeholder.svg?height=200&width=300",
    time: "25 mins",
    difficulty: "Easy",
    rating: 4.7,
  },
  {
    id: 2,
    title: "Simple Vegetable Stir Fry",
    image: "/placeholder.svg?height=200&width=300",
    time: "20 mins",
    difficulty: "Easy",
    rating: 4.5,
  },
]

// Mock recently viewed recipes
const recentlyViewedRecipes = [
  {
    id: 3,
    title: "Baked Potato with Toppings",
    image: "/placeholder.svg?height=200&width=300",
    time: "45 mins",
    difficulty: "Easy",
    rating: 4.2,
  },
  {
    id: 4,
    title: "Quick Tomato Soup",
    image: "/placeholder.svg?height=200&width=300",
    time: "30 mins",
    difficulty: "Easy",
    rating: 4.8,
  },
]

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Link href="/recipes" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <h1 className="text-xl font-bold">Profile</h1>
        <Link href="/settings">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col px-4 py-2 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center">
            <div className="relative w-20 h-20 mr-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor="notifications" className="text-sm">
                  Notifications
                </Label>
              </div>
              <Switch id="notifications" checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor="dark-mode" className="text-sm">
                  Dark Mode
                </Label>
              </div>
              <Switch id="dark-mode" checked={darkModeEnabled} onCheckedChange={setDarkModeEnabled} />
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="saved" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="saved">Saved Recipes</TabsTrigger>
              <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
            </TabsList>

            <TabsContent value="saved" className="space-y-4">
              {savedRecipes.length > 0 ? (
                savedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
              ) : (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">No saved recipes yet</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="recent" className="space-y-4">
              {recentlyViewedRecipes.length > 0 ? (
                recentlyViewedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
              ) : (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">No recently viewed recipes</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <Button variant="outline" className="w-full text-red-500 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </motion.div>
      </main>
    </div>
  )
}

interface RecipeCardProps {
  recipe: {
    id: number
    title: string
    image: string
    time: string
    difficulty: string
    rating: number
  }
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="flex items-center border rounded-lg overflow-hidden bg-white">
      <Image
        src={recipe.image || "/placeholder.svg"}
        alt={recipe.title}
        width={80}
        height={80}
        className="object-cover h-20 w-20"
      />
      <div className="flex-1 p-3">
        <h3 className="font-medium">{recipe.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Clock className="h-3 w-3 mr-1" />
          <span className="mr-3">{recipe.time}</span>
          <Star className="h-3 w-3 text-blue-500 mr-1" />
          <span>{recipe.rating}</span>
        </div>
      </div>
    </div>
  )
}
