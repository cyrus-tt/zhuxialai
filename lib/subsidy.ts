import {
  type DistrictId,
  getHalfYearAmount,
  MAX_PERIODS,
  QUARTER_WINDOWS,
} from "./constants";

export type PeriodStatus = "claimed" | "missed" | "current" | "future";

export interface SubsidyPeriod {
  index: number;
  halfYearStart: Date;
  halfYearEnd: Date;
  applicationWindow: {
    quarter: number;
    start: Date;
    end: Date;
    bestEnd: Date;
  };
  amount: number;
  status: PeriodStatus;
  isFirst: boolean;
}

export interface SubsidyTimeline {
  periods: SubsidyPeriod[];
  totalPossible: number;
  totalClaimed: number;
  totalMissed: number;
  totalRemaining: number;
  guaranteeEnd: Date;
  currentPeriod: SubsidyPeriod | null;
  nextPeriod: SubsidyPeriod | null;
}

function getQuarterStart(date: Date): Date {
  const month = date.getMonth();
  const quarterStartMonth = Math.floor(month / 3) * 3;
  return new Date(date.getFullYear(), quarterStartMonth, 1);
}

function getNextQuarterStart(date: Date): Date {
  const qs = getQuarterStart(date);
  return new Date(qs.getFullYear(), qs.getMonth() + 3, 1);
}

function getQuarterNumber(date: Date): number {
  return Math.floor(date.getMonth() / 3) + 1;
}

function getApplicationWindow(year: number, quarter: number) {
  const w = QUARTER_WINDOWS[quarter - 1];
  return {
    quarter,
    start: new Date(year, w.start.month, w.start.day),
    end: new Date(year, w.end.month, w.end.day),
    bestEnd: new Date(year, w.bestEnd.month, w.bestEnd.day),
  };
}

export function calculateTimeline(
  startDate: Date,
  districtId: DistrictId,
  claimedCount: number
): SubsidyTimeline {
  const halfYearAmount = getHalfYearAmount(districtId);
  const now = new Date();

  // The guarantee period starts from the first quarter after employment.
  // First application can happen in the quarter of or after the start date.
  // We pick the earliest possible quarter the user could have applied in.
  const firstPossibleQuarterStart = startDate.getDate() <= 15 &&
    QUARTER_WINDOWS.some(
      (w) =>
        w.start.month === Math.floor(startDate.getMonth() / 3) * 3 &&
        startDate.getMonth() <= w.end.month
    )
    ? getQuarterStart(startDate)
    : getNextQuarterStart(startDate);

  // Generate 10 half-year periods
  // Each period covers 6 months; the application window is the quarter
  // that covers the start of that half-year period.
  const periods: SubsidyPeriod[] = [];

  for (let i = 0; i < MAX_PERIODS; i++) {
    const halfYearStart = new Date(
      firstPossibleQuarterStart.getFullYear(),
      firstPossibleQuarterStart.getMonth() + i * 6,
      1
    );
    const halfYearEnd = new Date(
      halfYearStart.getFullYear(),
      halfYearStart.getMonth() + 6,
      0
    );

    // Application window: the quarter that contains the half-year start
    const appYear = halfYearStart.getFullYear();
    const appQuarter = getQuarterNumber(halfYearStart);
    const applicationWindow = getApplicationWindow(appYear, appQuarter);

    // Determine status
    let status: PeriodStatus;
    if (applicationWindow.end < now) {
      // Past period
      status = i < claimedCount ? "claimed" : "missed";
    } else if (applicationWindow.start <= now && now <= applicationWindow.end) {
      status = i < claimedCount ? "claimed" : "current";
    } else {
      status = "future";
    }

    periods.push({
      index: i,
      halfYearStart,
      halfYearEnd,
      applicationWindow,
      amount: halfYearAmount,
      status,
      isFirst: i === 0,
    });
  }

  const guaranteeEnd = new Date(
    firstPossibleQuarterStart.getFullYear(),
    firstPossibleQuarterStart.getMonth() + 60,
    0
  );

  const claimedPeriods = periods.filter((p) => p.status === "claimed");
  const missedPeriods = periods.filter((p) => p.status === "missed");
  const futurePeriods = periods.filter(
    (p) => p.status === "future" || p.status === "current"
  );

  const currentPeriod = periods.find((p) => p.status === "current") || null;
  const nextPeriod =
    periods.find(
      (p) => p.status === "future" && (!currentPeriod || p.index > currentPeriod.index)
    ) || null;

  return {
    periods,
    totalPossible: MAX_PERIODS * halfYearAmount,
    totalClaimed: claimedPeriods.length * halfYearAmount,
    totalMissed: missedPeriods.length * halfYearAmount,
    totalRemaining: futurePeriods.length * halfYearAmount,
    guaranteeEnd,
    currentPeriod,
    nextPeriod,
  };
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
}

export function formatDateShort(date: Date): string {
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

export function getDaysUntil(target: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const t = new Date(target);
  t.setHours(0, 0, 0, 0);
  return Math.ceil((t.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function formatMoney(amount: number): string {
  return amount.toLocaleString("zh-CN");
}
