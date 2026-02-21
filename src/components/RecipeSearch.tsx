"use client";

import { useState } from "react";
import { T, Plural, Num } from "gt-next";
import { useGT } from "gt-next/client";
import { recipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const gt = useGT();

  const filtered = query.trim()
    ? recipes.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.description.toLowerCase().includes(query.toLowerCase()) ||
          r.cuisine.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={gt("Search recipes...")}
        className="w-full bg-dark border border-orange-brand/30 text-cream rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-brand placeholder:text-cream/30"
      />
      {query.trim() && (
        <div className="mt-4">
          <T>
            <p className="text-cream/50 text-sm mb-3">
              <Plural
                n={filtered.length}
                singular={<><Num>{filtered.length}</Num> result found</>}
                plural={<><Num>{filtered.length}</Num> results found</>}
              />
            </p>
          </T>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
