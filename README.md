# Recipe Blog

A multilingual recipe blog built with General Translation and Next.js. Browse recipes from cuisines around the world, plan weekly meals, and explore kitchen tips — all fully internationalized.

**[Live Demo](https://recipe-blog.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a realistic recipe blog with multiple pages: a homepage with featured recipes, cuisine category filtering, a drag-and-drop meal planner with auto-generated shopping lists, and a kitchen tips section. All user-facing content is fully translated using GT's i18n primitives.

## GT Features Used

- `<T>` — JSX translation
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering by locale (difficulty, diet, tip categories)
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/recipe-blog.git
cd recipe-blog
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
