import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Docker 部署：standalone 輸出，讓 Dockerfile 只需複製最小檔案
  output: "standalone",
  // 明確指定 tracing root = 專案根目錄。
  // （否則 Next 會向上偵測 lockfile，若上層目錄有遺留的 package-lock.json，
  //   standalone 產物會被套上多層路徑結構）
  outputFileTracingRoot: path.resolve("."),
  images: {
    // 不經 next/image 優化器（無 sharp 依賴），圖片直接由 public/ 提供；
    // 適合自架部署，亦避免 Node 18 與 sharp 0.35 的相容問題
    unoptimized: true,
  },
};

export default nextConfig;
