import { T, Num, DateTime } from "gt-next";
import Link from "next/link";
import { recipes, getFeaturedRecipes, cuisines } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import RecipeSearch from "@/components/RecipeSearch";

const cuisineLabels: Record<string, string> = {
  italian: "Italian",
  japanese: "Japanese",
  mexican: "Mexican",
  indian: "Indian",
  french: "French",
};

export default function HomePage() {
  const featured = getFeaturedRecipes();
  const hero = featured[0];
  const latest = recipes.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-dark text-cream">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <T>
            <p className="text-orange-brand text-sm font-medium uppercase tracking-wider mb-3">
              Featured Recipe
            </p>
          </T>
          <Link href={`/recipes/${hero.slug}`} className="group">
            <T>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-orange-brand transition-colors">
                {hero.title}
              </h1>
              <p className="text-cream/70 text-lg md:text-xl max-w-2xl mb-6">
                {hero.description}
              </p>
            </T>
            <div className="flex items-center gap-4 text-sm text-cream/50">
              <span>
                <Num>{hero.cookTimeMinutes}</Num>
                <T> min cook time</T>
              </span>
              <span className="text-orange-brand/30">|</span>
              <span>
                <Num>{hero.servings}</Num>
                <T> servings</T>
              </span>
              <span className="text-orange-brand/30">|</span>
              <span>
                <DateTime>{new Date(hero.publishedAt)}</DateTime>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <RecipeSearch />
      </section>

      {/* Latest Recipes */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <T>
          <h2 className="text-2xl font-bold text-dark mb-6">Latest Recipes</h2>
        </T>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {latest.map((r) => (
            <RecipeCard key={r.slug} recipe={r} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-dark text-cream">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <T>
            <h2 className="text-2xl font-bold mb-6">Browse by Cuisine</h2>
          </T>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cuisines.map((c) => (
              <Link
                key={c}
                href={`/categories?cuisine=${c}`}
                className="border border-orange-brand/30 rounded-lg p-4 text-center hover:border-orange-brand hover:bg-orange-brand/10 transition-colors"
              >
                <T>
                  <span className="text-cream font-medium">{cuisineLabels[c]}</span>
                </T>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
