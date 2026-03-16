"use client";

import { FaFire, FaGift, FaHeart, FaStar } from "react-icons/fa";

const Content = () => (
  <span className="inline-flex items-center gap-0 whitespace-nowrap">

    <span className="inline-flex items-center gap-2 px-6">
      <FaFire className="text-red-200" />
      <span>Celebrating India&apos;s Win!</span>
    </span>

    <span className="text-white/40">•</span>

    <span className="inline-flex items-center gap-2 px-6">
      <FaGift className="text-yellow-200" />
      <span>Get 15% Off</span>
    </span>

    <span className="text-white/40">•</span>

    <span className="inline-flex items-center gap-2 px-6">
      <span>Use Code:</span>
      <strong className="font-extrabold tracking-widest bg-white/20 px-2 py-0.5 rounded text-white">
        INDT20
      </strong>
    </span>

    <span className="text-white/40">•</span>

    <span className="inline-flex items-center gap-2 px-6">
      <FaHeart className="text-red-200" />
      <span>Limited Time Offer</span>
    </span>

    <span className="text-white/40">•</span>

    <span className="inline-flex items-center gap-2 px-6">
      <FaStar className="text-yellow-100" />
      <span>Premium Accounting Services</span>
    </span>

    <span className="text-white/40 px-6">•</span>

  </span>
);

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-9 left-0 right-0 z-40"
      style={{ height: "40px", overflow: "hidden" }}
      aria-label="Promotional announcement"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400" />

      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
          animation: "shimmer-sweep 3s ease-in-out infinite",
        }}
      />

      {/* Marquee track */}
      <div
        className="relative flex items-center h-full text-white font-semibold text-sm"
        style={{ overflow: "hidden" }}
      >
        {/* The track is inline-flex so it sizes to content, not the container */}
        <div
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "marquee-track 25s linear infinite",
          }}
        >
          {/* Two identical copies for seamless looping */}
          <Content />
          <Content />
        </div>
      </div>
    </div>
  );
}
