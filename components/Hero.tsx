import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-light opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-20 h-48 w-48 rounded-full bg-secondary-light opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-lg text-center">
        <div className="mb-6 text-6xl animate-fade-in-up">🏠</div>

        <h1 className="animate-fade-in-up stagger-1 mb-4 text-3xl font-bold leading-tight sm:text-4xl">
          你的五折租房补贴
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            一笔都别漏
          </span>
        </h1>

        <p className="animate-fade-in-up stagger-2 mb-3 text-lg text-text-light leading-relaxed">
          厦门毕业生每年最多领 <strong className="text-primary font-semibold">¥8,000</strong> 租房补贴
          <br />
          连续 5 年，总共最多 <strong className="text-primary font-semibold">¥40,000</strong>
        </p>

        <p className="animate-fade-in-up stagger-3 mb-8 text-base text-text-lighter">
          但很多人因为忘了申请、搞不清时间，白白错过好几千
        </p>

        <Link
          href="/calculator"
          className="animate-fade-in-up stagger-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-100"
        >
          算一算我的补贴日历
          <span className="text-xl">→</span>
        </Link>
      </div>
    </section>
  );
}
