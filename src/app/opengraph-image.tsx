import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// ImageResponse needs image bytes or an absolute URL; read the local asset at build time.
const photo = await readFile(
  join(process.cwd(), "public/images/social-preview.jpg"),
  "base64",
);
const photoSrc = `data:image/jpeg;base64,${photo}`;

// Preview card shown when the site is shared (Facebook, Messages, WhatsApp, Google)
export const alt = "Max Wall — Render & Cladding Adelaide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#00374b",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          width: 640,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ width: 56, height: 11, background: "#ffffff" }} />
            <div style={{ width: 40, height: 11, background: "#f95446" }} />
            <div style={{ width: 56, height: 11, background: "#ffffff" }} />
          </div>
          <div style={{ fontSize: 40, letterSpacing: 6 }}>MAX WALL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Render &amp; cladding, Adelaide.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Free on-site quotes · Fixed written prices
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#3caaff" }}>maxwall.com.au</div>
      </div>
      <img
        src={photoSrc}
        alt=""
        width={560}
        height={630}
        style={{ objectFit: "cover" }}
      />
    </div>,
    size,
  );
}
