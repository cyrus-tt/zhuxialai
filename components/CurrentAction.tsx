"use client";

import type { SubsidyPeriod } from "@/lib/subsidy";
import { formatDateShort, getDaysUntil, formatMoney } from "@/lib/subsidy";

interface CurrentActionProps {
  currentPeriod: SubsidyPeriod | null;
  nextPeriod: SubsidyPeriod | null;
}

export default function CurrentAction({
  currentPeriod,
  nextPeriod,
}: CurrentActionProps) {
  const period = currentPeriod || nextPeriod;
  if (!period) {
    return (
      <div className="rounded-2xl border border-success/20 bg-success-light/30 p-6 text-center">
        <p className="text-3xl mb-2">🎉</p>
        <p className="font-semibold">恭喜！你已经领完了所有补贴</p>
      </div>
    );
  }

  const isCurrent = !!currentPeriod;
  const daysUntil = isCurrent
    ? getDaysUntil(period.applicationWindow.end)
    : getDaysUntil(period.applicationWindow.start);

  const actionType = period.isFirst
    ? "资格申请 + 批次申请"
    : "接续申请 + 批次申请";

  return (
    <div
      className={`rounded-3xl border-2 p-6 ${
        isCurrent
          ? "border-warning bg-warning-light/30 shadow-lg shadow-warning/10"
          : "border-primary/20 bg-primary-light/20"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{isCurrent ? "🔔" : "⏳"}</span>
          <h3 className="text-lg font-bold">
            {isCurrent ? "现在该去申请了！" : "下一次申请"}
          </h3>
        </div>
        <span
          className={`rounded-xl px-3 py-1 text-sm font-bold ${
            isCurrent
              ? "bg-warning/20 text-warning"
              : "bg-primary/10 text-primary"
          }`}
        >
          第 {period.index + 1} 次
        </span>
      </div>

      {/* Countdown */}
      <div className="mb-4 text-center">
        <p className="text-sm text-text-light">
          {isCurrent ? "距离申请截止还有" : "距离窗口开启还有"}
        </p>
        <p
          className={`text-4xl font-bold ${
            isCurrent && daysUntil <= 14 ? "text-warning" : "text-primary"
          }`}
        >
          {daysUntil > 0 ? `${daysUntil} 天` : "今天！"}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-2 rounded-2xl bg-bg-card/60 p-4">
        <div className="flex justify-between text-sm">
          <span className="text-text-light">本次金额</span>
          <span className="font-semibold">¥{formatMoney(period.amount)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-light">需要操作</span>
          <span className="font-semibold">{actionType}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-light">申请窗口</span>
          <span className="font-semibold">
            {formatDateShort(period.applicationWindow.start)} —{" "}
            {formatDateShort(period.applicationWindow.end)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-light">建议截止</span>
          <span className="font-semibold text-warning">
            {formatDateShort(period.applicationWindow.bestEnd)}
          </span>
        </div>
      </div>

      {/* CTA */}
      {isCurrent && (
        <a
          href="https://ixm.xm.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-warning to-[#FF9800] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-warning/20 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-100"
        >
          去 i厦门 申请
          <span>→</span>
        </a>
      )}
    </div>
  );
}
