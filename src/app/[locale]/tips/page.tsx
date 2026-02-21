import { T, DateTime, Branch } from "gt-next";
import Link from "next/link";
import { tips } from "@/data/tips";

export default function TipsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="text-3xl font-bold text-dark mb-2">Kitchen Tips</h1>
        <p className="text-dark/60 mb-8">
          Improve your cooking with practical advice on techniques, equipment, and ingredients.
          Whether you are a beginner or an experienced cook, there is always something new to learn.
        </p>
      </T>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <Link
            key={tip.slug}
            href={`/tips/${tip.slug}`}
            className="block border border-orange-brand/20 rounded-lg p-6 hover:border-orange-brand/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <T>
                <Branch
                  branch={tip.category}
                  technique={<span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">Technique</span>}
                  equipment={<span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Equipment</span>}
                  ingredient={<span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">Ingredient</span>}
                />
              </T>
              <span className="text-dark/40 text-xs">
                <DateTime>{new Date(tip.publishedAt)}</DateTime>
              </span>
            </div>
            <T>
              <h2 className="text-lg font-semibold text-dark group-hover:text-orange-brand transition-colors mb-2">
                {tip.title}
              </h2>
              <p className="text-dark/60 text-sm">{tip.description}</p>
            </T>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-dark text-cream rounded-lg">
        <T>
          <h2 className="text-xl font-bold mb-3">Want to Learn More?</h2>
          <p className="text-cream/70 mb-4">
            Check out these excellent cooking resources for in-depth techniques and recipes:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.seriouseats.com/technique" className="text-orange-brand hover:underline" target="_blank" rel="noopener noreferrer">
                Serious Eats — Technique Guides
              </a>
            </li>
            <li>
              <a href="https://www.bbcgoodfood.com/howto" className="text-orange-brand hover:underline" target="_blank" rel="noopener noreferrer">
                BBC Good Food — How-To Guides
              </a>
            </li>
            <li>
              <a href="https://www.thekitchn.com/skills" className="text-orange-brand hover:underline" target="_blank" rel="noopener noreferrer">
                The Kitchn — Cooking Skills
              </a>
            </li>
          </ul>
        </T>
      </div>
    </div>
  );
}
