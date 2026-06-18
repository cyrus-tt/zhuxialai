"use client";

import { useState } from "react";

interface GuideSectionProps {
  emoji: string;
  title: string;
  subtitle: string;
  steps: string[];
  tips?: string[];
  defaultOpen?: boolean;
}

export default function GuideSection({
  emoji,
  title,
  subtitle,
  steps,
  tips,
  defaultOpen = false,
}: GuideSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 p-5 text-left transition-colors hover:bg-primary-light/10"
      >
        <span className="text-2xl">{emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-text-light">{subtitle}</p>
        </div>
        <span
          className={`text-text-lighter transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-text-light">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {tips && tips.length > 0 && (
            <div className="mt-4 rounded-xl bg-warning-light/30 p-3">
              <p className="mb-1 text-xs font-semibold text-warning">
                💡 注意
              </p>
              {tips.map((tip, i) => (
                <p key={i} className="text-xs text-text-light leading-relaxed">
                  {tip}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
