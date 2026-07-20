import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";
import { resolveLogoDataUri } from "@/lib/media";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = resolveLogoDataUri("logo/mark-light");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 22% 25%, rgba(205,168,119,0.35), transparent 45%), radial-gradient(circle at 78% 75%, rgba(179,135,79,0.3), transparent 45%), #2B2A28",
        }}
      >
        {logo ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={logo} width={520} height={298} style={{ objectFit: "contain" }} alt="" />
            <span
              style={{
                marginTop: 12,
                fontSize: 24,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#CDA877",
              }}
            >
              Event Styling & Decor in {siteConfig.location}
            </span>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 96,
                height: 96,
                borderRadius: "50%",
                border: "1.5px solid rgba(246,242,236,0.5)",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <span style={{ color: "#F6F2EC", fontSize: 40, fontFamily: "Georgia, serif" }}>DD</span>
            </div>
            <span
              style={{
                fontSize: 34,
                letterSpacing: 10,
                textTransform: "uppercase",
                color: "#F6F2EC",
                opacity: 0.85,
              }}
            >
              The
            </span>
            <span
              style={{
                fontSize: 108,
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                color: "#F6F2EC",
                marginTop: 8,
              }}
            >
              Dream Decor
            </span>
            <span
              style={{
                marginTop: 26,
                fontSize: 24,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#CDA877",
              }}
            >
              Event Styling & Decor in {siteConfig.location}
            </span>
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
