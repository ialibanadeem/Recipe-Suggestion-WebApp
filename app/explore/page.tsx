"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, ChefHat, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"
import {
  QuickEasyIcon,
  HealthyIcon,
  VegetarianIcon,
  DessertIcon,
  BreakfastIcon,
  DinnerIcon,
} from "@/components/icons/category-icons"
import { DecorativeWave } from "@/components/decorative-wave"

// Mock categories with icons
const categories = [
  { id: "quick", name: "Quick & Easy", icon: QuickEasyIcon },
  { id: "healthy", name: "Healthy", icon: HealthyIcon },
  { id: "vegetarian", name: "Vegetarian", icon: VegetarianIcon },
  { id: "desserts", name: "Desserts", icon: DessertIcon },
  { id: "breakfast", name: "Breakfast", icon: BreakfastIcon },
  { id: "dinner", name: "Dinner", icon: DinnerIcon },
]

// Mock trending recipes
const trendingRecipes = [
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
    title: "Avocado Toast with Eggs",
    image: "/placeholder.svg?height=200&width=300",
    time: "15 mins",
    difficulty: "Easy",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    image: "/placeholder.svg?height=200&width=300",
    time: "30 mins",
    difficulty: "Medium",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Chicken Stir Fry",
    image: "/placeholder.svg?height=200&width=300",
    time: "20 mins",
    difficulty: "Medium",
    rating: 4.6,
  },
]

// Mock popular recipes
const popularRecipes = [
  {
    id: 5,
    title: "Spaghetti Carbonara",
    image: "/placeholder.svg?height=200&width=300",
    time: "25 mins",
    difficulty: "Medium",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Chicken Parmesan",
    image: "/placeholder.svg?height=200&width=300",
    time: "40 mins",
    difficulty: "Medium",
    rating: 4.7,
  },
  {
    id: 7,
    title: "Beef Tacos",
    image: "/placeholder.svg?height=200&width=300",
    time: "30 mins",
    difficulty: "Easy",
    rating: 4.6,
  },
  {
    id: 8,
    title: "Vegetable Curry",
    image: "/placeholder.svg?height=200&width=300",
    time: "35 mins",
    difficulty: "Medium",
    rating: 4.5,
  },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col relative overflow-hidden">
      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 overflow-hidden">
        <DecorativeWave />
      </div>

      <header className="p-4 flex items-center justify-between relative z-10">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <h1 className="text-xl font-bold">Explore Recipes</h1>
        <div className="w-8"></div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-2 max-w-md mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div>
            <h2 className="text-lg font-medium mb-3">Categories</h2>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((category) => (
                <Link href={`/explore/${category.id}`} key={category.id}>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <category.icon className="w-16 h-16" />
                    </div>
                    <span className="text-sm">{category.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="space-y-4">
              {trendingRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </TabsContent>

            <TabsContent value="popular" className="space-y-4">
              {popularRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </TabsContent>
          </Tabs>
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
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden">
        <div className="relative">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            width={300}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white/80 rounded-full px-2 py-1 flex items-center">
            <Star className="h-3 w-3 text-blue-500 mr-1" />
            <span className="text-xs font-medium">{recipe.rating}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>

          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {recipe.time}
            </div>
            <div className="flex items-center">
              <ChefHat className="h-4 w-4 mr-1" />
              {recipe.difficulty}
            </div>
          </div>

          <Link href={`/recipe/${recipe.id}`}>
            <Button variant="outline" className="w-full">
              View Recipe
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
