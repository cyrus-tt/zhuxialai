const cards = [
  {
    emoji: "🐱",
    paw: "💰",
    title: "补贴标准",
    items: [
      "思明/湖里: ¥8,000/年",
      "集美/海沧: ¥6,000/年",
      "同安/翔安: ¥5,000/年",
    ],
  },
  {
    emoji: "🐱",
    paw: "📋",
    title: "申请条件",
    items: [
      "全日制本科及以上学历",
      "35周岁以下",
      "2021年后首次在厦就业",
    ],
  },
  {
    emoji: "🐱",
    paw: "📅",
    title: "申请节奏",
    items: [
      "每半年申请一次",
      "每季度有一个申请窗口",
      "一次发放半年补贴",
    ],
  },
];

export default function PolicyCards() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-xl font-semibold text-text">
          关于五折租房补贴 🐾
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`animate-fade-in-up stagger-${i + 1} relative rounded-2xl bg-bg-card p-6 shadow-sm border border-border`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">{card.emoji}</span>
                <span className="text-xl">{card.paw}</span>
              </div>
              <h3 className="mb-3 text-base font-semibold">{card.title}</h3>
              <ul className="space-y-1.5">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-light leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-1 -right-1 text-lg opacity-15 rotate-[25deg]">🐾</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
