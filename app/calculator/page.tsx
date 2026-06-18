"use client";

import { useState, useMemo, useCallback, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import SubsidyForm from "@/components/SubsidyForm";
import SummaryCard from "@/components/SummaryCard";
import Timeline from "@/components/Timeline";
import CurrentAction from "@/components/CurrentAction";
import CalendarExport from "@/components/CalendarExport";
import ShareButton from "@/components/ShareButton";
import Footer from "@/components/Footer";
import { type DistrictId, getDistrict } from "@/lib/constants";
import { calculateTimeline } from "@/lib/subsidy";

function parseClaimedParam(param: string | null): Set<number> {
  if (!param) return new Set();
  return new Set(
    param
      .split(",")
      .map(Number)
      .filter((n) => !isNaN(n) && n >= 0 && n < 10)
  );
}

function serializeClaimedSet(set: Set<number>): string {
  return Array.from(set).sort((a, b) => a - b).join(",");
}

function CalculatorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [startDate, setStartDate] = useState(
    searchParams.get("d") || ""
  );
  const [district, setDistrict] = useState<DistrictId>(
    (searchParams.get("district") as DistrictId) || "siming"
  );
  const [claimedIndices, setClaimedIndices] = useState<Set<number>>(
    parseClaimedParam(searchParams.get("claimed"))
  );

  useEffect(() => {
    if (!startDate) return;
    const params = new URLSearchParams();
    params.set("d", startDate);
    params.set("district", district);
    if (claimedIndices.size > 0) {
      params.set("claimed", serializeClaimedSet(claimedIndices));
    }
    router.replace(`/calculator?${params.toString()}`, { scroll: false });
  }, [startDate, district, claimedIndices, router]);

  const handleToggleClaimed = useCallback((index: number) => {
    setClaimedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const timeline = useMemo(() => {
    if (!startDate) return null;
    const date = new Date(startDate);
    if (isNaN(date.getTime())) return null;
    return calculateTimeline(date, district, claimedIndices);
  }, [startDate, district, claimedIndices]);

  const districtInfo = getDistrict(district);

  const activePeriod = timeline?.currentPeriod || timeline?.nextPeriod || null;

  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="text-sm font-medium text-text-light hover:text-primary"
          >
            ← 首页
          </Link>
          <h1 className="text-base font-semibold">🐱 补贴喵</h1>
          <Link
            href="/guide"
            className="text-sm font-medium text-primary hover:underline"
          >
            指南
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        <div className="mx-auto max-w-lg space-y-6">
          {/* Form */}
          <SubsidyForm
            startDate={startDate}
            district={district}
            onStartDateChange={setStartDate}
            onDistrictChange={setDistrict}
          />

          {/* Results */}
          {timeline && (
            <div className="animate-fade-in-up space-y-6">
              {/* Summary */}
              <SummaryCard timeline={timeline} />

              {/* Current action */}
              <CurrentAction
                currentPeriod={timeline.currentPeriod}
                nextPeriod={timeline.nextPeriod}
              />

              {/* Actions */}
              <div className="space-y-3">
                <CalendarExport
                  nextPeriod={activePeriod}
                  districtName={districtInfo.name}
                />
                <ShareButton
                  startDate={startDate}
                  district={district}
                  claimedIndices={claimedIndices}
                />
              </div>

              {/* Full timeline */}
              <Timeline
                periods={timeline.periods}
                onToggleClaimed={handleToggleClaimed}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CalculatorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-full items-center justify-center">
          <p className="text-text-light">补贴喵正在计算... 🐱</p>
        </div>
      }
    >
      <CalculatorContent />
    </Suspense>
  );
}
