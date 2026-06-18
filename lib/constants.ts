export const DISTRICTS = [
  { id: "siming", name: "思明区", yearlyAmount: 8000 },
  { id: "huli", name: "湖里区", yearlyAmount: 8000 },
  { id: "jimei", name: "集美区", yearlyAmount: 6000 },
  { id: "haicang", name: "海沧区", yearlyAmount: 6000 },
  { id: "tongan", name: "同安区", yearlyAmount: 5000 },
  { id: "xiangan", name: "翔安区", yearlyAmount: 5000 },
] as const;

export type DistrictId = (typeof DISTRICTS)[number]["id"];

export function getDistrict(id: DistrictId) {
  return DISTRICTS.find((d) => d.id === id)!;
}

export function getHalfYearAmount(districtId: DistrictId): number {
  return getDistrict(districtId).yearlyAmount / 2;
}

export const MAX_PERIODS = 10;
export const MAX_YEARS = 5;

export const QUARTER_WINDOWS = [
  { quarter: 1, start: { month: 0, day: 1 }, end: { month: 2, day: 15 }, bestEnd: { month: 1, day: 15 } },
  { quarter: 2, start: { month: 3, day: 1 }, end: { month: 5, day: 15 }, bestEnd: { month: 4, day: 15 } },
  { quarter: 3, start: { month: 6, day: 1 }, end: { month: 8, day: 15 }, bestEnd: { month: 7, day: 15 } },
  { quarter: 4, start: { month: 9, day: 1 }, end: { month: 11, day: 15 }, bestEnd: { month: 10, day: 15 } },
] as const;

export const IXIAMEN_URL = "https://ixm.xm.gov.cn";
