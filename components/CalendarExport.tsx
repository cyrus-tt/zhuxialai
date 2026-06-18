"use client";

import { useState } from "react";
import type { SubsidyPeriod } from "@/lib/subsidy";
import { generateNextReminder, downloadIcs } from "@/lib/calendar";

interface CalendarExportProps {
  nextPeriod: SubsidyPeriod | null;
  districtName: string;
}

export default function CalendarExport({
  nextPeriod,
  districtName,
}: CalendarExportProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!nextPeriod) return null;

  const handleExport = () => {
    const icsContent = generateNextReminder(nextPeriod, districtName);
    if (icsContent) {
      downloadIcs(
        icsContent,
        `补贴喵-第${nextPeriod.index + 1}次提醒.ics`
      );
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }
  };

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
        <>📅 添加第 {nextPeriod.index + 1} 次申请提醒到日历</>
      )}
    </button>
  );
}
