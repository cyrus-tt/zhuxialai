"use client";

import { DISTRICTS, type DistrictId, getHalfYearAmount, MAX_PERIODS } from "@/lib/constants";

interface SubsidyFormProps {
  startDate: string;
  district: DistrictId;
  claimed: number;
  onStartDateChange: (v: string) => void;
  onDistrictChange: (v: DistrictId) => void;
  onClaimedChange: (v: number) => void;
}

export default function SubsidyForm({
  startDate,
  district,
  claimed,
  onStartDateChange,
  onDistrictChange,
  onClaimedChange,
}: SubsidyFormProps) {
  const halfAmount = getHalfYearAmount(district);
  const remaining = (MAX_PERIODS - claimed) * halfAmount;

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="rounded-3xl border border-border bg-bg-card p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 text-center text-xl font-semibold">
          ✨ 填写你的信息
        </h2>

        <div className="space-y-5">
          {/* Start date */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-light">
              首次在厦就业日期
            </label>
            <p className="mb-2 text-xs text-text-lighter">
              签劳动合同 / 办营业执照的日期
            </p>
            <input
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              min="2021-01-01"
              max={new Date().toISOString().split("T")[0]}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
            />
          </div>

          {/* District */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-light">
              工作所在区
            </label>
            <div className="grid grid-cols-3 gap-2">
              {DISTRICTS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => onDistrictChange(d.id)}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                    district === d.id
                      ? "border-primary bg-primary-light text-primary-dark shadow-sm"
                      : "border-border bg-bg text-text-light hover:border-primary-light hover:bg-primary-light/30"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Claimed count */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-text-light">
              已领取次数
            </label>
            <p className="mb-2 text-xs text-text-lighter">
              每领一次 = 半年的补贴（¥{halfAmount.toLocaleString()}）
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onClaimedChange(Math.max(0, claimed - 1))}
                disabled={claimed <= 0}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-lg font-bold text-text-light transition-colors hover:bg-primary-light disabled:opacity-30"
              >
                −
              </button>
              <div className="flex-1 text-center">
                <span className="text-3xl font-bold text-primary">{claimed}</span>
                <span className="ml-1 text-sm text-text-lighter">/ {MAX_PERIODS} 次</span>
              </div>
              <button
                type="button"
                onClick={() => onClaimedChange(Math.min(MAX_PERIODS, claimed + 1))}
                disabled={claimed >= MAX_PERIODS}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-lg font-bold text-text-light transition-colors hover:bg-primary-light disabled:opacity-30"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Preview */}
        {startDate && (
          <div className="mt-6 rounded-2xl bg-accent-light/50 p-4 text-center">
            <p className="text-sm text-text-light">你最多还能领</p>
            <p className="text-2xl font-bold text-primary">
              ¥{remaining.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
