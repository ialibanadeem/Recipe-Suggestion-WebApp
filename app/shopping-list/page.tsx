"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Plus, Trash2, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import { EmptyShoppingListIcon } from "@/components/icons/empty-shopping-list"
import { DecorativeWave } from "@/components/decorative-wave"

// Mock shopping list data
const mockShoppingList = [
  { id: 1, name: "Chicken breast", category: "Meat", checked: false },
  { id: 2, name: "Pasta", category: "Grains", checked: false },
  { id: 3, name: "Garlic", category: "Produce", checked: false },
  { id: 4, name: "Parmesan cheese", category: "Dairy", checked: false },
  { id: 5, name: "Heavy cream", category: "Dairy", checked: false },
  { id: 6, name: "Butter", category: "Dairy", checked: false },
  { id: 7, name: "Olive oil", category: "Pantry", checked: false },
  { id: 8, name: "Salt", category: "Pantry", checked: true },
  { id: 9, name: "Black pepper", category: "Pantry", checked: true },
  { id: 10, name: "Tomatoes", category: "Produce", checked: false },
  { id: 11, name: "Onions", category: "Produce", checked: false },
  { id: 12, name: "Bell peppers", category: "Produce", checked: false },
]

export default function ShoppingListPage() {
  const [items, setItems] = useState(mockShoppingList)
  const [newItem, setNewItem] = useState("")
  const [showChecked, setShowChecked] = useState(true)

  const toggleItem = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const addItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        {
          id: Math.max(...items.map((item) => item.id)) + 1,
          name: newItem.trim(),
          category: "Other",
          checked: false,
        },
      ])
      setNewItem("")
    }
  }

  const deleteCheckedItems = () => {
    setItems(items.filter((item) => !item.checked))
  }

  // Group items by category
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!showChecked && item.checked) return acc

      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, typeof items>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col relative overflow-hidden">
      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 overflow-hidden">
        <DecorativeWave />
      </div>

      <header className="p-4 flex items-center justify-between relative z-10">
        <Link href="/recipes" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <h1 className="text-xl font-bold">Shopping List</h1>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1 flex flex-col px-4 py-2 max-w-md mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex space-x-2">
            <Input
              placeholder="Add an item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addItem()}
            />
            <Button type="button" onClick={addItem} variant="outline" className="shrink-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="show-checked" checked={showChecked} onCheckedChange={() => setShowChecked(!showChecked)} />
              <label htmlFor="show-checked" className="text-sm text-gray-600">
                Show checked items
              </label>
            </div>
            <Button variant="ghost" size="sm" onClick={deleteCheckedItems} className="text-red-500 hover:text-red-700">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Checked
            </Button>
          </div>

          <div className="space-y-6">
            {Object.keys(groupedItems).length === 0 ? (
              <div className="text-center py-8">
                <EmptyShoppingListIcon />
                <p className="text-gray-500 mt-4">Your shopping list is empty</p>
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, categoryItems]) => (
                <div key={category}>
                  <h3 className="font-medium text-gray-800 mb-2">{category}</h3>
                  <div className="space-y-2">
                    {categoryItems.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <Checkbox
                          id={`item-${item.id}`}
                          checked={item.checked}
                          onCheckedChange={() => toggleItem(item.id)}
                        />
                        <label
                          htmlFor={`item-${item.id}`}
                          className={`ml-2 flex-1 ${item.checked ? "line-through text-gray-400" : "text-gray-700"}`}
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <Separator className="mt-4" />
                </div>
              ))
            )}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
