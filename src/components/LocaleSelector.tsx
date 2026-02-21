"use client";

import { useLocale, useDefaultLocale } from "gt-next";
import { usePathname, useRouter } from "next/navigation";

const localeNames: Record<string, string> = {
  en: "English",
  es: "Espanol",
  fr: "Francais",
  ja: "Japanese",
  zh: "Chinese",
};

export default function LocaleSelector() {
  const locale = useLocale();
  const defaultLocale = useDefaultLocale();
  const pathname = usePathname();
  const router = useRouter();

  const locales = [defaultLocale, "es", "fr", "ja", "zh"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Remove current locale prefix from path
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0])) {
      segments.shift();
    }
    const newPath = newLocale === defaultLocale
      ? `/${segments.join("/")}`
      : `/${newLocale}/${segments.join("/")}`;
    router.push(newPath);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-dark border border-orange-brand/30 text-cream text-sm rounded px-2 py-1 focus:outline-none focus:border-orange-brand"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc] || loc}
        </option>
      ))}
    </select>
  );
}
