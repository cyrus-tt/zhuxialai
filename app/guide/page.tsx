import Link from "next/link";
import GuideSection from "@/components/GuideSection";
import Footer from "@/components/Footer";

export default function GuidePage() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
          <Link
            href="/calculator"
            className="text-sm font-medium text-text-light hover:text-primary"
          >
            ← 返回
          </Link>
          <h1 className="text-base font-semibold">📖 操作指南</h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        <div className="mx-auto max-w-lg space-y-4">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold">五折租房补贴怎么申请？</h2>
            <p className="mt-2 text-sm text-text-light">
              三步搞定，全程线上，不用跑腿
            </p>
          </div>

          <GuideSection
            emoji="📝"
            title="第一步: 资格申请"
            subtitle="首次申请时需要做，只做一次"
            defaultOpen={true}
            steps={[
              "打开「i厦门」微信小程序或 APP",
              "进入「住厦来」→「5折租房 & 免费一张床住宿」",
              "选择「大学生5折租房」→「资格申请」",
              "按提示填写个人信息并提交",
              "等待审核（10 个工作日内）+ 公示（5 个工作日）",
            ]}
            tips={[
              "首次在厦签劳动合同后 1 年内必须完成资格申请，否则永久失去资格！",
              "资格申请 7×24 小时受理，不受季度窗口限制。",
            ]}
          />

          <GuideSection
            emoji="🔄"
            title="第二步: 接续申请"
            subtitle="第 2 次及之后每次都要做，续上资格"
            steps={[
              "在当前补贴到期前的那个季度内操作",
              "打开「i厦门」→「住厦来」→「5折租房」",
              "选择「接续申请」",
              "系统会自动校验你的社保、就业等信息",
              "等待审核 + 公示通过",
            ]}
            tips={[
              "接续申请的受理时间是每个季度的前两个月（1-2月、4-5月、7-8月、10-11月）。",
              "建议在每季度 15 日前提交，给审核留够时间。",
              "如果错过了接续申请，中间空白的时间照样计入 5 年保障期限！",
            ]}
          />

          <GuideSection
            emoji="💰"
            title="第三步: 批次申请"
            subtitle="资格/接续通过后，申请领钱"
            steps={[
              "确认资格申请或接续申请已公示通过",
              "在「i厦门」→「5折租房」→「批次申请」",
              "选择「货币补贴申请」",
              "填写或确认租房合同信息，上传租赁材料",
              "填写社保卡金融账户卡号",
              "提交后等待审核，通过后下一季度首月发放到社保卡",
            ]}
            tips={[
              "每季度一个批次：Q1(1/1-3/15)、Q2(4/1-6/15)、Q3(7/1-9/15)、Q4(10/1-12/15)。",
              "一次发放半年补贴，打到社保卡（市民卡）金融账户。",
              "需要提前租好房子并有租房合同。",
            ]}
          />

          {/* Quick reference */}
          <div className="rounded-2xl border border-primary/20 bg-primary-light/20 p-5">
            <h3 className="mb-3 text-base font-semibold">🎯 速查</h3>
            <div className="space-y-2 text-sm text-text-light">
              <p>
                <strong>申请入口:</strong> i厦门 APP / 微信小程序 → 住厦来 → 5折租房
              </p>
              <p>
                <strong>咨询电话:</strong> 968383
              </p>
              <p>
                <strong>补贴发放:</strong> 审核通过后，下一季度首月打到社保卡
              </p>
              <p>
                <strong>保障期限:</strong> 最长 5 年，从首次发放补贴当季起算
              </p>
            </div>
          </div>

          {/* Back to calculator */}
          <Link
            href="/calculator"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-100"
          >
            ← 回去算我的补贴
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
