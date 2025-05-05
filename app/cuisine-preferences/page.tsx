"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CuisinePreferences() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])

  const cuisines = [
    { id: "italian", name: "Italian", image: "/placeholder.svg?height=100&width=100" },
    { id: "mexican", name: "Mexican", image: "/placeholder.svg?height=100&width=100" },
    { id: "chinese", name: "Chinese", image: "/placeholder.svg?height=100&width=100" },
    { id: "indian", name: "Indian", image: "/placeholder.svg?height=100&width=100" },
    { id: "japanese", name: "Japanese", image: "/placeholder.svg?height=100&width=100" },
    { id: "thai", name: "Thai", image: "/placeholder.svg?height=100&width=100" },
    { id: "mediterranean", name: "Mediterranean", image: "/placeholder.svg?height=100&width=100" },
    { id: "french", name: "French", image: "/placeholder.svg?height=100&width=100" },
    { id: "american", name: "American", image: "/placeholder.svg?height=100&width=100" },
    { id: "korean", name: "Korean", image: "/placeholder.svg?height=100&width=100" },
    { id: "middle-eastern", name: "Middle Eastern", image: "/placeholder.svg?height=100&width=100" },
    { id: "greek", name: "Greek", image: "/placeholder.svg?height=100&width=100" },
  ]

  const toggleCuisine = (id: string) => {
    if (selectedCuisines.includes(id)) {
      setSelectedCuisines(selectedCuisines.filter((cuisine) => cuisine !== id))
    } else {
      setSelectedCuisines([...selectedCuisines, id])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Link href="/preferences" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <div className="text-sm text-gray-500">Step 2 of 3</div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-6 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Cuisine Preferences</h1>
            <p className="text-gray-600 mt-1">
              Select the cuisines you enjoy to help us personalize your recipe recommendations.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine.id}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                  selectedCuisines.includes(cuisine.id) ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
                }`}
                onClick={() => toggleCuisine(cuisine.id)}
              >
                <div className="relative aspect-square">
                  <Image src={cuisine.image || "/placeholder.svg"} alt={cuisine.name} fill className="object-cover" />
                </div>
                <div
                  className={`text-center py-2 text-sm ${
                    selectedCuisines.includes(cuisine.id) ? "bg-blue-500 text-white" : "bg-white text-gray-800"
                  }`}
                >
                  {cuisine.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-auto pt-6">
          <Link href="/ingredients">
            <Button className="w-full bg-blue-400 hover:bg-blue-500">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
