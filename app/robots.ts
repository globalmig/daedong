import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.daedong-precision.co.kr/sitemap.xml",
    host: "https://www.daedong-precision.co.kr",
  };
}
