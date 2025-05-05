"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { RecipeLogo } from "@/components/icons/recipe-logo"
import { CookingIllustration } from "@/components/icons/cooking-illustration"
import { DecorativeWave } from "@/components/decorative-wave"
import { GradientMesh } from "@/components/patterns/gradient-mesh"
import { FoodPattern } from "@/components/patterns/food-pattern"

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-white overflow-hidden">
      {/* Background patterns */}
      <GradientMesh className="absolute top-0 left-0 right-0 h-[50vh] opacity-20 z-0" />
      <FoodPattern className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-5 z-0" />

      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 overflow-hidden z-0">
        <DecorativeWave />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center z-10 relative">
        <div className="w-full max-w-md space-y-8">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <RecipeLogo className="w-32 h-32 mx-auto" />
          </motion.div>

          {/* Hero tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Your kitchen's smartest companion — recipes at your fingertips.
            </h1>
            <p className="text-gray-600 mt-4 md:text-lg">
              Discover delicious recipes with ingredients you already have at home.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="py-4"
          >
            <CookingIllustration className="w-full max-w-xs mx-auto" />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-blue-500 font-semibold mb-1">Personalized</div>
                <div className="text-sm text-gray-600">Recipes tailored to your dietary needs</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-blue-500 font-semibold mb-1">Smart Search</div>
                <div className="text-sm text-gray-600">Find recipes with what you have</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-blue-500 font-semibold mb-1">Meal Planning</div>
                <div className="text-sm text-gray-600">Plan your meals for the week</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-blue-500 font-semibold mb-1">Shopping Lists</div>
                <div className="text-sm text-gray-600">Generate lists for missing ingredients</div>
              </div>
            </div>
          </motion.div>

          {/* Get Started button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8"
          >
            <Link href="/login">
              <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Terms and Privacy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 text-xs text-gray-500"
          >
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            {" • "}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer with social icons */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="py-6 relative z-10"
      >
        <div className="flex justify-center space-x-6">
          <Link href="https://instagram.com" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://twitter.com" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://facebook.com" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://linkedin.com" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </motion.footer>
    </div>
  )
}
