export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-4 py-8 text-center text-sm text-text-lighter">
      <p className="mb-2">
        补贴喵 🐱 帮你记住每一笔
      </p>
      <p className="mb-3">
        本工具仅提供时间计算和提醒服务，不代表官方政策解读。
        <br />
        申请请前往{" "}
        <a
          href="https://ixm.xm.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          i厦门
        </a>{" "}
        官方平台 · 咨询电话 968383
      </p>
      <a
        href="https://github.com/cyrus-tt/zhuxialai/issues"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-lighter hover:text-primary transition-colors"
      >
        反馈问题 →
      </a>
    </footer>
  );
}
