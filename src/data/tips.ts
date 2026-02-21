export interface Tip {
  slug: string;
  title: string;
  description: string;
  category: "technique" | "equipment" | "ingredient";
  content: string[];
  publishedAt: string;
}

export const tips: Tip[] = [
  {
    slug: "knife-skills-basics",
    title: "Essential Knife Skills Every Home Cook Needs",
    description: "Master the fundamental cuts that will speed up your prep work and improve the consistency of your cooking.",
    category: "technique",
    publishedAt: "2025-12-05",
    content: [
      "The three most important cuts to master are the julienne (matchstick), brunoise (fine dice), and chiffonade (ribbon cut for herbs and leafy greens). These form the foundation of nearly all recipe preparations.",
      "Always use a sharp knife. A dull knife requires more force and is more likely to slip. Invest in a quality honing steel and use it before every cooking session.",
      "The claw grip is essential for safety: curl your fingertips inward and use your knuckles as a guide for the blade. Your fingertips should never extend past your knuckles.",
      "Practice your rocking motion with a chef's knife. Keep the tip of the blade on the cutting board and rock the heel down through the food. This is faster and more controlled than chopping straight down.",
      "When cutting round vegetables like onions, cut them in half first to create a flat, stable surface. This prevents rolling and reduces the risk of injury.",
    ],
  },
  {
    slug: "cast-iron-care",
    title: "The Complete Guide to Cast Iron Care",
    description: "Learn how to season, clean, and maintain your cast iron cookware for a lifetime of exceptional cooking.",
    category: "equipment",
    publishedAt: "2025-12-12",
    content: [
      "Seasoning is the process of building up layers of polymerized oil on the surface of your cast iron. This creates a natural non-stick coating that improves with every use.",
      "To season a new pan: wash with soap and water (the only time you should use soap), dry completely, apply a very thin layer of flaxseed or vegetable oil to the entire surface, and bake upside down at 230C / 450F for one hour.",
      "After cooking, clean your cast iron while it is still warm. Use hot water and a stiff brush or chain mail scrubber. For stubborn residue, add coarse salt and scrub with a paper towel.",
      "Never soak cast iron in water or put it in the dishwasher. After washing, dry immediately over low heat on the stove, then apply a very thin coat of oil before storing.",
      "If your seasoning becomes damaged or patchy, strip it down with oven cleaner, scrub with steel wool, and re-season from scratch. This is a normal part of cast iron ownership.",
    ],
  },
  {
    slug: "understanding-heat",
    title: "Understanding Heat: When to Use High vs Low",
    description: "Temperature control is the difference between amateur and professional cooking. Learn when and why to adjust your heat.",
    category: "technique",
    publishedAt: "2026-01-02",
    content: [
      "High heat is for searing, stir-frying, and boiling. You want high heat when you need to create a Maillard reaction (browning) quickly without overcooking the interior. Always preheat your pan before adding food.",
      "Medium heat is the workhorse of cooking. Use it for sauteing, pan-frying, and making sauces. It provides enough energy to cook food through without burning the exterior.",
      "Low heat is for gentle cooking: braising, simmering, rendering fat, and caramelizing onions. Patience at low heat develops complex flavors that high heat cannot achieve.",
      "The biggest mistake home cooks make is using too high a heat for everything. Caramelized onions require 45 minutes on low heat. Trying to rush them on high heat produces burnt, bitter results.",
      "Learn to listen to your food. A gentle sizzle means the temperature is right for most cooking. Loud popping and splattering usually means the heat is too high or there is too much moisture.",
    ],
  },
  {
    slug: "choosing-cooking-oils",
    title: "Choosing the Right Cooking Oil",
    description: "Different oils have different smoke points, flavors, and best uses. Here is how to pick the right one for every situation.",
    category: "ingredient",
    publishedAt: "2026-01-08",
    content: [
      "Smoke point is the temperature at which an oil begins to break down and produce visible smoke. Cooking above an oil's smoke point creates off-flavors and harmful compounds.",
      "For high-heat cooking (searing, deep-frying, stir-frying), use oils with high smoke points: avocado oil (270C / 520F), refined peanut oil (230C / 450F), or light olive oil (240C / 465F).",
      "Extra virgin olive oil has a relatively low smoke point (190C / 375F) and is best used for low-to-medium heat cooking, dressings, and finishing dishes. Its flavor shines when it is not overheated.",
      "Butter burns easily on its own but clarified butter (ghee) has a much higher smoke point (250C / 485F) and adds rich flavor to high-heat cooking.",
      "Neutral oils like vegetable, canola, and grapeseed are good all-purpose choices when you do not want the oil to contribute flavor to the dish.",
    ],
  },
  {
    slug: "essential-kitchen-tools",
    title: "10 Essential Kitchen Tools Worth Investing In",
    description: "Skip the gadgets and invest in these fundamental tools that professional chefs consider indispensable.",
    category: "equipment",
    publishedAt: "2026-01-18",
    content: [
      "A quality chef's knife (20-25cm) is the single most important tool in any kitchen. Spend more on one excellent knife rather than buying a block set of mediocre ones.",
      "A heavy-bottomed stainless steel pan conducts heat evenly and allows you to build fond (browned bits) for pan sauces. It is the most versatile pan you can own.",
      "An instant-read thermometer removes all guesswork from cooking. It is essential for meat, bread, candy-making, and checking oil temperature for frying.",
      "A sturdy cutting board (end-grain wood or high-density plastic) protects both your knives and your countertops. Get the largest one that fits your workspace.",
      "A fine-mesh strainer serves triple duty: straining stocks and sauces, sifting flour, and draining blanched vegetables. It is far more useful than a colander alone.",
    ],
  },
];

export function getTipBySlug(slug: string): Tip | undefined {
  return tips.find((t) => t.slug === slug);
}
