import Link from "next/link";
import CatIcon, { CatPaw } from "./CatIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-light opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-20 h-48 w-48 rounded-full bg-secondary-light opacity-40 blur-3xl" />

      {/* Paw prints decoration */}
      <div className="pointer-events-none absolute top-10 left-6 opacity-[0.07] rotate-[-30deg]">
        <CatPaw size={40} />
      </div>
      <div className="pointer-events-none absolute top-28 right-10 opacity-[0.07] rotate-[20deg]">
        <CatPaw size={32} />
      </div>
      <div className="pointer-events-none absolute bottom-24 left-14 opacity-[0.07] rotate-[-15deg]">
        <CatPaw size={28} />
      </div>
      <div className="pointer-events-none absolute bottom-8 right-6 opacity-[0.07] rotate-[35deg]">
        <CatPaw size={36} />
      </div>

      <div className="relative mx-auto max-w-lg text-center">
        <div className="mb-2 animate-fade-in-up flex justify-center">
          <CatIcon size={100} />
        </div>

        <h1 className="animate-fade-in-up stagger-1 mb-4 text-3xl font-bold leading-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            补贴喵
          </span>
          <br />
          帮你记住每一笔
        </h1>

        <p className="animate-fade-in-up stagger-2 mb-3 text-lg text-text-light leading-relaxed">
          喵～厦门毕业生每年最多领 <strong className="text-primary font-semibold">¥8,000</strong> 租房补贴
          <br />
          连续 5 年，总共最多 <strong className="text-primary font-semibold">¥40,000</strong>
        </p>

        <p className="animate-fade-in-up stagger-3 mb-8 text-base text-text-lighter">
          但很多人因为忘了申请、搞不清时间，白白错过好几千
        </p>

        <div className="animate-fade-in-up stagger-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-100"
          >
            让补贴喵算算
            <CatPaw size={20} />
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary/20 bg-bg-card px-6 py-3.5 text-base font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary-light/20"
          >
            申请全流程
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
