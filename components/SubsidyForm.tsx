"use client";

import { DISTRICTS, type DistrictId } from "@/lib/constants";

interface SubsidyFormProps {
  startDate: string;
  district: DistrictId;
  onStartDateChange: (v: string) => void;
  onDistrictChange: (v: DistrictId) => void;
}

export default function SubsidyForm({
  startDate,
  district,
  onStartDateChange,
  onDistrictChange,
}: SubsidyFormProps) {
  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="rounded-3xl border border-border bg-bg-card p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 text-center text-xl font-semibold">
          🐱 填写你的信息
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
        </div>

        {startDate && (
          <p className="mt-4 text-center text-xs text-text-lighter">
            🐾 在下方时间线中勾选你已经领过的批次
          </p>
        )}
      </div>
    </div>
  );
}
