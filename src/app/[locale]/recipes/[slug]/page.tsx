import { T, Num, DateTime, Branch } from "gt-next";
import { notFound } from "next/navigation";
import { getRecipeBySlug, recipes } from "@/data/recipes";
import ServingsAdjuster from "@/components/ServingsAdjuster";
import PrintToggle from "@/components/PrintToggle";
import Link from "next/link";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-dark/50 no-print">
        <T>
          <Link href="/" className="hover:text-orange-brand">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/categories" className="hover:text-orange-brand">Recipes</Link>
          <span className="mx-2">/</span>
          <span className="text-dark">{recipe.title}</span>
        </T>
      </div>

      {/* Header */}
      <div className="mb-8">
        <T>
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            {recipe.title}
          </h1>
          <p className="text-dark/60 text-lg mb-4">{recipe.description}</p>
        </T>

        <div className="flex flex-wrap items-center gap-4 text-sm text-dark/50 mb-4">
          <T>
            <span>Published: <DateTime>{new Date(recipe.publishedAt)}</DateTime></span>
          </T>
          <span className="text-orange-brand/30">|</span>
          <T>
            <Branch
              branch={recipe.difficulty}
              easy={<span className="text-green-600">Easy</span>}
              medium={<span className="text-yellow-600">Medium</span>}
              hard={<span className="text-red-600">Hard</span>}
            />
          </T>
          {recipe.diet && (
            <>
              <span className="text-orange-brand/30">|</span>
              <T>
                <Branch
                  branch={recipe.diet}
                  vegetarian={<span className="text-green-600">Vegetarian</span>}
                  vegan={<span className="text-green-600">Vegan</span>}
                  gluten-free={<span className="text-green-600">Gluten-free</span>}
                />
              </T>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-6 text-sm bg-cream border border-orange-brand/20 rounded-lg p-4">
          <T>
            <div>
              <span className="text-dark/50 block">Prep Time</span>
              <span className="font-semibold"><Num>{recipe.prepTimeMinutes}</Num> min</span>
            </div>
            <div>
              <span className="text-dark/50 block">Cook Time</span>
              <span className="font-semibold"><Num>{recipe.cookTimeMinutes}</Num> min</span>
            </div>
            <div>
              <span className="text-dark/50 block">Total Time</span>
              <span className="font-semibold"><Num>{recipe.prepTimeMinutes + recipe.cookTimeMinutes}</Num> min</span>
            </div>
          </T>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <PrintToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ingredients (sidebar) */}
        <div className="md:col-span-1">
          <div className="bg-dark text-cream rounded-lg p-5">
            <ServingsAdjuster
              defaultServings={recipe.servings}
              ingredients={recipe.ingredients}
            />
          </div>

          {/* Nutrition */}
          <div className="mt-6 bg-cream border border-orange-brand/20 rounded-lg p-5">
            <T>
              <h3 className="font-semibold text-dark mb-3">Nutrition per Serving</h3>
            </T>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <T><span className="text-dark/60">Calories</span></T>
                <span className="font-medium"><Num>{recipe.nutrition.calories}</Num></span>
              </div>
              <div className="flex justify-between">
                <T><span className="text-dark/60">Protein</span></T>
                <span className="font-medium"><Num>{recipe.nutrition.protein}</Num>g</span>
              </div>
              <div className="flex justify-between">
                <T><span className="text-dark/60">Carbs</span></T>
                <span className="font-medium"><Num>{recipe.nutrition.carbs}</Num>g</span>
              </div>
              <div className="flex justify-between">
                <T><span className="text-dark/60">Fat</span></T>
                <span className="font-medium"><Num>{recipe.nutrition.fat}</Num>g</span>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="md:col-span-2">
          <T>
            <h2 className="text-2xl font-bold text-dark mb-6">Instructions</h2>
          </T>
          <ol className="space-y-6">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-brand text-cream flex items-center justify-center text-sm font-bold">
                  <Num>{i + 1}</Num>
                </div>
                <T>
                  <p className="text-dark/80 pt-1">{step}</p>
                </T>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* More recipes */}
      <div className="mt-12 pt-8 border-t border-orange-brand/20">
        <T>
          <h2 className="text-xl font-bold text-dark mb-4">More Recipes</h2>
        </T>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes
            .filter((r) => r.slug !== recipe.slug)
            .slice(0, 3)
            .map((r) => (
              <Link
                key={r.slug}
                href={`/recipes/${r.slug}`}
                className="block border border-orange-brand/20 rounded-lg p-4 hover:border-orange-brand/50 transition-colors"
              >
                <T>
                  <h3 className="font-semibold text-dark mb-1">{r.title}</h3>
                  <p className="text-dark/50 text-sm line-clamp-2">{r.description}</p>
                </T>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
