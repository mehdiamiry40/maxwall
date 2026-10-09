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
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1e25a4",
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
            <svg width="64" height="64" viewBox="0 0 64 64">
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M4 25 20 9 32 21 44 9 60 25V55H4V25Zm8 4v18h40V29l-8-8-12 12-12-12-8 8Z"
              />
              <path fill="#e16633" d="M28 35h8v12h24v8H28V35Z" />
            </svg>
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
                color: "#ffffff",
              }}
            >
              Free on-site quotes · Fixed written prices
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#ffffff" }}>maxwall.com.au</div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={560}
          height={630}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
