import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2B2A28",
          borderRadius: 7,
        }}
      >
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
      </div>
    ),
    { ...size }
  );
}
