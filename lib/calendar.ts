import { createEvents, type EventAttributes } from "ics";
import type { SubsidyPeriod } from "./subsidy";
import { formatDateShort } from "./subsidy";

function toIcsDate(date: Date): [number, number, number] {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

export function generateNextReminder(
  period: SubsidyPeriod,
  districtName: string
): string {
  const { applicationWindow, amount, index, isFirst } = period;
  const actionType = isFirst ? "资格申请 + 批次申请" : "接续申请 + 批次申请";
  const nth = index + 1;

  const events: EventAttributes[] = [
    {
      title: `补贴喵提醒: 该申请五折租房补贴了！(第${nth}次)`,
      start: toIcsDate(applicationWindow.start),
      duration: { days: 1 },
      description: [
        `喵～第${nth}次补贴申请窗口已开启！`,
        ``,
        `本次金额: ¥${amount}（${districtName}）`,
        `本次操作: ${actionType}`,
        `申请截止: ${formatDateShort(applicationWindow.end)}`,
        `建议截止: ${formatDateShort(applicationWindow.bestEnd)}`,
        ``,
        `操作路径: i厦门APP → 住厦来 → 5折租房`,
        `咨询电话: 968383`,
        ``,
        `—— 补贴喵 cyrus-tt.github.io/zhuxialai`,
      ].join("\n"),
      alarms: [
        {
          action: "display",
          trigger: { before: true, days: 3 },
          description: "3天后开始申请五折租房补贴",
        },
        {
          action: "display",
          trigger: { before: true, minutes: 0 },
          description: "今天可以申请五折租房补贴了",
        },
      ],
      categories: ["补贴喵", "租房补贴"],
    },
    {
      title: `补贴喵提醒: 补贴申请即将截止！(第${nth}次)`,
      start: toIcsDate(applicationWindow.bestEnd),
      duration: { days: 1 },
      description: [
        `喵！第${nth}次补贴的建议申请截止日！`,
        ``,
        `超过今天，审核时间可能不够。`,
        `最终截止: ${formatDateShort(applicationWindow.end)}`,
        ``,
        `赶紧去 i厦门APP 完成申请！`,
        `操作: ${actionType}`,
        ``,
        `—— 补贴喵 cyrus-tt.github.io/zhuxialai`,
      ].join("\n"),
      alarms: [
        {
          action: "display",
          trigger: { before: true, minutes: 0 },
          description: "今天是补贴申请建议截止日",
        },
      ],
      categories: ["补贴喵", "租房补贴"],
    },
  ];

  const { value } = createEvents(events);
  return value || "";
}

export function downloadIcs(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
