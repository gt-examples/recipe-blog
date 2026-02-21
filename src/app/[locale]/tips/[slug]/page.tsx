import { T, DateTime, Branch } from "gt-next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tips, getTipBySlug } from "@/data/tips";

export function generateStaticParams() {
  return tips.map((t) => ({ slug: t.slug }));
}

export default async function TipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tip = getTipBySlug(slug);
  if (!tip) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6 text-sm text-dark/50">
        <T>
          <Link href="/" className="hover:text-orange-brand">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tips" className="hover:text-orange-brand">Kitchen Tips</Link>
          <span className="mx-2">/</span>
          <span className="text-dark">{tip.title}</span>
        </T>
      </div>

      <div className="flex items-center gap-3 mb-4">
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
        <h1 className="text-3xl font-bold text-dark mb-3">{tip.title}</h1>
        <p className="text-dark/60 text-lg mb-8">{tip.description}</p>
      </T>

      <div className="space-y-6">
        {tip.content.map((paragraph, i) => (
          <T key={i}>
            <p className="text-dark/80 leading-relaxed">{paragraph}</p>
          </T>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-orange-brand/20">
        <T>
          <h2 className="text-lg font-semibold text-dark mb-4">More Tips</h2>
        </T>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips
            .filter((t) => t.slug !== tip.slug)
            .slice(0, 2)
            .map((t) => (
              <Link
                key={t.slug}
                href={`/tips/${t.slug}`}
                className="block border border-orange-brand/20 rounded-lg p-4 hover:border-orange-brand/50 transition-colors"
              >
                <T>
                  <h3 className="font-semibold text-dark mb-1">{t.title}</h3>
                  <p className="text-dark/50 text-sm line-clamp-2">{t.description}</p>
                </T>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
