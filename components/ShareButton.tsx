"use client";

import { useState } from "react";
import type { DistrictId } from "@/lib/constants";

interface ShareButtonProps {
  startDate: string;
  district: DistrictId;
  claimed: number;
}

export default function ShareButton({
  startDate,
  district,
  claimed,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = new URL("/calculator", window.location.origin);
    url.searchParams.set("d", startDate);
    url.searchParams.set("district", district);
    url.searchParams.set("claimed", String(claimed));

    const shareUrl = url.toString();

    if (navigator.share) {
      try {
        await navigator.share({
          title: "住厦来 — 五折租房补贴提醒",
          text: "厦门五折租房补贴一笔都别漏！算算你能领多少 →",
          url: shareUrl,
        });
        return;
      } catch {
        // User cancelled or share failed, fall through to clipboard
      }
    }

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <button
      onClick={handleShare}
      className={`flex w-full items-center justify-center gap-2 rounded-2xl border-2 px-6 py-4 text-base font-semibold transition-all ${
        copied
          ? "border-success bg-success-light/30 text-success"
          : "border-primary/20 bg-bg-card text-primary hover:border-primary/40 hover:bg-primary-light/20"
      }`}
    >
      {copied ? (
        <>✅ 链接已复制！发给朋友吧</>
      ) : (
        <>🔗 分享给朋友</>
      )}
    </button>
  );
}
