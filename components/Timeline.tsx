"use client";

import type { SubsidyPeriod } from "@/lib/subsidy";
import {
  formatDateShort,
  formatMoney,
  getYearLabel,
  getHalfYearLabel,
  isPastPeriod,
} from "@/lib/subsidy";

interface TimelineProps {
  periods: SubsidyPeriod[];
  onToggleClaimed: (index: number) => void;
}

const statusStyles = {
  claimed: {
    node: "bg-success border-success shadow-sm shadow-success/20",
    card: "bg-success-light/30 border-success/20",
    badge: "bg-success/15 text-success",
    line: "bg-success/40",
    label: "已领取 ✅",
  },
  missed: {
    node: "bg-missed border-missed/60",
    card: "bg-missed-light/20 border-missed/15",
    badge: "bg-missed/15 text-text-lighter",
    line: "bg-missed/30 border-dashed",
    label: "未领取",
  },
  current: {
    node: "bg-warning border-warning shadow-md shadow-warning/30 animate-pulse-soft",
    card: "bg-warning-light/40 border-warning/30 shadow-md shadow-warning/10",
    badge: "bg-warning/20 text-warning",
    line: "bg-warning/40",
    label: "当前窗口 🔔",
  },
  future: {
    node: "bg-primary-light border-primary/30",
    card: "bg-primary-light/15 border-primary/10",
    badge: "bg-primary/10 text-primary",
    line: "bg-primary/20",
    label: "待申请",
  },
};

export default function Timeline({ periods, onToggleClaimed }: TimelineProps) {
  const yearFirstIndex = new Map<string, number>();
  periods.forEach((p, i) => {
    const y = getYearLabel(p.halfYearStart);
    if (!yearFirstIndex.has(y)) yearFirstIndex.set(y, i);
  });

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">🐱 补贴时间线</h3>
      <p className="text-xs text-text-lighter mb-2">
        点击过去的节点可以标记「已领取」或取消
      </p>

      <div className="relative">
        {periods.map((period, i) => {
          const styles = statusStyles[period.status];
          const year = getYearLabel(period.halfYearStart);
          const showYear = yearFirstIndex.get(year) === i;
          const canToggle = isPastPeriod(period);
          const halfLabel = getHalfYearLabel(period.halfYearStart);

          return (
            <div key={i} className="flex gap-0">
              {/* Year label column */}
              <div className="w-16 shrink-0 pt-1 text-right pr-3">
                {showYear && (
                  <span className="text-xs font-bold text-primary">
                    {year}
                  </span>
                )}
              </div>

              {/* Timeline track */}
              <div className="flex flex-col items-center">
                {/* Node */}
                <button
                  type="button"
                  onClick={() => canToggle && onToggleClaimed(period.index)}
                  disabled={!canToggle}
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${styles.node} ${
                    canToggle
                      ? "cursor-pointer hover:scale-110 active:scale-95"
                      : ""
                  }`}
                >
                  {period.status === "claimed" ? (
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : period.status === "current" ? (
                    <span className="text-white text-[10px]">!</span>
                  ) : (
                    <span className={`text-[10px] ${period.status === "missed" ? "text-text-lighter" : "text-primary"}`}>
                      {period.index + 1}
                    </span>
                  )}
                </button>

                {/* Connector line */}
                {i < periods.length - 1 && (
                  <div className={`w-0.5 h-full min-h-[12px] ${styles.line}`} />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 ml-3 mb-3">
                <div
                  className={`rounded-2xl border p-3.5 transition-all ${styles.card} ${
                    canToggle ? "cursor-pointer hover:shadow-sm" : ""
                  }`}
                  onClick={() => canToggle && onToggleClaimed(period.index)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold">
                          第 {period.index + 1} 次
                        </span>
                        <span className="text-xs text-text-lighter">
                          {halfLabel}
                        </span>
                        <span
                          className={`rounded-lg px-2 py-0.5 text-[11px] font-medium ${styles.badge}`}
                        >
                          {styles.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-text-light">
                        {formatDateShort(period.applicationWindow.start)} —{" "}
                        {formatDateShort(period.applicationWindow.end)}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className={`text-base font-bold ${
                        period.status === "claimed" ? "text-success" :
                        period.status === "missed" ? "text-text-lighter line-through" :
                        "text-text"
                      }`}>
                        ¥{formatMoney(period.amount)}
                      </p>
                    </div>
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
