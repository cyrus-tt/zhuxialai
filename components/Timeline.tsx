"use client";

import type { SubsidyPeriod } from "@/lib/subsidy";
import { formatDateShort, formatMoney } from "@/lib/subsidy";

interface TimelineProps {
  periods: SubsidyPeriod[];
}

const statusConfig = {
  claimed: {
    dot: "bg-success",
    ring: "ring-success-light",
    bg: "bg-success-light/30",
    border: "border-success/20",
    label: "已领取",
    emoji: "✅",
  },
  missed: {
    dot: "bg-missed",
    ring: "ring-missed-light",
    bg: "bg-missed-light/30",
    border: "border-missed/20",
    label: "已错过",
    emoji: "😢",
  },
  current: {
    dot: "bg-warning",
    ring: "ring-warning-light",
    bg: "bg-warning-light/40",
    border: "border-warning/30",
    label: "当前窗口",
    emoji: "🔔",
  },
  future: {
    dot: "bg-primary",
    ring: "ring-primary-light",
    bg: "bg-primary-light/30",
    border: "border-primary/15",
    label: "待申请",
    emoji: "📅",
  },
};

export default function Timeline({ periods }: TimelineProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">📊 补贴时间线</h3>
      <div className="space-y-0">
        {periods.map((period, i) => {
          const config = statusConfig[period.status];
          return (
            <div key={i} className="flex gap-3">
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`h-4 w-4 shrink-0 rounded-full ${config.dot} ring-4 ${config.ring} ${
                    period.status === "current" ? "animate-pulse-soft" : ""
                  }`}
                />
                {i < periods.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`mb-3 flex-1 rounded-2xl border ${config.border} ${config.bg} p-4 transition-all ${
                  period.status === "current"
                    ? "shadow-md shadow-warning/10"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{config.emoji}</span>
                      <span className="text-sm font-semibold">
                        第 {period.index + 1} 次
                      </span>
                      <span
                        className={`rounded-lg px-2 py-0.5 text-xs font-medium ${
                          period.status === "current"
                            ? "bg-warning/20 text-warning"
                            : period.status === "claimed"
                              ? "bg-success/15 text-success"
                              : period.status === "missed"
                                ? "bg-missed/20 text-text-lighter"
                                : "bg-primary/10 text-primary"
                        }`}
                      >
                        {config.label}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-text-light">
                      申请窗口:{" "}
                      {formatDateShort(period.applicationWindow.start)} —{" "}
                      {formatDateShort(period.applicationWindow.end)}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-text">
                      ¥{formatMoney(period.amount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
