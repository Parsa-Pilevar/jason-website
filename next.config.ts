import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/practice", destination: "/advisory-practice", permanent: true },
      { source: "/advisory", destination: "/advisory-practice", permanent: true },
    ]
  },
}

export default nextConfig
