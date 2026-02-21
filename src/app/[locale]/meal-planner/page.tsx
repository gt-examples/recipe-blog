"use client";

import { useState } from "react";
import { T, Num, Plural } from "gt-next";
import { useGT } from "gt-next/client";
import { recipes, type Recipe } from "@/data/recipes";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

type MealPlan = Record<string, Recipe[]>;

export default function MealPlannerPage() {
  const gt = useGT();
  const [plan, setPlan] = useState<MealPlan>(() =>
    Object.fromEntries(daysOfWeek.map((d) => [d, []]))
  );
  const [draggedRecipe, setDraggedRecipe] = useState<Recipe | null>(null);
  const [showList, setShowList] = useState(false);

  const handleDragStart = (recipe: Recipe) => {
    setDraggedRecipe(recipe);
  };

  const handleDrop = (day: string) => {
    if (draggedRecipe && !plan[day].some((r) => r.slug === draggedRecipe.slug)) {
      setPlan((prev) => ({
        ...prev,
        [day]: [...prev[day], draggedRecipe],
      }));
    }
    setDraggedRecipe(null);
  };

  const removeFromDay = (day: string, slug: string) => {
    setPlan((prev) => ({
      ...prev,
      [day]: prev[day].filter((r) => r.slug !== slug),
    }));
  };

  // Generate shopping list
  const allPlannedRecipes = Object.values(plan).flat();
  const shoppingList = new Map<string, { amount: number; unit: string }>();
  for (const recipe of allPlannedRecipes) {
    for (const ing of recipe.ingredients) {
      const key = ing.name;
      const existing = shoppingList.get(key);
      if (existing && existing.unit === ing.unit) {
        existing.amount += ing.amount;
      } else {
        shoppingList.set(key, { amount: ing.amount, unit: ing.unit });
      }
    }
  }

  const dayLabels: Record<string, string> = {
    Monday: gt("Monday"),
    Tuesday: gt("Tuesday"),
    Wednesday: gt("Wednesday"),
    Thursday: gt("Thursday"),
    Friday: gt("Friday"),
    Saturday: gt("Saturday"),
    Sunday: gt("Sunday"),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="text-3xl font-bold text-dark mb-2">Meal Planner</h1>
        <p className="text-dark/60 mb-8">
          Drag recipes from the list below into your weekly plan. A shopping list is automatically generated based on your selections.
        </p>
      </T>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Recipe pool */}
        <div className="lg:col-span-1">
          <T>
            <h2 className="font-semibold text-dark mb-3">Available Recipes</h2>
          </T>
          <div className="space-y-2 max-h-[600px] overflow-y-auto">
            {recipes.map((recipe) => (
              <div
                key={recipe.slug}
                draggable
                onDragStart={() => handleDragStart(recipe)}
                className="bg-dark text-cream p-3 rounded-lg cursor-grab active:cursor-grabbing text-sm hover:bg-dark/90 transition-colors"
              >
                <T>
                  <span className="font-medium">{recipe.title}</span>
                </T>
                <div className="text-cream/50 text-xs mt-1">
                  <Num>{recipe.cookTimeMinutes}</Num>
                  <T> min</T>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly plan */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(day)}
                className={`border rounded-lg p-3 min-h-[140px] transition-colors ${
                  draggedRecipe
                    ? "border-orange-brand border-dashed bg-orange-brand/5"
                    : "border-orange-brand/20"
                }`}
              >
                <h3 className="text-sm font-semibold text-dark mb-2">
                  {dayLabels[day]}
                </h3>
                {plan[day].length === 0 ? (
                  <T>
                    <p className="text-dark/30 text-xs">
                      Drop recipes here
                    </p>
                  </T>
                ) : (
                  <div className="space-y-1">
                    {plan[day].map((r) => (
                      <div
                        key={r.slug}
                        className="bg-orange-brand/10 rounded px-2 py-1 text-xs flex items-center justify-between"
                      >
                        <T><span className="text-dark">{r.title}</span></T>
                        <button
                          onClick={() => removeFromDay(day, r.slug)}
                          className="text-dark/40 hover:text-red-500 ml-1"
                          aria-label={gt("Remove")}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Shopping list toggle */}
          <div className="mt-8">
            <button
              onClick={() => setShowList(!showList)}
              className="bg-orange-brand text-cream px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-brand/90 transition-colors"
            >
              <T>{showList ? "Hide Shopping List" : "Generate Shopping List"}</T>
            </button>

            {showList && (
              <div className="mt-4 bg-dark text-cream rounded-lg p-5">
                <T>
                  <h3 className="font-semibold mb-3">
                    Shopping List
                    {" "}
                    <Plural
                      n={shoppingList.size}
                      singular={<>(<Num>{shoppingList.size}</Num> item)</>}
                      plural={<>(<Num>{shoppingList.size}</Num> items)</>}
                    />
                  </h3>
                </T>
                {shoppingList.size === 0 ? (
                  <T>
                    <p className="text-cream/50 text-sm">
                      Add recipes to your meal plan to generate a shopping list.
                    </p>
                  </T>
                ) : (
                  <ul className="space-y-1 text-sm">
                    {Array.from(shoppingList.entries()).map(([name, { amount, unit }]) => (
                      <li key={name} className="flex justify-between border-b border-orange-brand/10 py-1 last:border-0">
                        <T><span className="text-cream/80">{name}</span></T>
                        <span className="text-orange-brand font-mono">
                          <Num>{amount}</Num> {unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
