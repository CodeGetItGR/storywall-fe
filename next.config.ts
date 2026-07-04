import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }, { protocol: "https", hostname: "i.pravatar.cc" }],
  },
};

export default withNextIntl(nextConfig);
