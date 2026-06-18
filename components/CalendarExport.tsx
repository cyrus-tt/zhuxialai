"use client";

import { useState } from "react";
import type { SubsidyPeriod } from "@/lib/subsidy";
import { generateCalendarEvents, downloadIcs } from "@/lib/calendar";

interface CalendarExportProps {
  periods: SubsidyPeriod[];
  districtName: string;
}

export default function CalendarExport({
  periods,
  districtName,
}: CalendarExportProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleExport = () => {
    const icsContent = generateCalendarEvents(periods, districtName);
    if (icsContent) {
      downloadIcs(icsContent, "住厦来-补贴提醒.ics");
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }
  };

  const futureCount = periods.filter(
    (p) => p.status === "future" || p.status === "current"
  ).length;

  if (futureCount === 0) return null;

  return (
    <button
      onClick={handleExport}
      className={`flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold transition-all ${
        downloaded
          ? "bg-success-light text-success"
          : "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20 hover:scale-[1.02] hover:shadow-xl active:scale-100"
      }`}
    >
      {downloaded ? (
        <>✅ 已下载！导入手机日历即可</>
      ) : (
        <>
          📅 添加到日历（{futureCount * 2} 个提醒）
        </>
      )}
    </button>
  );
}
