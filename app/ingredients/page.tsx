"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Plus, X, Search, Camera, Scan } from "lucide-react"
import { motion } from "framer-motion"
import { PatternedCard } from "@/components/ui/patterned-card"
import { DotPattern } from "@/components/patterns/dot-pattern"
import { DecorativeWave } from "@/components/decorative-wave"

// Ingredient categories
const categories = [
  {
    name: "Proteins",
    items: ["Chicken", "Beef", "Pork", "Tofu", "Eggs", "Salmon", "Tuna", "Shrimp", "Turkey", "Beans"],
    description:
      "Rich in amino acids, proteins are essential for muscle building and repair. Choose lean options for heart health.",
  },
  {
    name: "Vegetables",
    items: [
      "Onion",
      "Garlic",
      "Tomatoes",
      "Potatoes",
      "Carrots",
      "Broccoli",
      "Spinach",
      "Bell Peppers",
      "Zucchini",
      "Mushrooms",
    ],
    description:
      "Packed with vitamins, minerals, and fiber, vegetables add color, flavor, and nutrition to your meals.",
  },
  {
    name: "Grains",
    items: ["Rice", "Pasta", "Bread", "Quinoa", "Oats", "Flour", "Couscous", "Barley", "Tortillas", "Noodles"],
    description:
      "The foundation of many meals, grains provide complex carbohydrates and sustained energy throughout the day.",
  },
  {
    name: "Dairy",
    items: [
      "Milk",
      "Cheese",
      "Yogurt",
      "Butter",
      "Cream",
      "Sour Cream",
      "Cream Cheese",
      "Parmesan",
      "Mozzarella",
      "Cheddar",
    ],
    description:
      "Rich in calcium and protein, dairy products add creaminess and depth to both savory and sweet dishes.",
  },
  {
    name: "Pantry",
    items: [
      "Olive Oil",
      "Salt",
      "Pepper",
      "Sugar",
      "Soy Sauce",
      "Vinegar",
      "Honey",
      "Canned Tomatoes",
      "Broth",
      "Spices",
    ],
    description:
      "Essential staples that form the backbone of cooking, adding flavor, seasoning, and versatility to recipes.",
  },
]

// Emoji mapping for ingredients
const ingredientEmojis: Record<string, string> = {
  // Proteins
  Chicken: "🍗",
  Beef: "🥩",
  Pork: "🥓",
  Tofu: "🧊",
  Eggs: "🥚",
  Salmon: "🐟",
  Tuna: "🐟",
  Shrimp: "🦐",
  Turkey: "🦃",
  Beans: "🫘",

  // Vegetables
  Onion: "🧅",
  Garlic: "🧄",
  Tomatoes: "🍅",
  Potatoes: "🥔",
  Carrots: "🥕",
  Broccoli: "🥦",
  Spinach: "🍃",
  "Bell Peppers": "🫑",
  Zucchini: "🥬",
  Mushrooms: "🍄",

  // Grains
  Rice: "🍚",
  Pasta: "🍝",
  Bread: "🍞",
  Quinoa: "🌾",
  Oats: "🌾",
  Flour: "🌾",
  Couscous: "🌾",
  Barley: "🌾",
  Tortillas: "🫓",
  Noodles: "🍜",

  // Dairy
  Milk: "🥛",
  Cheese: "🧀",
  Yogurt: "🥣",
  Butter: "🧈",
  Cream: "🥛",
  "Sour Cream": "🥛",
  "Cream Cheese": "🧀",
  Parmesan: "🧀",
  Mozzarella: "🧀",
  Cheddar: "🧀",

  // Pantry
  "Olive Oil": "🫒",
  Salt: "🧂",
  Pepper: "🌶️",
  Sugar: "🧂",
  "Soy Sauce": "🍶",
  Vinegar: "🍶",
  Honey: "🍯",
  "Canned Tomatoes": "🥫",
  Broth: "🍲",
  Spices: "🌿",
}

export default function Ingredients() {
  const [ingredient, setIngredient] = useState("")
  const [ingredients, setIngredients] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [filteredItems, setFilteredItems] = useState<string[]>([])

  useEffect(() => {
    if (activeTab === "all") {
      const allItems = categories.flatMap((category) => category.items)
      setFilteredItems(allItems.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      const categoryItems =
        categories.find((category) => category.name.toLowerCase() === activeTab.toLowerCase())?.items || []
      setFilteredItems(categoryItems.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase())))
    }
  }, [activeTab, searchTerm])

  const addIngredient = () => {
    if (ingredient.trim() && !ingredients.includes(ingredient.trim())) {
      setIngredients([...ingredients, ingredient.trim()])
      setIngredient("")
    }
  }

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addIngredient()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <DotPattern className="absolute inset-0 opacity-5 z-0" />

      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 overflow-hidden">
        <DecorativeWave />
      </div>

      <header className="p-4 flex items-center justify-between relative z-10">
        <Link href="/cuisine-preferences" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <div className="text-sm text-gray-500">Step 3 of 3</div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-6 max-w-md mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800">What's in your kitchen?</h1>
            <p className="text-gray-600 mt-1">Add ingredients you have on hand, and we'll find recipes you can make.</p>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Add an ingredient (e.g., chicken, rice, tomatoes)"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button type="button" onClick={addIngredient} variant="outline" className="shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="w-full">
                <Camera className="h-4 w-4 mr-2" />
                Take Photo
              </Button>
              <Button variant="outline" className="w-full">
                <Scan className="h-4 w-4 mr-2" />
                Scan Barcode
              </Button>
            </div>

            <PatternedCard pattern="food" patternOpacity={0.03} className="min-h-[100px]">
              {ingredients.length === 0 ? (
                <p className="text-gray-400 text-sm w-full text-center my-auto">Add ingredients to get started</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 flex items-center"
                    >
                      <span className="mr-1">{ingredientEmojis[item] || "🍴"}</span>
                      {item}
                      <button onClick={() => removeIngredient(index)} className="ml-1 hover:text-red-500">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </PatternedCard>

            <div className="pt-4">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search ingredients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
              </div>

              <div className="relative">
                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                  <div className="relative">
                    <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start bg-blue-50/50 p-1 border border-blue-100 rounded-lg scrollbar-hide">
                      <TabsTrigger
                        value="all"
                        className="flex-shrink-0 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
                      >
                        All
                      </TabsTrigger>
                      {categories.map((category) => (
                        <TabsTrigger
                          key={category.name}
                          value={category.name.toLowerCase()}
                          className="flex-shrink-0 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
                        >
                          {category.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {/* Category description */}
                    {activeTab !== "all" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-blue-800"
                      >
                        <div className="flex items-start">
                          <div className="w-1 h-full min-h-[24px] bg-blue-300 rounded-full mr-2 mt-0.5"></div>
                          <p>{categories.find((c) => c.name.toLowerCase() === activeTab)?.description}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Scroll buttons */}
                    <div className="absolute top-0 right-0 h-full flex items-center">
                      <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-r-lg border border-blue-100 overflow-hidden">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none text-blue-500 hover:text-blue-700"
                          onClick={() => {
                            const tabsList = document.querySelector(".scrollbar-hide")
                            if (tabsList) {
                              tabsList.scrollBy({ left: -100, behavior: "smooth" })
                            }
                          }}
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none text-blue-500 hover:text-blue-700"
                          onClick={() => {
                            const tabsList = document.querySelector(".scrollbar-hide")
                            if (tabsList) {
                              tabsList.scrollBy({ left: 100, behavior: "smooth" })
                            }
                          }}
                        >
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <PatternedCard pattern="dots" patternOpacity={0.03} className="border-blue-200 shadow-sm">
                      <div className="flex flex-wrap gap-2">
                        {filteredItems.length > 0 ? (
                          filteredItems.map((item) => (
                            <Badge
                              key={item}
                              variant="outline"
                              className={`cursor-pointer transition-all duration-150 flex items-center ${
                                ingredients.includes(item)
                                  ? "bg-blue-100 text-blue-800 border-blue-300 shadow-sm transform scale-105"
                                  : "hover:bg-blue-50 hover:border-blue-200 hover:scale-105"
                              }`}
                              onClick={() => {
                                if (!ingredients.includes(item)) {
                                  setIngredients([...ingredients, item])
                                  // Add a subtle animation effect when adding
                                  const badge = document.querySelector(`[data-item="${item}"]`)
                                  if (badge) {
                                    badge.classList.add("animate-pulse")
                                    setTimeout(() => badge.classList.remove("animate-pulse"), 500)
                                  }
                                }
                              }}
                              data-item={item}
                            >
                              <span className="mr-1.5 text-base">{ingredientEmojis[item] || "🍴"}</span>
                              {item}
                              {ingredients.includes(item) && (
                                <span className="ml-1.5 text-blue-600 flex items-center justify-center bg-blue-50 rounded-full h-4 w-4 text-xs">
                                  ✓
                                </span>
                              )}
                            </Badge>
                          ))
                        ) : (
                          <p className="text-gray-500 w-full text-center py-4">
                            No ingredients found. Try another search term.
                          </p>
                        )}
                      </div>
                    </PatternedCard>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-auto pt-6">
          <Link href="/recipes">
            <Button className="w-full bg-blue-400 hover:bg-blue-500" disabled={ingredients.length === 0}>
              Find Recipes
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
