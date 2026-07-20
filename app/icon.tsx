import { ImageResponse } from "next/og";
import { resolveLogoDataUri } from "@/lib/media";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          background: logo ? "#F6F2EC" : "#2B2A28",
          borderRadius: 7,
        }}
      >
        {logo ? (
          <img src={logo} width={26} height={26} style={{ objectFit: "contain" }} alt="" />
        ) : (
          <span
            style={{
              color: "#F6F2EC",
              fontSize: 18,
              fontFamily: "Georgia, serif",
              letterSpacing: -1,
            }}
          >
            DD
          </span>
        )}
      </div>
    ),
    { ...size }
  );
}
