import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Verseo — AI Content Automation Template",
  "description": "Launch an AI content product with Verseo’s responsive Framer template, polished SaaS sections, pricing, FAQs, testimonials, and conversion-focused flows.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Verseo — AI Content Automation Template",
    "description": "Launch an AI content product with Verseo’s responsive Framer template, polished SaaS sections, pricing, FAQs, testimonials, and conversion-focused flows.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/assets/s4TGxHu3fH1hhw07KzybjAI6GFc.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Verseo — AI Content Automation Template",
    "description": "Launch an AI content product with Verseo’s responsive Framer template, polished SaaS sections, pricing, FAQs, testimonials, and conversion-focused flows.",
    "images": [
      "https://framerusercontent.com/assets/s4TGxHu3fH1hhw07KzybjAI6GFc.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/44d0d9b5421a.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/e3d88f812481.png",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/4664e7161a9e.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="block overflow-visible text-foreground [font-family:sans-serif] text-xs font-normal not-italic leading-3.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
