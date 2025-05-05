"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

export default function DietaryPreferences() {
  const [preferences, setPreferences] = useState({
    // Dietary restrictions
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
    shellfishFree: false,

    // Diet types
    keto: false,
    paleo: false,
    lowCarb: false,
    lowFat: false,
    highProtein: false,
    mediterranean: false,

    // Health goals
    weightLoss: false,
    muscleGain: false,
    heartHealthy: false,
    diabetesFriendly: false,
  })

  const [allergies, setAllergies] = useState({
    peanuts: false,
    treeNuts: false,
    dairy: false,
    eggs: false,
    wheat: false,
    soy: false,
    fish: false,
    shellfish: false,
  })

  const handlePreferenceChange = (preference: string) => {
    setPreferences({
      ...preferences,
      [preference]: !preferences[preference as keyof typeof preferences],
    })
  }

  const handleAllergyChange = (allergy: string) => {
    setAllergies({
      ...allergies,
      [allergy]: !allergies[allergy as keyof typeof allergies],
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Link href="/login" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
        <div className="text-sm text-gray-500">Step 1 of 3</div>
      </header>

      <main className="flex-1 flex flex-col px-4 py-6 max-w-md mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Personalize Your Experience</h1>
            <p className="text-gray-600 mt-1">
              Tell us about your dietary preferences to help us find the perfect recipes for you.
            </p>
          </div>

          <Tabs defaultValue="diet" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="diet">Diet Types</TabsTrigger>
              <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
              <TabsTrigger value="allergies">Allergies</TabsTrigger>
            </TabsList>

            <TabsContent value="diet" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="keto"
                    checked={preferences.keto}
                    onCheckedChange={() => handlePreferenceChange("keto")}
                  />
                  <div className="flex items-center">
                    <Label htmlFor="keto" className="mr-1">
                      Keto
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3.5 w-3.5 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">High fat, adequate protein, low carbohydrate diet</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="paleo"
                    checked={preferences.paleo}
                    onCheckedChange={() => handlePreferenceChange("paleo")}
                  />
                  <div className="flex items-center">
                    <Label htmlFor="paleo" className="mr-1">
                      Paleo
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3.5 w-3.5 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-60">
                            Based on foods similar to what might have been eaten during the Paleolithic era
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lowCarb"
                    checked={preferences.lowCarb}
                    onCheckedChange={() => handlePreferenceChange("lowCarb")}
                  />
                  <Label htmlFor="lowCarb">Low-Carb</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lowFat"
                    checked={preferences.lowFat}
                    onCheckedChange={() => handlePreferenceChange("lowFat")}
                  />
                  <Label htmlFor="lowFat">Low-Fat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="highProtein"
                    checked={preferences.highProtein}
                    onCheckedChange={() => handlePreferenceChange("highProtein")}
                  />
                  <Label htmlFor="highProtein">High-Protein</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mediterranean"
                    checked={preferences.mediterranean}
                    onCheckedChange={() => handlePreferenceChange("mediterranean")}
                  />
                  <Label htmlFor="mediterranean">Mediterranean</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="weightLoss"
                    checked={preferences.weightLoss}
                    onCheckedChange={() => handlePreferenceChange("weightLoss")}
                  />
                  <Label htmlFor="weightLoss">Weight Loss</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="muscleGain"
                    checked={preferences.muscleGain}
                    onCheckedChange={() => handlePreferenceChange("muscleGain")}
                  />
                  <Label htmlFor="muscleGain">Muscle Gain</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="heartHealthy"
                    checked={preferences.heartHealthy}
                    onCheckedChange={() => handlePreferenceChange("heartHealthy")}
                  />
                  <Label htmlFor="heartHealthy">Heart Healthy</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="diabetesFriendly"
                    checked={preferences.diabetesFriendly}
                    onCheckedChange={() => handlePreferenceChange("diabetesFriendly")}
                  />
                  <Label htmlFor="diabetesFriendly">Diabetes Friendly</Label>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="restrictions" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vegetarian"
                    checked={preferences.vegetarian}
                    onCheckedChange={() => handlePreferenceChange("vegetarian")}
                  />
                  <Label htmlFor="vegetarian">Vegetarian</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vegan"
                    checked={preferences.vegan}
                    onCheckedChange={() => handlePreferenceChange("vegan")}
                  />
                  <Label htmlFor="vegan">Vegan</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="glutenFree"
                    checked={preferences.glutenFree}
                    onCheckedChange={() => handlePreferenceChange("glutenFree")}
                  />
                  <Label htmlFor="glutenFree">Gluten-Free</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dairyFree"
                    checked={preferences.dairyFree}
                    onCheckedChange={() => handlePreferenceChange("dairyFree")}
                  />
                  <Label htmlFor="dairyFree">Dairy-Free</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="nutFree"
                    checked={preferences.nutFree}
                    onCheckedChange={() => handlePreferenceChange("nutFree")}
                  />
                  <Label htmlFor="nutFree">Nut-Free</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="shellfishFree"
                    checked={preferences.shellfishFree}
                    onCheckedChange={() => handlePreferenceChange("shellfishFree")}
                  />
                  <Label htmlFor="shellfishFree">Shellfish-Free</Label>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="allergies" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="peanuts"
                    checked={allergies.peanuts}
                    onCheckedChange={() => handleAllergyChange("peanuts")}
                  />
                  <Label htmlFor="peanuts">Peanuts</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="treeNuts"
                    checked={allergies.treeNuts}
                    onCheckedChange={() => handleAllergyChange("treeNuts")}
                  />
                  <Label htmlFor="treeNuts">Tree Nuts</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dairy" checked={allergies.dairy} onCheckedChange={() => handleAllergyChange("dairy")} />
                  <Label htmlFor="dairy">Dairy</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="eggs" checked={allergies.eggs} onCheckedChange={() => handleAllergyChange("eggs")} />
                  <Label htmlFor="eggs">Eggs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="wheat" checked={allergies.wheat} onCheckedChange={() => handleAllergyChange("wheat")} />
                  <Label htmlFor="wheat">Wheat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="soy" checked={allergies.soy} onCheckedChange={() => handleAllergyChange("soy")} />
                  <Label htmlFor="soy">Soy</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fish" checked={allergies.fish} onCheckedChange={() => handleAllergyChange("fish")} />
                  <Label htmlFor="fish">Fish</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="shellfish"
                    checked={allergies.shellfish}
                    onCheckedChange={() => handleAllergyChange("shellfish")}
                  />
                  <Label htmlFor="shellfish">Shellfish</Label>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="mt-auto pt-6">
          <Link href="/cuisine-preferences">
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
