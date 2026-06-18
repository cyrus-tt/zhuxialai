"use client";

import type { SubsidyTimeline } from "@/lib/subsidy";
import { formatMoney } from "@/lib/subsidy";

interface SummaryCardProps {
  timeline: SubsidyTimeline;
}

export default function SummaryCard({ timeline }: SummaryCardProps) {
  const items = [
    {
      label: "总可领",
      value: timeline.totalPossible,
      color: "text-text",
      bg: "bg-primary-light/40",
    },
    {
      label: "已领取",
      value: timeline.totalClaimed,
      color: "text-success",
      bg: "bg-success-light/40",
    },
    {
      label: "已错过",
      value: timeline.totalMissed,
      color: "text-missed",
      bg: "bg-missed-light/40",
    },
    {
      label: "还能领",
      value: timeline.totalRemaining,
      color: "text-primary",
      bg: "bg-primary-light/40",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl ${item.bg} p-4 text-center`}
        >
          <p className="mb-1 text-xs font-medium text-text-light">
            {item.label}
          </p>
          <p className={`text-xl font-bold ${item.color}`}>
            ¥{formatMoney(item.value)}
          </p>
        </div>
      ))}
    </div>
  );
}
