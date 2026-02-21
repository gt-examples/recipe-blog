"use client";

import { useState } from "react";
import { T, Num, Plural } from "gt-next";
import type { Ingredient } from "@/data/recipes";

interface Props {
  defaultServings: number;
  ingredients: Ingredient[];
}

export default function ServingsAdjuster({ defaultServings, ingredients }: Props) {
  const [servings, setServings] = useState(defaultServings);
  const scale = servings / defaultServings;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <T>
          <span className="text-cream/70 text-sm font-medium">Servings:</span>
        </T>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setServings(Math.max(1, servings - 1))}
            className="w-8 h-8 rounded-full border border-orange-brand/40 text-orange-brand hover:bg-orange-brand hover:text-cream transition-colors flex items-center justify-center text-lg"
            aria-label="Decrease servings"
          >
            -
          </button>
          <span className="text-cream font-bold text-lg w-8 text-center">
            <Num>{servings}</Num>
          </span>
          <button
            onClick={() => setServings(servings + 1)}
            className="w-8 h-8 rounded-full border border-orange-brand/40 text-orange-brand hover:bg-orange-brand hover:text-cream transition-colors flex items-center justify-center text-lg"
            aria-label="Increase servings"
          >
            +
          </button>
        </div>
      </div>

      <T>
        <h3 className="text-cream font-semibold mb-3">
          <Plural n={ingredients.length}
            singular={<><Num>{ingredients.length}</Num> Ingredient</>}
            plural={<><Num>{ingredients.length}</Num> Ingredients</>}
          />
        </h3>
      </T>

      <ul className="space-y-2">
        {ingredients.map((ing, i) => {
          const scaled = Math.round(ing.amount * scale * 10) / 10;
          return (
            <li key={i} className="flex justify-between items-center py-2 border-b border-orange-brand/10 last:border-0">
              <T>
                <span className="text-cream/80">{ing.name}</span>
              </T>
              <span className="text-orange-brand font-mono text-sm">
                <Num>{scaled}</Num> {ing.unit}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
