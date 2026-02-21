"use client";

import { T } from "gt-next";

export default function PrintToggle() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print text-sm border border-orange-brand/30 text-orange-brand px-3 py-1.5 rounded hover:bg-orange-brand hover:text-cream transition-colors"
    >
      <T>Print Recipe</T>
    </button>
  );
}
