import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skatfx",
    short_name: "Skatfx",
    description: "A Progressive Web App built with Next.js",
    display: "standalone",
    start_url: "/",
    theme_color: "#4301fd",
    background_color: "#4301fd",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-cover-3840x2160.png",
        sizes: "3840x2160",
        type: "image/png",
        form_factor: "wide",
        label: "form field image",
      },
      {
        src: "/screenshot-cover-700x1244.png",
        sizes: "700x1244",
        type: "image/png",
        form_factor: "narrow",
        label: "form field image mobile",
      },
    ],
  };
}
