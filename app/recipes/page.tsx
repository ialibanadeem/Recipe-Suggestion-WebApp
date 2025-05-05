"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Clock, ChefHat, Bookmark, BookmarkCheck, Search, Filter, Star } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { EmptyRecipesIcon } from "@/components/icons/empty-recipes"
import { DecorativeWave } from "@/components/decorative-wave"

// Mock recipe data
const mockRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image: "/placeholder.svg?height=200&width=300",
    time: "25 mins",
    difficulty: "Easy",
    ingredients: ["Pasta", "Garlic", "Cream", "Parmesan", "Butter"],
    matchedIngredients: 3,
    totalIngredients: 5,
    tags: ["Vegetarian", "Quick"],
    rating: 4.7,
    calories: 450,
  },
  {
    id: 2,
    title: "Simple Vegetable Stir Fry",
    image: "/placeholder.svg?height=200&width=300",
    time: "20 mins",
    difficulty: "Easy",
    ingredients: ["Rice", "Carrots", "Broccoli", "Soy Sauce", "Garlic"],
    matchedIngredients: 4,
    totalIngredients: 5,
    tags: ["Vegan", "Gluten-Free"],
    rating: 4.5,
    calories: 320,
  },
  {
    id: 3,
    title: "Baked Potato with Toppings",
    image: "/placeholder.svg?height=200&width=300",
    time: "45 mins",
    difficulty: "Easy",
    ingredients: ["Potatoes", "Cheese", "Butter", "Sour Cream", "Chives"],
    matchedIngredients: 2,
    totalIngredients: 5,
    tags: ["Vegetarian", "Gluten-Free"],
    rating: 4.2,
    calories: 380,
  },
  {
    id: 4,
    title: "Quick Tomato Soup",
    image: "/placeholder.svg?height=200&width=300",
    time: "30 mins",
    difficulty: "Easy",
    ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable Broth", "Cream"],
    matchedIngredients: 3,
    totalIngredients: 5,
    tags: ["Vegetarian", "Comfort Food"],
    rating: 4.8,
    calories: 280,
  },
  {
    id: 5,
    title: "Chicken Alfredo Pasta",
    image: "/placeholder.svg?height=200&width=300",
    time: "35 mins",
    difficulty: "Medium",
    ingredients: ["Chicken", "Pasta", "Cream", "Parmesan", "Garlic"],
    matchedIngredients: 3,
    totalIngredients: 5,
    tags: ["High-Protein", "Comfort Food"],
    rating: 4.6,
    calories: 520,
  },
  {
    id: 6,
    title: "Mediterranean Quinoa Bowl",
    image: "/placeholder.svg?height=200&width=300",
    time: "25 mins",
    difficulty: "Easy",
    ingredients: ["Quinoa", "Cucumber", "Tomatoes", "Feta", "Olives"],
    matchedIngredients: 2,
    totalIngredients: 5,
    tags: ["Vegetarian", "Mediterranean"],
    rating: 4.4,
    calories: 380,
  },
]

export default function RecipesPage() {
  const [savedRecipes, setSavedRecipes] = useState<number[]>([])
  const [recipes, setRecipes] = useState(mockRecipes)
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("match")
  const [maxTime, setMaxTime] = useState(60)
  const [maxCalories, setMaxCalories] = useState(600)
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes)

  const toggleSave = (id: number) => {
    if (savedRecipes.includes(id)) {
      setSavedRecipes(savedRecipes.filter((recipeId) => recipeId !== id))
    } else {
      setSavedRecipes([...savedRecipes, id])
    }
  }

  useEffect(() => {
    let result = [...mockRecipes]

    // Filter by tab
    if (activeTab === "saved") {
      result = result.filter((recipe) => savedRecipes.includes(recipe.id))
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
          recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filter by time
    result = result.filter((recipe) => {
      const timeInMinutes = Number.parseInt(recipe.time.split(" ")[0])
      return timeInMinutes <= maxTime
    })

    // Filter by calories
    result = result.filter((recipe) => recipe.calories <= maxCalories)

    // Check if any recipes have 100% ingredient match
    const perfectMatches = result.filter((recipe) => recipe.matchedIngredients === recipe.totalIngredients)

    // If no perfect matches, ensure we show at least one recipe with highest match percentage
    if (perfectMatches.length === 0 && result.length > 0) {
      // Find the highest match percentage
      const highestMatchRatio = Math.max(...result.map((r) => r.matchedIngredients / r.totalIngredients))

      // Get all recipes with the highest match percentage
      const bestMatches = result.filter((r) => r.matchedIngredients / r.totalIngredients === highestMatchRatio)

      // Ensure these best matches appear first
      result = [...bestMatches, ...result.filter((r) => !bestMatches.includes(r))]
    } else if (perfectMatches.length > 0) {
      // If we have perfect matches, show them first
      result = [...perfectMatches, ...result.filter((r) => !perfectMatches.includes(r))]
    }

    // Sort
    if (sortBy === "match") {
      result.sort((a, b) => b.matchedIngredients / b.totalIngredients - a.matchedIngredients / a.totalIngredients)
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "time") {
      result.sort((a, b) => Number.parseInt(a.time) - Number.parseInt(b.time))
    } else if (sortBy === "calories") {
      result.sort((a, b) => a.calories - b.calories)
    }

    setFilteredRecipes(result)
  }, [activeTab, savedRecipes, searchTerm, sortBy, maxTime, maxCalories])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col relative overflow-hidden">
      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 overflow-hidden">
        <DecorativeWave />
      </div>

      <header className="p-4 flex items-center justify-between relative z-10">
        <Link href="/ingredients" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Filter className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Recipes</SheetTitle>
                <SheetDescription>Customize your recipe search</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Sort By</h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="match">Best Match</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="time">Cooking Time</SelectItem>
                      <SelectItem value="calories">Calories (Low to High)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Max Cooking Time</h3>
                    <span className="text-sm text-gray-500">{maxTime} mins</span>
                  </div>
                  <Slider defaultValue={[maxTime]} max={120} step={5} onValueChange={(value) => setMaxTime(value[0])} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Max Calories</h3>
                    <span className="text-sm text-gray-500">{maxCalories} cal</span>
                  </div>
                  <Slider
                    defaultValue={[maxCalories]}
                    max={1000}
                    step={50}
                    onValueChange={(value) => setMaxCalories(value[0])}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-2 max-w-md mx-auto w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Recipes</h1>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search recipes, ingredients, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="all">All Recipes</TabsTrigger>
              <TabsTrigger value="saved">Saved Recipes</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isSaved={savedRecipes.includes(recipe.id)}
                    onToggleSave={() => toggleSave(recipe.id)}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <EmptyRecipesIcon />
                  <p className="text-gray-500 mt-4">No recipes found. Try adjusting your filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="saved" className="space-y-4">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isSaved={true}
                    onToggleSave={() => toggleSave(recipe.id)}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <EmptyRecipesIcon />
                  <p className="text-gray-500 mt-4">No saved recipes yet.</p>
                </div>
              )}
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
    ingredients: string[]
    matchedIngredients: number
    totalIngredients: number
    tags: string[]
    rating: number
    calories: number
  }
  isSaved: boolean
  onToggleSave: () => void
}

function RecipeCard({ recipe, isSaved, onToggleSave }: RecipeCardProps) {
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
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            onClick={onToggleSave}
          >
            {isSaved ? <BookmarkCheck className="h-5 w-5 text-blue-500" /> : <Bookmark className="h-5 w-5" />}
          </Button>
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
            <div className="ml-auto text-sm">{recipe.calories} cal</div>
          </div>

          <div className="mb-3">
            <div className="text-sm text-gray-600 mb-1">
              {recipe.matchedIngredients === recipe.totalIngredients ? (
                <span className="font-medium text-green-600">
                  Perfect Match! {recipe.matchedIngredients}/{recipe.totalIngredients}
                </span>
              ) : (
                <span>
                  Ingredients match: {recipe.matchedIngredients}/{recipe.totalIngredients}
                </span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${recipe.matchedIngredients === recipe.totalIngredients ? "bg-green-500" : "bg-blue-500"} h-2 rounded-full`}
                style={{ width: `${(recipe.matchedIngredients / recipe.totalIngredients) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
                {tag}
              </Badge>
            ))}
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
