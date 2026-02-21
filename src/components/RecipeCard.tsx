import Link from "next/link";
import { T, Num, Branch } from "gt-next";
import type { Recipe } from "@/data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="block bg-dark border border-orange-brand/20 rounded-lg p-5 hover:border-orange-brand/50 transition-colors group"
    >
      <T>
        <h3 className="text-cream font-semibold text-lg mb-2 group-hover:text-orange-brand transition-colors">
          {recipe.title}
        </h3>
        <p className="text-cream/60 text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>
      </T>
      <div className="flex items-center gap-3 text-xs text-cream/50">
        <span>
          <Num>{recipe.cookTimeMinutes}</Num>
          <T> min</T>
        </span>
        <span className="text-orange-brand/30">|</span>
        <T>
          <Branch
            branch={recipe.difficulty}
            easy={<span className="text-green-400">Easy</span>}
            medium={<span className="text-yellow-400">Medium</span>}
            hard={<span className="text-red-400">Hard</span>}
          />
        </T>
        {recipe.diet && (
          <>
            <span className="text-orange-brand/30">|</span>
            <T>
              <Branch
                branch={recipe.diet}
                vegetarian={<span className="text-green-300">Vegetarian</span>}
                vegan={<span className="text-green-300">Vegan</span>}
                gluten-free={<span className="text-green-300">Gluten-free</span>}
              />
            </T>
          </>
        )}
      </div>
    </Link>
  );
}
