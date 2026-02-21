"use client";

import { useState } from "react";
import { T, Plural, Num } from "gt-next";
import { useGT } from "gt-next/client";
import { recipes, cuisines, getRecipesByCuisine } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import { useSearchParams } from "next/navigation";

export default function CategoriesPage() {
  const gt = useGT();
  const searchParams = useSearchParams();
  const initialCuisine = searchParams.get("cuisine") || "";
  const [selected, setSelected] = useState<string>(initialCuisine);

  const cuisineLabels: Record<string, string> = {
    italian: gt("Italian"),
    japanese: gt("Japanese"),
    mexican: gt("Mexican"),
    indian: gt("Indian"),
    french: gt("French"),
  };

  const filtered = selected
    ? getRecipesByCuisine(selected as typeof cuisines[number])
    : recipes;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="text-3xl font-bold text-dark mb-2">Categories</h1>
        <p className="text-dark/60 mb-8">
          Browse our collection of recipes by cuisine. Select a category below to filter.
        </p>
      </T>

      {/* Cuisine filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelected("")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selected
              ? "bg-orange-brand text-cream"
              : "border border-orange-brand/30 text-dark hover:border-orange-brand"
          }`}
        >
          <T>All Cuisines</T>
        </button>
        {cuisines.map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c === selected ? "" : c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selected === c
                ? "bg-orange-brand text-cream"
                : "border border-orange-brand/30 text-dark hover:border-orange-brand"
            }`}
          >
            <T><span>{cuisineLabels[c]}</span></T>
          </button>
        ))}
      </div>

      <T>
        <p className="text-dark/50 text-sm mb-4">
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> recipe</>}
            plural={<><Num>{filtered.length}</Num> recipes</>}
          />
        </p>
      </T>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((r) => (
          <RecipeCard key={r.slug} recipe={r} />
        ))}
      </div>
    </div>
  );
}
