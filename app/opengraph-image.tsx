import { ImageResponse } from "next/og";
import { PORTFOLIO } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          {PORTFOLIO.initials}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
          {PORTFOLIO.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "rgba(255,255,255,0.6)", marginTop: 16 }}>
          {PORTFOLIO.role} — {PORTFOLIO.roleTagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.4)", marginTop: 32 }}>
          {PORTFOLIO.status}
        </div>
      </div>
    ),
    { ...size }
  );
}
