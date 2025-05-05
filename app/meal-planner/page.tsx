"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Plus, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Mock meal plan data
const mockMealPlan = {
  monday: {
    breakfast: { id: 1, title: "Greek Yogurt with Berries", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 2, title: "Mediterranean Quinoa Bowl", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 3, title: "Baked Salmon with Vegetables", image: "/placeholder.svg?height=100&width=100" },
  },
  tuesday: {
    breakfast: { id: 4, title: "Avocado Toast with Eggs", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 5, title: "Chicken Caesar Salad", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 6, title: "Vegetable Stir Fry with Rice", image: "/placeholder.svg?height=100&width=100" },
  },
  wednesday: {
    breakfast: { id: 7, title: "Smoothie Bowl", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 8, title: "Turkey and Avocado Wrap", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 9, title: "Spaghetti with Tomato Sauce", image: "/placeholder.svg?height=100&width=100" },
  },
  thursday: {
    breakfast: { id: 10, title: "Oatmeal with Fruit", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 11, title: "Lentil Soup with Bread", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 12, title: "Grilled Chicken with Salad", image: "/placeholder.svg?height=100&width=100" },
  },
  friday: {
    breakfast: { id: 13, title: "Breakfast Burrito", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 14, title: "Tuna Salad Sandwich", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 15, title: "Homemade Pizza", image: "/placeholder.svg?height=100&width=100" },
  },
  saturday: {
    breakfast: { id: 16, title: "Pancakes with Maple Syrup", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 17, title: "Grilled Cheese Sandwich", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 18, title: "Beef Stir Fry", image: "/placeholder.svg?height=100&width=100" },
  },
  sunday: {
    breakfast: { id: 19, title: "French Toast", image: "/placeholder.svg?height=100&width=100" },
    lunch: { id: 20, title: "Chicken Noodle Soup", image: "/placeholder.svg?height=100&width=100" },
    dinner: { id: 21, title: "Roast Chicken with Potatoes", image: "/placeholder.svg?height=100&width=100" },
  },
}

export default function MealPlannerPage() {
  const [currentWeek, setCurrentWeek] = useState("May 13 - May 19")
  const [activeDay, setActiveDay] = useState("monday")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Link href="/recipes" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <h1 className="text-xl font-bold">Meal Planner</h1>
        <div className="w-8"></div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-2 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
              <span className="font-medium">{currentWeek}</span>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="monday" className="w-full" onValueChange={setActiveDay}>
            <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start">
              <TabsTrigger value="monday" className="flex-shrink-0">
                Mon
              </TabsTrigger>
              <TabsTrigger value="tuesday" className="flex-shrink-0">
                Tue
              </TabsTrigger>
              <TabsTrigger value="wednesday" className="flex-shrink-0">
                Wed
              </TabsTrigger>
              <TabsTrigger value="thursday" className="flex-shrink-0">
                Thu
              </TabsTrigger>
              <TabsTrigger value="friday" className="flex-shrink-0">
                Fri
              </TabsTrigger>
              <TabsTrigger value="saturday" className="flex-shrink-0">
                Sat
              </TabsTrigger>
              <TabsTrigger value="sunday" className="flex-shrink-0">
                Sun
              </TabsTrigger>
            </TabsList>

            {Object.keys(mockMealPlan).map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                <MealCard title="Breakfast" meal={mockMealPlan[day as keyof typeof mockMealPlan].breakfast} />
                <MealCard title="Lunch" meal={mockMealPlan[day as keyof typeof mockMealPlan].lunch} />
                <MealCard title="Dinner" meal={mockMealPlan[day as keyof typeof mockMealPlan].dinner} />
              </TabsContent>
            ))}
          </Tabs>

          <div className="pt-4">
            <Button className="w-full bg-blue-400 hover:bg-blue-500">Generate Shopping List</Button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

interface MealCardProps {
  title: string
  meal: {
    id: number
    title: string
    image: string
  } | null
}

function MealCard({ title, meal }: MealCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="font-medium text-gray-500 mb-2">{title}</div>
        {meal ? (
          <div className="flex items-center">
            <Image
              src={meal.image || "/placeholder.svg"}
              alt={meal.title}
              width={60}
              height={60}
              className="rounded-md object-cover mr-3"
            />
            <div className="flex-1">
              <div className="font-medium">{meal.title}</div>
              <Link href={`/recipe/${meal.id}`} className="text-sm text-blue-600 hover:underline">
                View Recipe
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="ml-2">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-16 border-2 border-dashed rounded-md border-gray-200">
            <Button variant="ghost" className="text-gray-400">
              <Plus className="h-4 w-4 mr-2" />
              Add Meal
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
