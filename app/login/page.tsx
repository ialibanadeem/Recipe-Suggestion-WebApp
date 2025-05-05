"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { RecipeLogo } from "@/components/icons/recipe-logo"
import { DecorativeWave } from "@/components/decorative-wave"
import { DotPattern } from "@/components/patterns/dot-pattern"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle authentication here
    window.location.href = "/preferences"
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle registration here
    window.location.href = "/preferences"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <DotPattern className="absolute inset-0 opacity-5 z-0" />

      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 overflow-hidden">
        <DecorativeWave />
      </div>

      <header className="p-4 relative z-10">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-6"
        >
          {/* Logo */}
          <div className="text-center">
            <div className="relative mx-auto mb-4">
              <RecipeLogo className="w-20 h-20 mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to Recipe Reverse</h1>
            <p className="text-gray-600 text-sm mt-1">Sign in to continue your culinary journey</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="space-y-4 pt-4">
                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-400 hover:bg-blue-500">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup" className="space-y-4 pt-4">
                {/* Signup Form */}
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-400 hover:bg-blue-500">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="bg-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </Button>
            <Button variant="outline" className="bg-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43z"
                  fill="#000"
                />
                <path
                  d="M20.97 17.33c-.26.77-1.26 2.48-2.65 2.48-1.2 0-1.54-.57-2.66-.57-1.03 0-1.4.52-2.64.52-2.3 0-4.2-6.74-4.2-9.09 0-2.6 1.7-3.9 3.4-3.9 1.04 0 2.24.58 2.9.58.57 0 1.96-.6 2.93-.6 1.52 0 2.46 1.02 2.46 2.43 0 1.18-.26 2.26-1.85 2.77-.15.06-1.05.36-1.05 1.65 0 .58.08.94.48 1.54.77 1.06 1.05 1.97 1.05 2.99 0 .3-.05.94-.17 1.2z"
                  fill="#000"
                />
              </svg>
            </Button>
            <Button variant="outline" className="bg-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill="#1877F2"
                />
                <path
                  d="M15.893 14.89l.443-2.89h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V12h-2.54v2.89h2.54v6.988C10.296 21.958 11.13 22 12 22s1.704-.042 2.553-.112v-6.988h2.34z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>

          <div className="text-center text-sm">
            <p className="text-gray-600 text-xs mt-4">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
