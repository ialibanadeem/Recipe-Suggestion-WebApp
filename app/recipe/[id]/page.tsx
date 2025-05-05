"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Clock,
  ChefHat,
  Users,
  Bookmark,
  BookmarkCheck,
  Share2,
  Star,
  ThumbsUp,
  MessageSquare,
  Printer,
  ShoppingCart,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"
import { motion } from "framer-motion"
import { GeometricPattern } from "@/components/patterns/geometric-pattern"
import { WavePattern } from "@/components/patterns/wave-pattern"

// Expanded mock recipe data with more recipes and structured ingredient quantities
const mockRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image: "/placeholder.svg?height=400&width=600",
    time: "25 mins",
    difficulty: "Easy",
    servings: 4,
    description:
      "A simple yet delicious pasta dish that's perfect for weeknight dinners. Creamy, garlicky, and ready in under 30 minutes!",
    ingredients: [
      { name: "pasta (any shape)", quantity: 8, unit: "oz" },
      { name: "garlic, minced", quantity: 4, unit: "cloves" },
      { name: "butter", quantity: 2, unit: "tbsp" },
      { name: "heavy cream", quantity: 1, unit: "cup" },
      { name: "grated Parmesan cheese", quantity: 0.5, unit: "cup" },
      { name: "salt and pepper", quantity: 1, unit: "to taste" },
      { name: "fresh parsley for garnish", quantity: 2, unit: "tbsp", optional: true },
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add pasta and cook according to package directions until al dente. Reserve 1/2 cup of pasta water before draining.",
      "While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and cook until fragrant, about 1-2 minutes. Be careful not to burn the garlic.",
      "Reduce heat to medium-low and add heavy cream. Simmer for 3-4 minutes until it starts to thicken slightly.",
      "Add the drained pasta to the skillet and toss to coat in the sauce. Add Parmesan cheese and stir until melted and smooth.",
      "If the sauce is too thick, add a splash of the reserved pasta water to reach your desired consistency.",
      "Season with salt and pepper to taste. Garnish with fresh parsley if desired.",
      "Serve immediately while hot.",
    ],
    nutritionInfo: {
      calories: 450,
      protein: "12g",
      carbs: "48g",
      fat: "25g",
      fiber: "2g",
      sugar: "3g",
      sodium: "320mg",
    },
    tags: ["Vegetarian", "Quick", "Comfort Food"],
    rating: 4.7,
    reviews: 128,
    author: "Chef Maria",
    authorImage: "/placeholder.svg?height=50&width=50",
    tips: [
      "For a lighter version, substitute half-and-half for the heavy cream.",
      "Add grilled chicken or shrimp for extra protein.",
      "Fresh herbs like basil or thyme make a great addition to this dish.",
    ],
    variations: [
      "Spicy version: Add red pepper flakes to taste.",
      "Veggie loaded: Add sautéed mushrooms, spinach, and cherry tomatoes.",
      "Seafood version: Add cooked shrimp or scallops.",
    ],
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Bowl",
    image: "/placeholder.svg?height=400&width=600",
    time: "30 mins",
    difficulty: "Easy",
    servings: 2,
    description:
      "A nutritious and colorful bowl packed with Mediterranean flavors. Perfect for meal prep and healthy lunches!",
    ingredients: [
      { name: "quinoa, rinsed", quantity: 1, unit: "cup" },
      { name: "water", quantity: 2, unit: "cups" },
      { name: "cucumber, diced", quantity: 1, unit: "medium" },
      { name: "cherry tomatoes, halved", quantity: 1, unit: "cup" },
      { name: "red onion, finely diced", quantity: 0.25, unit: "cup" },
      { name: "kalamata olives, pitted and sliced", quantity: 0.33, unit: "cup" },
      { name: "feta cheese, crumbled", quantity: 0.5, unit: "cup" },
      { name: "fresh parsley, chopped", quantity: 0.25, unit: "cup" },
      { name: "olive oil", quantity: 2, unit: "tbsp" },
      { name: "lemon juice", quantity: 2, unit: "tbsp" },
      { name: "garlic, minced", quantity: 1, unit: "clove" },
      { name: "dried oregano", quantity: 0.5, unit: "tsp" },
      { name: "salt", quantity: 0.25, unit: "tsp" },
      { name: "black pepper", quantity: 0.25, unit: "tsp" },
    ],
    instructions: [
      "In a medium saucepan, combine quinoa and water. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until water is absorbed and quinoa is fluffy.",
      "While quinoa is cooking, prepare the dressing by whisking together olive oil, lemon juice, garlic, oregano, salt, and pepper in a small bowl.",
      "In a large bowl, combine cooked quinoa, cucumber, cherry tomatoes, red onion, and olives.",
      "Pour the dressing over the quinoa mixture and toss to combine.",
      "Gently fold in the feta cheese and chopped parsley.",
      "Serve at room temperature or chilled.",
    ],
    nutritionInfo: {
      calories: 380,
      protein: "12g",
      carbs: "42g",
      fat: "18g",
      fiber: "6g",
      sugar: "4g",
      sodium: "580mg",
    },
    tags: ["Vegetarian", "Healthy", "Mediterranean"],
    rating: 4.5,
    reviews: 86,
    author: "Nutritionist Sarah",
    authorImage: "/placeholder.svg?height=50&width=50",
    tips: [
      "For a vegan version, omit the feta cheese or use a plant-based alternative.",
      "Add grilled chicken or chickpeas for extra protein.",
      "This dish keeps well in the refrigerator for up to 3 days.",
    ],
    variations: [
      "Add roasted red peppers for extra sweetness and color.",
      "Include fresh mint leaves for a refreshing twist.",
      "Top with toasted pine nuts for added crunch.",
    ],
  },
  {
    id: 3,
    title: "Classic Beef Stir Fry",
    image: "/placeholder.svg?height=400&width=600",
    time: "25 mins",
    difficulty: "Medium",
    servings: 4,
    description:
      "A quick and flavorful beef stir fry with crisp vegetables and a savory sauce. Perfect for busy weeknights!",
    ingredients: [
      { name: "flank steak, thinly sliced against the grain", quantity: 1, unit: "lb" },
      { name: "soy sauce", quantity: 3, unit: "tbsp" },
      { name: "cornstarch", quantity: 1, unit: "tbsp" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp" },
      { name: "garlic, minced", quantity: 3, unit: "cloves" },
      { name: "fresh ginger, grated", quantity: 1, unit: "tbsp" },
      { name: "broccoli florets", quantity: 2, unit: "cups" },
      { name: "red bell pepper, sliced", quantity: 1, unit: "medium" },
      { name: "carrots, thinly sliced", quantity: 2, unit: "medium" },
      { name: "green onions, sliced", quantity: 4, unit: "stalks" },
      { name: "beef broth", quantity: 0.5, unit: "cup" },
      { name: "oyster sauce", quantity: 2, unit: "tbsp" },
      { name: "brown sugar", quantity: 1, unit: "tbsp" },
      { name: "sesame oil", quantity: 1, unit: "tsp" },
      { name: "red pepper flakes", quantity: 0.25, unit: "tsp", optional: true },
      { name: "cooked rice for serving", quantity: 4, unit: "cups" },
    ],
    instructions: [
      "In a bowl, toss the sliced beef with 1 tablespoon soy sauce and cornstarch. Let marinate for 10 minutes.",
      "Heat 1 tablespoon oil in a large wok or skillet over high heat. Add beef and stir-fry until browned, about 2-3 minutes. Remove beef and set aside.",
      "Add remaining oil to the wok. Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
      "Add broccoli, bell pepper, and carrots. Stir-fry for 3-4 minutes until vegetables begin to soften but remain crisp.",
      "In a small bowl, whisk together beef broth, remaining soy sauce, oyster sauce, and brown sugar.",
      "Return beef to the wok, add the sauce mixture. Bring to a simmer and cook for 2 minutes until sauce thickens slightly.",
      "Stir in green onions and sesame oil. Add red pepper flakes if using.",
      "Serve hot over cooked rice.",
    ],
    nutritionInfo: {
      calories: 420,
      protein: "28g",
      carbs: "38g",
      fat: "18g",
      fiber: "4g",
      sugar: "6g",
      sodium: "850mg",
    },
    tags: ["High-Protein", "Quick", "Asian"],
    rating: 4.6,
    reviews: 112,
    author: "Chef Michael",
    authorImage: "/placeholder.svg?height=50&width=50",
    tips: [
      "Freeze the beef for 20 minutes before slicing to make it easier to cut thinly.",
      "For extra tender beef, add 1 teaspoon of baking soda to the marinade.",
      "Prepare all ingredients before starting to cook as stir-frying moves quickly.",
    ],
    variations: [
      "Substitute chicken, pork, or tofu for the beef.",
      "Use different vegetables like snow peas, mushrooms, or bok choy.",
      "For a spicier version, add more red pepper flakes or fresh sliced chilies.",
    ],
  },
  {
    id: 4,
    title: "Lemon Herb Roasted Chicken",
    image: "/placeholder.svg?height=400&width=600",
    time: "1 hour 15 mins",
    difficulty: "Medium",
    servings: 6,
    description:
      "A classic roasted chicken infused with bright lemon and aromatic herbs. Perfect for Sunday dinner with the family!",
    ingredients: [
      { name: "whole chicken", quantity: 1, unit: "4-5 lb" },
      { name: "lemons", quantity: 2, unit: "medium" },
      { name: "garlic head", quantity: 1, unit: "whole" },
      { name: "fresh rosemary", quantity: 3, unit: "sprigs" },
      { name: "fresh thyme", quantity: 5, unit: "sprigs" },
      { name: "olive oil", quantity: 3, unit: "tbsp" },
      { name: "butter, softened", quantity: 2, unit: "tbsp" },
      { name: "salt", quantity: 1.5, unit: "tsp" },
      { name: "black pepper", quantity: 1, unit: "tsp" },
      { name: "onion, quartered", quantity: 1, unit: "large" },
      { name: "carrots, roughly chopped", quantity: 2, unit: "medium" },
      { name: "celery stalks, roughly chopped", quantity: 2, unit: "stalks" },
      { name: "chicken broth", quantity: 1, unit: "cup" },
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Remove giblets from chicken cavity and pat chicken dry with paper towels.",
      "Zest one lemon and combine zest with softened butter, 1 tablespoon chopped rosemary, 1 tablespoon chopped thyme, salt, and pepper.",
      "Gently loosen the skin over the chicken breast and spread herb butter mixture underneath.",
      "Cut both lemons in half. Squeeze the juice of one lemon over the chicken and place all lemon halves inside the cavity along with garlic head (cut in half crosswise), and remaining herb sprigs.",
      "Place onion, carrots, and celery in the bottom of a roasting pan. Place chicken on top of vegetables.",
      "Drizzle olive oil over chicken and rub to coat evenly. Season with additional salt and pepper.",
      "Pour chicken broth into the bottom of the pan.",
      "Roast for 1 hour to 1 hour 15 minutes, or until internal temperature reaches 165°F (74°C) and juices run clear.",
      "Let chicken rest for 15 minutes before carving.",
      "Serve with roasted vegetables and pan juices.",
    ],
    nutritionInfo: {
      calories: 380,
      protein: "42g",
      carbs: "8g",
      fat: "22g",
      fiber: "2g",
      sugar: "3g",
      sodium: "520mg",
    },
    tags: ["Dinner", "Family", "Gluten-Free"],
    rating: 4.8,
    reviews: 156,
    author: "Chef Julia",
    authorImage: "/placeholder.svg?height=50&width=50",
    tips: [
      "Bringing the chicken to room temperature before roasting helps it cook more evenly.",
      "For crispy skin, make sure to thoroughly dry the chicken before seasoning.",
      "Let the chicken rest after roasting to allow juices to redistribute for moist meat.",
    ],
    variations: [
      "Use orange instead of lemon for a different citrus flavor.",
      "Add fennel bulb to the roasting vegetables for a Mediterranean twist.",
      "Substitute dried herbs if fresh aren't available (use 1/3 the amount).",
    ],
  },
  {
    id: 5,
    title: "Vegetarian Chili",
    image: "/placeholder.svg?height=400&width=600",
    time: "45 mins",
    difficulty: "Easy",
    servings: 8,
    description:
      "A hearty and flavorful vegetarian chili packed with beans and vegetables. Perfect for meal prep or feeding a crowd!",
    ingredients: [
      { name: "olive oil", quantity: 2, unit: "tbsp" },
      { name: "onion, diced", quantity: 1, unit: "large" },
      { name: "bell peppers (any color), diced", quantity: 2, unit: "medium" },
      { name: "carrots, diced", quantity: 2, unit: "medium" },
      { name: "celery stalks, diced", quantity: 2, unit: "stalks" },
      { name: "garlic, minced", quantity: 4, unit: "cloves" },
      { name: "jalapeño, seeded and minced", quantity: 1, unit: "medium" },
      { name: "chili powder", quantity: 2, unit: "tbsp" },
      { name: "ground cumin", quantity: 1, unit: "tbsp" },
      { name: "dried oregano", quantity: 1, unit: "tsp" },
      { name: "smoked paprika", quantity: 1, unit: "tsp" },
      { name: "black beans, drained and rinsed", quantity: 2, unit: "15 oz cans" },
      { name: "kidney beans, drained and rinsed", quantity: 1, unit: "15 oz can" },
      { name: "pinto beans, drained and rinsed", quantity: 1, unit: "15 oz can" },
      { name: "diced tomatoes", quantity: 2, unit: "14.5 oz cans" },
      { name: "tomato sauce", quantity: 1, unit: "15 oz can" },
      { name: "vegetable broth", quantity: 2, unit: "cups" },
      { name: "corn kernels (fresh, frozen, or canned)", quantity: 1, unit: "cup" },
      { name: "salt", quantity: 1, unit: "tsp" },
      { name: "black pepper", quantity: 0.5, unit: "tsp" },
      { name: "brown sugar", quantity: 1, unit: "tbsp" },
      { name: "lime juice", quantity: 2, unit: "tbsp" },
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat. Add onion, bell peppers, carrots, and celery. Cook until vegetables begin to soften, about 5-7 minutes.",
      "Add garlic and jalapeño, cook for another minute until fragrant.",
      "Stir in chili powder, cumin, oregano, and smoked paprika. Cook for 30 seconds to toast the spices.",
      "Add all beans, diced tomatoes, tomato sauce, and vegetable broth. Stir to combine.",
      "Bring to a boil, then reduce heat to low and simmer, partially covered, for 25-30 minutes, stirring occasionally.",
      "Add corn, salt, pepper, and brown sugar. Simmer for another 5 minutes.",
      "Stir in lime juice just before serving.",
      "Serve with optional toppings like avocado, shredded cheese, sour cream, cilantro, or tortilla chips.",
    ],
    nutritionInfo: {
      calories: 280,
      protein: "14g",
      carbs: "48g",
      fat: "6g",
      fiber: "15g",
      sugar: "10g",
      sodium: "650mg",
    },
    tags: ["Vegetarian", "Vegan", "High-Fiber", "Gluten-Free"],
    rating: 4.7,
    reviews: 142,
    author: "Plant-Based Chef Alex",
    authorImage: "/placeholder.svg?height=50&width=50",
    tips: [
      "For a thicker chili, mash some of the beans before adding them to the pot.",
      "This chili tastes even better the next day as flavors continue to develop.",
      "Freeze individual portions for quick and easy meals later.",
    ],
    variations: [
      "Add diced sweet potato or butternut squash for extra heartiness.",
      "Include a tablespoon of cocoa powder for depth of flavor.",
      "For a meaty texture without meat, add 1 cup of bulgur wheat or textured vegetable protein.",
    ],
  },
]

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const [isSaved, setIsSaved] = useState(false)
  const [servings, setServings] = useState(0)
  const [originalServings, setOriginalServings] = useState(0)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [recipe, setRecipe] = useState<(typeof mockRecipes)[0] | null>(null)

  // Find the recipe by ID when the component mounts
  useEffect(() => {
    const foundRecipe = mockRecipes.find((r) => r.id === Number.parseInt(params.id))
    if (foundRecipe) {
      setRecipe(foundRecipe)
      setServings(foundRecipe.servings)
      setOriginalServings(foundRecipe.servings)
    }
  }, [params.id])

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleTimer = () => {
    if (isTimerActive) {
      setIsTimerActive(false)
    } else {
      setIsTimerActive(true)
      // In a real app, you would set up an interval to increment the timer
    }
  }

  const resetTimer = () => {
    setIsTimerActive(false)
    setTimerSeconds(0)
  }

  // Function to format ingredient quantity based on serving adjustment
  const formatIngredientQuantity = (ingredient: {
    name: string
    quantity: number
    unit: string
    optional?: boolean
  }) => {
    if (!originalServings || originalServings === 0) return `${ingredient.quantity} ${ingredient.unit}`

    // Calculate adjusted quantity
    const scaleFactor = servings / originalServings
    const adjustedQuantity = ingredient.quantity * scaleFactor

    // Format the quantity nicely
    let formattedQuantity: string

    // Handle special case for "to taste" and similar non-numeric units
    if (ingredient.unit === "to taste") {
      return ingredient.unit
    }

    // Format fractions nicely
    if (adjustedQuantity < 1 && adjustedQuantity > 0) {
      // Convert to fractions for small quantities
      if (Math.abs(adjustedQuantity - 0.25) < 0.05) {
        formattedQuantity = "¼"
      } else if (Math.abs(adjustedQuantity - 0.33) < 0.05) {
        formattedQuantity = "⅓"
      } else if (Math.abs(adjustedQuantity - 0.5) < 0.05) {
        formattedQuantity = "½"
      } else if (Math.abs(adjustedQuantity - 0.67) < 0.05) {
        formattedQuantity = "⅔"
      } else if (Math.abs(adjustedQuantity - 0.75) < 0.05) {
        formattedQuantity = "¾"
      } else {
        // Round to 1 decimal place for other values
        formattedQuantity = adjustedQuantity.toFixed(1)
      }
    } else {
      // For whole numbers, don't show decimal places
      formattedQuantity = Number.isInteger(adjustedQuantity) ? adjustedQuantity.toString() : adjustedQuantity.toFixed(1)
    }

    // Remove trailing .0
    if (formattedQuantity.endsWith(".0")) {
      formattedQuantity = formattedQuantity.slice(0, -2)
    }

    return `${formattedQuantity} ${ingredient.unit}${ingredient.optional ? " (optional)" : ""}`
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading recipe...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <GeometricPattern className="absolute inset-0 opacity-5 z-0" />

      <header className="p-4 flex justify-between items-center relative z-10">
        <Link href="/recipes" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? <BookmarkCheck className="h-5 w-5 text-blue-500" /> : <Bookmark className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Printer className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-2 max-w-2xl mx-auto w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-6">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-gray-800">{recipe.title}</h1>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-blue-500 mr-1" />
                <span className="font-medium">{recipe.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({recipe.reviews})</span>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Image
                src={recipe.authorImage || "/placeholder.svg"}
                alt={recipe.author}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">By {recipe.author}</span>
            </div>

            <p className="text-gray-600 mb-4">{recipe.description}</p>

            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-blue-500" />
                <span className="text-sm">{recipe.time}</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-4 w-4 mr-1 text-blue-500" />
                <span className="text-sm">{recipe.difficulty}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-blue-500" />
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 p-0"
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    disabled={servings <= 1}
                  >
                    -
                  </Button>
                  <span className="text-sm mx-1">{servings}</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6 p-0" onClick={() => setServings(servings + 1)}>
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 mb-6">
              <Button className="flex-1 bg-blue-400 hover:bg-blue-500">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Shopping List
              </Button>
              <Button variant="outline" className="flex-1">
                Start Cooking
              </Button>
            </div>
          </div>

          <div className="relative mb-8">
            <WavePattern className="absolute -top-6 left-0 right-0 w-full h-12 opacity-30" />
          </div>

          <Tabs defaultValue="ingredients" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="ingredients" className="space-y-4">
              <div className="bg-amber-50 p-3 rounded-md text-sm text-amber-800 mb-4 border border-amber-200">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-amber-400 rounded-full mr-3"></div>
                  <p>
                    Ingredients adjusted for {servings} {servings === 1 ? "serving" : "servings"}
                    {servings !== originalServings && (
                      <span className="text-xs ml-2">
                        (original recipe: {originalServings} {originalServings === 1 ? "serving" : "servings"})
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start p-2 hover:bg-blue-50 rounded-md transition-colors">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline">
                      <span className="font-medium min-w-[100px] mr-2">{formatIngredientQuantity(ingredient)}</span>
                      <span>{ingredient.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="instructions" className="space-y-4">
              <div className="bg-white p-3 rounded-md shadow-sm mb-4 flex items-center justify-between border border-blue-100">
                <div className="text-lg font-medium">{formatTimer(timerSeconds)}</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={toggleTimer} className="h-8 w-8 p-0">
                    {isTimerActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetTimer} className="h-8 w-8 p-0">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex p-3 hover:bg-blue-50 rounded-md transition-colors">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <div className="pl-2">
                    <div className="text-sm text-gray-500">Calories</div>
                    <div className="text-xl font-bold">{recipe.nutritionInfo.calories}</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <div className="pl-2">
                    <div className="text-sm text-gray-500">Protein</div>
                    <div className="text-xl font-bold">{recipe.nutritionInfo.protein}</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <div className="pl-2">
                    <div className="text-sm text-gray-500">Carbs</div>
                    <div className="text-xl font-bold">{recipe.nutritionInfo.carbs}</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <div className="pl-2">
                    <div className="text-sm text-gray-500">Fat</div>
                    <div className="text-xl font-bold">{recipe.nutritionInfo.fat}</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <div className="pl-2">
                    <div className="text-sm text-gray-500">Fiber</div>
                    <div className="text-xl font-bold">{recipe.nutritionInfo.fiber}</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                  <div className="pl-2">
                    <div className="text-sm text-gray-500">Sugar</div>
                    <div className="text-xl font-bold">{recipe.nutritionInfo.sugar}</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Chef's Tips
                </h3>
                <ul className="space-y-2 pl-4">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start p-2 hover:bg-blue-50 rounded-md transition-colors">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Variations
                </h3>
                <ul className="space-y-2 pl-4">
                  {recipe.variations.map((variation, index) => (
                    <li key={index} className="flex items-start p-2 hover:bg-blue-50 rounded-md transition-colors">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                      <span>{variation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <WavePattern className="absolute -top-6 left-0 right-0 w-full h-12 opacity-30" />
            </div>
            <h3 className="font-medium text-lg">Reviews & Comments</h3>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex-1">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
