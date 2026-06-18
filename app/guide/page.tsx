import Link from "next/link";
import Footer from "@/components/Footer";
import CatIcon from "@/components/CatIcon";

const sopSteps = [
  {
    number: 1,
    title: "确认你符合条件",
    duration: "5 分钟",
    color: "bg-primary-light border-primary/20",
    dotColor: "bg-primary",
    content: [
      "全日制本科及以上学历",
      "35 周岁以下",
      "2021 年 1 月 1 日后首次在厦门签劳动合同",
      "在厦门有缴社保",
    ],
    tip: "不限应届、不限户籍、不限生源地，往届也行。",
  },
  {
    number: 2,
    title: "在 i厦门 做「资格申请」",
    duration: "10 分钟操作 + 等 15 个工作日",
    color: "bg-secondary-light/50 border-secondary/20",
    dotColor: "bg-secondary",
    content: [
      "打开 i厦门 APP 或微信小程序",
      "进入「住厦来」→「5折租房」→「资格申请」",
      "填写个人信息，提交",
      "等审核（10 个工作日）+ 公示（5 个工作日）",
    ],
    tip: "这一步只做一次，是一切的前提。签合同后一年内必须完成！资格申请全年 7×24 受理，不受季度限制。",
  },
  {
    number: 3,
    title: "租好房子",
    duration: "自行安排",
    color: "bg-accent-light/50 border-accent/20",
    dotColor: "bg-accent",
    content: [
      "找房子、签租房合同",
      "合同上要有你的名字（承租人或同住人）",
      "后面申请补贴时需要上传租赁材料",
    ],
    tip: null,
  },
  {
    number: 4,
    title: "在 i厦门 做「批次申请」领钱",
    duration: "10 分钟操作 + 等审核发放",
    color: "bg-warning-light/50 border-warning/20",
    dotColor: "bg-warning",
    content: [
      "确认资格申请已通过",
      "在当前季度窗口内（见下表）操作",
      "进入「5折租房」→「批次申请」→「货币补贴申请」",
      "上传租房合同信息 + 社保卡金融账户卡号",
      "审核通过后，下一季度首月打钱到社保卡",
    ],
    tip: "一次发半年的补贴！思明/湖里区一次到账 ¥4,000。",
  },
  {
    number: 5,
    title: "半年后做「接续申请」→ 再领",
    duration: "重复步骤 4",
    color: "bg-primary-light/50 border-primary/20",
    dotColor: "bg-primary",
    content: [
      "在当前补贴快到期时，做一次「接续申请」",
      "路径：「5折租房」→「接续申请」",
      "等审核通过后，再做一次「批次申请」领下一笔",
      "如此循环，每半年一次，最多领 5 年",
    ],
    tip: "错过了接续时间，中间空的月份照样算进 5 年！所以千万别忘——这就是补贴喵存在的意义。",
  },
];

const quarterTable = [
  { q: "Q1", window: "1月1日 — 3月15日", best: "2月15日前提交" },
  { q: "Q2", window: "4月1日 — 6月15日", best: "5月15日前提交" },
  { q: "Q3", window: "7月1日 — 9月15日", best: "8月15日前提交" },
  { q: "Q4", window: "10月1日 — 12月15日", best: "11月15日前提交" },
];

export default function GuidePage() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="text-sm font-medium text-text-light hover:text-primary"
          >
            ← 首页
          </Link>
          <h1 className="text-base font-semibold">🐱 申请全流程</h1>
          <Link
            href="/calculator"
            className="text-sm font-medium text-primary hover:underline"
          >
            计算器
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        <div className="mx-auto max-w-lg">
          {/* Header */}
          <div className="mb-8 text-center">
            <CatIcon size={64} className="mx-auto mb-3" />
            <h2 className="text-2xl font-bold">从零开始，领到补贴</h2>
            <p className="mt-2 text-sm text-text-light">
              就 5 步，全程线上，不用跑腿
            </p>
          </div>

          {/* SOP Steps */}
          <div className="space-y-0">
            {sopSteps.map((step, i) => (
              <div key={step.number} className="flex gap-0">
                {/* Timeline track */}
                <div className="flex flex-col items-center mr-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${step.dotColor}`}
                  >
                    {step.number}
                  </div>
                  {i < sopSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border min-h-[20px]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 mb-5 pb-1">
                  <div className={`rounded-2xl border p-5 ${step.color}`}>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-base font-bold">{step.title}</h3>
                      <span className="shrink-0 rounded-lg bg-bg-card/80 px-2 py-0.5 text-[11px] text-text-lighter">
                        {step.duration}
                      </span>
                    </div>

                    <ol className="space-y-1.5">
                      {step.content.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-text-light leading-relaxed"
                        >
                          <span className="shrink-0 text-text-lighter">
                            {step.number === 1 ? "✓" : `${j + 1}.`}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>

                    {step.tip && (
                      <div className="mt-3 rounded-xl bg-bg-card/60 p-3">
                        <p className="text-xs text-text-light leading-relaxed">
                          💡 {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Money flow */}
          <div className="my-6 rounded-2xl border border-success/20 bg-success-light/20 p-5 text-center">
            <p className="text-2xl mb-1">🐱💰</p>
            <p className="text-base font-bold text-success">
              钱打到你的社保卡（市民卡）金融账户
            </p>
            <p className="mt-1 text-xs text-text-light">
              和银行卡一样，ATM 取现或转账都行
            </p>
          </div>

          {/* Quarter window table */}
          <div className="rounded-2xl border border-border bg-bg-card p-5">
            <h3 className="mb-3 text-base font-bold">📅 每年 4 个申请窗口</h3>
            <p className="mb-3 text-xs text-text-lighter">
              接续申请和批次申请都在这些窗口内操作
            </p>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-light/30">
                    <th className="px-3 py-2 text-left font-semibold text-primary">
                      季度
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-primary">
                      申请时间
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-primary">
                      建议截止
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quarterTable.map((row) => (
                    <tr key={row.q} className="border-t border-border">
                      <td className="px-3 py-2 font-medium">{row.q}</td>
                      <td className="px-3 py-2 text-text-light">
                        {row.window}
                      </td>
                      <td className="px-3 py-2 text-warning font-medium">
                        {row.best}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick reference */}
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-light/20 p-5">
            <h3 className="mb-3 text-base font-semibold">🎯 速查</h3>
            <div className="space-y-2 text-sm text-text-light">
              <p>
                <strong>申请入口:</strong> i厦门 APP / 微信小程序 → 住厦来 → 5折租房
              </p>
              <p>
                <strong>咨询电话:</strong> 968383
              </p>
              <p>
                <strong>保障期限:</strong> 最长 5 年，从首次发放补贴当季起算
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 space-y-3">
            <Link
              href="/calculator"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-100"
            >
              🐱 去算我的补贴时间线
            </Link>
            <a
              href="https://github.com/cyrus-tt/zhuxialai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-border px-6 py-3.5 text-sm font-medium text-text-light transition-all hover:border-primary/30 hover:text-primary"
            >
              有问题？提交反馈 →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
