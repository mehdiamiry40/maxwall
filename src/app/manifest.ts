import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

/** Name, colours and icons for phones that save the site to the home screen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description:
      "Adelaide installers of James Hardie cladding, CSR Bradford insulation and Dulux AcraStone microcement.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1e25a4",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
