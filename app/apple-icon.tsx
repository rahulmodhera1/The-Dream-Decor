import { ImageResponse } from "next/og";
import { resolveLogoDataUri } from "@/lib/media";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const logo = resolveLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F6F2EC",
        }}
      >
        <div
          style={{
            width: "84%",
            height: "84%",
            borderRadius: "50%",
            border: "2px solid rgba(43,42,40,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2B2A28",
          }}
        >
          {logo ? (
            <img src={logo} width={120} height={120} style={{ objectFit: "contain" }} alt="" />
          ) : (
            <span
              style={{
                color: "#F6F2EC",
                fontSize: 74,
                fontFamily: "Georgia, serif",
                letterSpacing: -3,
              }}
            >
              DD
            </span>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
