import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/60 border-t border-orange-brand/20 no-print">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <T>
          <div className="mb-6 p-4 border border-orange-brand/30 rounded-lg bg-orange-brand/5 text-cream/70 text-sm">
            This is an example application built with{" "}
            <a href="https://generaltranslation.com" className="text-orange-brand hover:underline" target="_blank" rel="noopener noreferrer">
              General Translation
            </a>{" "}
            to demonstrate internationalization. It is not a real service.
          </div>
        </T>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <T>
              <h3 className="text-cream font-semibold mb-3">Recipe Blog</h3>
              <p>
                Explore recipes from cuisines around the world. Built to demonstrate
                multilingual web applications with gt-next.
              </p>
            </T>
          </div>
          <div>
            <T>
              <h3 className="text-cream font-semibold mb-3">Cooking Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.seriouseats.com" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    Serious Eats
                  </a>
                </li>
                <li>
                  <a href="https://www.bbcgoodfood.com" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    BBC Good Food
                  </a>
                </li>
                <li>
                  <a href="https://www.bonappetit.com" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    Bon Appetit
                  </a>
                </li>
                <li>
                  <a href="https://www.kingarthurbaking.com" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    King Arthur Baking
                  </a>
                </li>
              </ul>
            </T>
          </div>
          <div>
            <T>
              <h3 className="text-cream font-semibold mb-3">Built With</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://generaltranslation.com" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    General Translation
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com" className="hover:text-orange-brand transition-colors" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </T>
          </div>
        </div>

        <T>
          <div className="mt-8 pt-6 border-t border-orange-brand/10 text-xs text-cream/40 text-center">
            Recipe Blog — A General Translation example application
          </div>
        </T>
      </div>
    </footer>
  );
}
