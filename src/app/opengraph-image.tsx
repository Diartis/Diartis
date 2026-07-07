import { ImageResponse } from "next/og";

export const alt = "DIARTIS multidisciplinary designer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0B",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, opacity: 0.58 }}>PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 170, fontWeight: 900, letterSpacing: -12, lineHeight: 0.82 }}>
            DIARTIS
          </div>
          <div style={{ display: "flex", marginTop: 36, maxWidth: 780, fontSize: 34, lineHeight: 1.2, opacity: 0.72 }}>
            Graphic Design, Motion Design, and Video Editing
          </div>
        </div>
      </div>
    ),
    size,
  );
}
