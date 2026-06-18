import Link from "next/link";

function CatFace() {
  return (
    <div className="relative mx-auto mb-4 h-24 w-24 animate-fade-in-up">
      {/* Cat face */}
      <div className="relative h-20 w-20 mx-auto">
        {/* Ears */}
        <div className="absolute -top-3 left-1 h-8 w-8 rotate-[-20deg] rounded-tl-[80%] rounded-tr-[20%] rounded-br-0 rounded-bl-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="absolute -top-3 right-1 h-8 w-8 rotate-[20deg] rounded-tl-[20%] rounded-tr-[80%] rounded-br-0 rounded-bl-0 bg-gradient-to-bl from-primary to-primary-dark" />
        {/* Inner ears */}
        <div className="absolute -top-1 left-2.5 h-5 w-5 rotate-[-20deg] rounded-tl-[80%] rounded-tr-[20%] rounded-br-0 rounded-bl-0 bg-secondary-light" />
        <div className="absolute -top-1 right-2.5 h-5 w-5 rotate-[20deg] rounded-tl-[20%] rounded-tr-[80%] rounded-br-0 rounded-bl-0 bg-secondary-light" />
        {/* Head */}
        <div className="absolute top-2 left-0 right-0 h-18 w-20 rounded-[50%] bg-gradient-to-b from-primary-light to-white border-2 border-primary/20">
          {/* Eyes */}
          <div className="absolute top-6 left-4 h-2.5 w-2.5 rounded-full bg-text">
            <div className="absolute top-0.5 left-0.5 h-1 w-1 rounded-full bg-white" />
          </div>
          <div className="absolute top-6 right-4 h-2.5 w-2.5 rounded-full bg-text">
            <div className="absolute top-0.5 left-0.5 h-1 w-1 rounded-full bg-white" />
          </div>
          {/* Nose */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 h-1.5 w-2 rounded-full bg-secondary" />
          {/* Mouth */}
          <div className="absolute top-[46px] left-1/2 -translate-x-1/2 w-6 flex justify-center">
            <div className="h-2 w-2.5 border-b-2 border-r-2 border-text/30 rounded-br-full" />
            <div className="h-2 w-2.5 border-b-2 border-l-2 border-text/30 rounded-bl-full" />
          </div>
          {/* Whiskers */}
          <div className="absolute top-9 -left-2 w-5 border-t border-text/20 rotate-[-10deg]" />
          <div className="absolute top-10.5 -left-1.5 w-4 border-t border-text/20 rotate-[5deg]" />
          <div className="absolute top-9 -right-2 w-5 border-t border-text/20 rotate-[10deg]" />
          <div className="absolute top-10.5 -right-1.5 w-4 border-t border-text/20 rotate-[-5deg]" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-light opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-20 h-48 w-48 rounded-full bg-secondary-light opacity-40 blur-3xl" />

      {/* Paw prints decoration */}
      <div className="pointer-events-none absolute top-12 left-8 text-3xl opacity-10 rotate-[-30deg]">🐾</div>
      <div className="pointer-events-none absolute top-32 right-12 text-2xl opacity-10 rotate-[20deg]">🐾</div>
      <div className="pointer-events-none absolute bottom-20 left-16 text-2xl opacity-10 rotate-[-15deg]">🐾</div>
      <div className="pointer-events-none absolute bottom-12 right-8 text-xl opacity-10 rotate-[35deg]">🐾</div>

      <div className="relative mx-auto max-w-lg text-center">
        <CatFace />

        <h1 className="animate-fade-in-up stagger-1 mb-4 text-3xl font-bold leading-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            补贴喵
          </span>
          <br />
          帮你记住每一笔 🐾
        </h1>

        <p className="animate-fade-in-up stagger-2 mb-3 text-lg text-text-light leading-relaxed">
          喵～厦门毕业生每年最多领 <strong className="text-primary font-semibold">¥8,000</strong> 租房补贴
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
          让补贴喵算算 🐾
        </Link>
      </div>
    </section>
  );
}
