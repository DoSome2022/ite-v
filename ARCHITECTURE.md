# InnoTrendEDU（宏業教育中心）網站系統架構說明

> 專案：`ite-v2`
> 路徑：`/Users/user/Documents/Web_project/ITE/ite-v2`
> 最後整理：2026-10-28

本文件說明 `ite-v2` 專案的整體系統架構、網頁架構分佈、設計概念（Design Concept），以及 `components/` 與 `lib/` 目錄內每一個檔案的功能。

---

## 1. 專案概述

`ite-v2` 是 **InnoTrendEDU（宏業教育中心 / Innovation Trend Education Centre）** 的官方網站，定位為一間香港的企業科技培訓機構，同時服務兩個市場：

- **B2B 企業培訓**：企業 AI 培訓、數據分析、網絡安全、NITTP（新型工業化及科技培訓計劃）政府資助課程、中小企數碼轉型。
- **B2C 個人進修**：AI、Python、數據分析、網頁開發、網絡安全等公開小班課程。

網站除了對外的行銷頁面外，也規劃了三個內部「後台」入口（管理後台、學生平台、導師平台），目前以靜態 UI + 前端 mock 資料的形式呈現，尚未接上真實後端資料庫。

---

## 2. 技術棧（Tech Stack）

| 類別 | 技術 | 版本 |
|------|------|------|
| 前端框架 | Next.js（App Router） | 15.5.6 |
| UI 函式庫 | React | 19.0.0 |
| 樣式 | Tailwind CSS | v4.1.18 |
| 語言 | TypeScript | ^5 |
| 圖示 | lucide-react | ^0.562.0 |
| 建置工具 | PostCSS + @tailwindcss/postcss | 8.5.6 / 4.1.18 |
| Lint | ESLint 9 + eslint-config-next | 16.1.1 |

關鍵特點：

- 使用 **Next.js App Router** 的 **Route Groups（路由群組）** 技術，用括號資料夾 `(public)`、`(admin)`、`(student)`、`(tutor)` 來「分組但不影響 URL」。
- 使用 **Tailwind CSS v4**，設定檔採 `@import "tailwindcss"` + `@theme` 的方式（非舊版 `tailwind.config.js`）。
- 路徑別名 `@/*` 指向專案根目錄（見 `tsconfig.json` 的 `paths`）。

---

## 3. 設計概念（Design Concept）

### 3.1 品牌定位與視覺語言

- **主色調**：以 **青色系（cyan-700 / cyan-600 / cyan-800）** 作為企業培訓（B2B）與科技感的品牌主色，搭配 **白 / 灰（white / gray-50 / slate）** 的乾淨底色。
- **輔助色**：深色 **slate-700 / slate-800 / slate-900** 用於個人進修區塊與 CTA；部分頁面使用 **blue-600 / blue-950**（如新聞、投訴表單、登入）。
- **按鈕造型**：大量使用 **`rounded-3xl`（膠囊型 / pill）** 按鈕，配 hover 顏色過渡（`transition-colors`），營造現代、友善的視覺。
- **字型**：根版面（`app/layout.tsx`）載入 Geist 字體變數，但 `body` 最終以 `'Gill Sans', 'Gill Sans MT', Calibri, ...` 作為實際顯示字型（繼承自舊版設計，見 `README.md`）。
- **中英雙語**：導覽與標題普遍採用「中文主標 + 英文副標」的雙行結構（例如「企業培訓 / Corporate」），呼應香港市場習慣。

### 3.2 版面結構哲學

- **Server / Client Component 分離**：頁面（`page.tsx`）盡量作為 Server Component 承載 `metadata` 與 SEO 設定，互動邏輯則抽到獨立的 `*Client.tsx`（Client Component）或 `*Content.tsx`。例如 `corporate/CorporateClient.tsx`、`courses/CoursesFilterClient.tsx`。
- **響應式（Responsive）**：以 Tailwind 的 `grid-cols-1 md:grid-cols-2 lg:grid-cols-*` 與 `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` 建立統一容器，桌面與手機版自動切換（手機版導覽有漢堡選單、側邊欄有遮罩）。
- **動態背景動畫**：首頁與團隊頁使用 Canvas 動畫作為 Hero 背景，分別模擬「數位雨（Matrix）」與「示波器波形」，強化「科技教育」的品牌意象。

### 3.3 SEO 策略

- 每個公開頁面透過 `metadata`（title / description / keywords / openGraph / canonical）做搜尋引擎優化。
- `corporate/layout.tsx` 額外注入 **FAQPage 的 JSON-LD 結構化資料**（`application/ld+json`），提升搜尋結果的富文本曝光。
- 頁面文案大量內嵌「NITTP 資助」「AI 培訓」「數據分析」等關鍵字。

---

## 4. 網頁架構分佈（Directory Structure）

```
ite-v2/
├── app/                         # Next.js App Router 主目錄
│   ├── layout.tsx               # 根版面（全站共用 <html>/<body>、字型、metadata）
│   ├── globals.css              # 全域樣式（Tailwind v4 + CSS 變數）
│   ├── favicon.ico              # 網站圖示
│   ├── (public)/                # 對外公開網站（路由群組，不影響 URL）
│   │   ├── layout.tsx           # 公開區版面（僅 <main> 包裝）
│   │   ├── page.tsx             # 首頁
│   │   ├── about/               # 關於我們
│   │   ├── contact/             # 聯絡我們
│   │   ├── complaint-form/      # 投訴/建議表單
│   │   ├── core/                # 核心課程體系
│   │   ├── corporate/           # 企業培訓（含 layout.tsx、v1/v2 備份）
│   │   ├── course/              # 單一課程詳細頁（AI 課程 demo）
│   │   ├── courses/             # 課程總覽（篩選版）
│   │   ├── courses_v1/          # 課程體系（另一版本，含分類/難度篩選）
│   │   ├── login/               # 學生登入
│   │   ├── newpage/             # 新版首頁 demo（備用/實驗頁）
│   │   ├── news/                # 最新消息（列表 / 文章 / 技術資訊）
│   │   ├── ourteam/             # 教育團隊
│   │   └── privacy-policy/      # 隱私政策
│   ├── (admin)/admin/           # 管理後台（路由群組，URL 為 /admin）
│   │   ├── layout.tsx           # 後台版面（側邊欄 + 頂欄）
│   │   ├── page.tsx             # 空首頁
│   │   ├── applications/        # 報名列表
│   │   ├── courses/             # 課程管理 / 小冊子
│   │   ├── batches/             # 開班管理
│   │   ├── students/            # 學生帳號管理
│   │   └── tutor-payroll/       # 導師薪金
│   ├── (student)/student/       # 學生平台（URL 為 /student）
│   │   ├── layout.tsx           # 學生平台版面（側邊欄 + 頂欄）
│   │   ├── page.tsx             # 空首頁
│   │   ├── courses/             # 我的課程
│   │   ├── profile/             # 個人資料
│   │   ├── notices/             # 學院資訊
│   │   ├── invoices/            # 發票 & 收據
│   │   └── certificates/        # 課程證書
│   └── (tutor)/tutor/           # 導師平台（URL 為 /tutor）
│       ├── layout.tsx           # 導師平台版面（側邊欄 + 頂欄）
│       ├── page.tsx             # 空首頁
│       ├── attendance/          # 課程點名
│       ├── comments/            # 學生評語
│       └── hourlog/             # 教學計鐘
├── components/                  # 可重用 UI 元件（詳見第 6 節）
├── lib/                         # 工具函式庫（目前為空，詳見第 7 節）
├── types/                       # TypeScript 型別定義
│   └── index.ts
├── public/                      # 靜態資源（圖片、Logo）
├── package.json / tsconfig.json / next.config.ts / postcss.config.mjs / eslint.config.mjs
└── README.md
```

### 4.1 路由群組（Route Groups）說明

Next.js 的 Route Groups 用「括號資料夾」把檔案「邏輯分組」，但括號不會出現在實際 URL 路徑中：

| 群組資料夾 | 實際 URL 前綴 | 用途 |
|-----------|--------------|------|
| `(public)` | 無（根路徑） | 對外公開網站，例如 `/`、`/about`、`/corporate` |
| `(admin)` | `/admin` | 管理後台 |
| `(student)` | `/student` | 學生平台 |
| `(tutor)` | `/tutor` | 導師平台 |

> 注意：`(admin)`、`(student)`、`(tutor)` 內層又各有一個同名資料夾（如 `(admin)/admin/`），因此實際 URL 為 `/admin/...`。這種「群組 + 實體資料夾同名」的寫法較少見，但能讓 URL 保持 `/admin/...` 的可讀性。

---

## 5. 根版面與全域樣式

### 5.1 `app/layout.tsx`（根版面）

全站最外層的 Root Layout，負責：

- 設定 `<html lang="zh-HK">`。
- 透過 `next/font/google` 載入 Geist Sans / Geist Mono 字體，並以 CSS 變數 `--font-geist-sans` / `--font-geist-mono` 注入。
- 設定全站預設 metadata：標題、描述、關鍵字、Open Graph。
- 將 `children` 包進 `<body>`。

### 5.2 `app/globals.css`（全域樣式）

Tailwind v4 風格的入口樣式：

- `@import "tailwindcss";` 引入 Tailwind。
- 定義 `:root` 的 `--background` / `--foreground` CSS 變數。
- `@theme inline` 將變數對應到 Tailwind 的 `color-background`、`color-foreground`、`font-sans`、`font-mono`。
- 以 `@media (prefers-color-scheme: dark)` 提供深色模式變數（但實際 body 仍以白底為主要樣式）。
- `body` 設定背景、文字色，以及 `'Gill Sans', ...` 字型族。

---

## 6. `components/` 每個檔案功能詳解

`components/` 內共有 5 個可重用元件。

### 6.1 `components/Nav.tsx` — 全站導覽列（Navbar）

- **型別**：Client Component（`"use client"`），因為需要手機選單的 `useState` 開關狀態。
- **功能**：
  - 顯示頂部導覽列，`sticky top-0` 固定在頁面頂端，背景 `bg-white/90 backdrop-blur-sm`（半透明毛玻璃效果）。
  - Logo 使用 `Image` 元件載入 `@/public/Logo.png`，點擊導向首頁 `/`。
  - 內建 `publicNavItems` 選單陣列，包含 7 個項目（企業培訓 / 個人進修 / 最新消息 / 教育團隊 / 關於我們 / 聯絡我們 / 學生登錄），每個項目以「英文名 + 中文名」雙行顯示。
  - 桌面版（`md:` 以上）水平排列；手機版顯示漢堡選單按鈕，點擊後展開垂直選單。
- **主要依賴**：`next/link`、`next/image`、`react` 的 `useState`。

### 6.2 `components/Footer.tsx` — 全站頁腳（Footer）

- **型別**：Client Component（動態取得年份）。
- **功能**：
  - 四欄網格頁腳：Logo 區、Information（站內連結）、Contacts（聯絡資訊）、Social Media（社群連結）。
  - 使用 `lucide-react` 圖示（Smartphone / Phone / Mail / Facebook / Instagram / Linkedin / Youtube）。
  - 顯示聯絡電郵 `info@ite.edu.hk`、電話 `5100 1888` / `3163 9569`、地址（油麻地）。
  - 底部以 `new Date().getFullYear()` 動態顯示版權年份。
- **特色**：社群按鈕 hover 時變青色（`hover:bg-cyan-700`）。

### 6.3 `components/GoogleMap.tsx` — Google 地圖 + 聯絡資訊區

- **型別**：Server Component（無互動狀態）。
- **功能**：
  - 嵌入 Google Maps 的 `<iframe>`（指向 InnoTrendEDU 培訓中心位置）。
  - 下方顯示「Contacts 聯絡我們」資訊卡：電郵、手機、電話、地址、營業時間（週一至週六 9:00-18:00）。
  - 使用 `lucide-react` 的 Smartphone / Phone / MapPinCheck / Mail / CalendarClock 圖示。
- **用途**：主要被 `contact/ContactFormSection.tsx` 引用，作為聯絡頁左側區塊。

### 6.4 `components/MatrixGridHeroBg.tsx` — 數位雨（Matrix）動態背景

- **型別**：Client Component，使用 Canvas + `requestAnimationFrame`。
- **功能**：
  - 在首頁 Hero 背景渲染「數位雨」效果：隨機數字 `0-9` 以青色（`#0891b2`）由上而下落下，帶殘影淡出。
  - 加入「波浪水平偏移」（`waveOffsets`）讓每列數字左右微幅擺動，視覺更生動。
- **效能優化**：
  - 限制 DPR（裝置像素比）最大 1.2，避免 4K 螢幕畫布過大。
  - 以 `TARGET_FPS = 30` 做 FPS 節流。
  - 使用 `IntersectionObserver` 偵測畫布是否在可視範圍，離屏時跳過繪製。
  - 使用 `ResizeObserver` 在容器尺寸改變時重設畫布大小。
  - 尊重 `prefers-reduced-motion: reduce`（用戶減少動畫偏好時停止動畫）。
- **用途**：首頁 `(public)/page.tsx` 的 Hero 背景。

### 6.5 `components/WaveHeroBg.tsx` — 示波器波形（Oscilloscope）動態背景

- **型別**：Client Component，使用 Canvas + `requestAnimationFrame`。
- **功能**：
  - 渲染一個「示波器」風格的科技背景，包含：
    - 背景網格（水平/垂直線）。
    - 中心基準線。
    - 主要數位訊號波形（多個 sine 波疊加，藍色 `#0ea5e9` 帶光暈）。
    - 訊號尾部陰影。
    - 紅色虛線「觸發線」及觸發箭頭。
    - 左右兩個掃描光標。
    - 頻率刻度文字（1 kHz / 2 kHz / 5 kHz、+2V / 0V / -2V）。
    - 小型數位點。
- **效能優化**：與 `MatrixGridHeroBg` 相同，含 DPR 限制、FPS 節流、IntersectionObserver、ResizeObserver、reduced-motion 支援。
- **用途**：團隊頁 `ourteam/OurTeamClient.tsx` 的 Hero 背景。

> 兩者的元件名稱（`WhiteOscilloscopeHeroBg`）與檔案名（`WaveHeroBg`）不同，需留意導入時以 `export default` 的函式名為準。

---

## 7. `lib/` 目錄說明

`lib/` 目錄**目前是空的**（沒有任何檔案）。

在 Next.js 專案慣例中，`lib/` 通常用於放置：

- 資料庫連線（Prisma / ORM client）
- API 工具函式
- 商業邏輯（utils / helpers）
- 資料模型或 mock 資料

目前專案尚未建立這些共用模組，所有 mock 資料與型別都直接寫在各 `page.tsx` / `*Client.tsx` 檔案內。未來若要接上後端，建議在此建立：

- `lib/db.ts` — 資料庫連線
- `lib/auth.ts` — 登入驗證
- `lib/api.ts` — API 呼叫封裝
- `lib/constants.ts` — 共用常數（聯絡資訊、導覽項目等）

---

## 8. `types/index.ts` 型別定義

`types/index.ts` 定義了後台/學生系統的 TypeScript 介面（目前主要為資料模型雛形，尚未完全套用於頁面）：

| 型別/介面 | 說明 |
|-----------|------|
| `UserRole` | 使用者角色：`"admin"` 或 `"student"` |
| `User` | 使用者（id / email / password / name / role） |
| `StudentProfile` | 學生資料（userId / fullName / enrolledCourses / contact） |
| `Enrollment` | 報讀記錄（id / courseId / courseName / schedule 陣列） |
| `Course` | 課程（id / title / description） |
| `Notice` | 學院公告（id / title / content / createdAt） |
| `InvoiceReceipt` | 發票/收據（id / studentId / courseId / type / amount / issueDate） |
| `Certificate` | 課程證書（id / studentId / courseId / courseName / issueDate） |

> 注意：實際後台頁面（如 `admin/applications`）大多在各自檔案內「重新定義」了更貼近畫面的 local type（如 `Application`、`Batch`），與 `types/index.ts` 的通用型別是兩套並存。

---

## 9. 公開頁面（`app/(public)/`）詳細說明

### 9.1 首頁 `(public)/page.tsx`

- Client Component，全站最主要的行銷頁。
- 結構依序：Hero（數位雨背景 + 品牌標語 + 兩個 CTA）→ 個人科技進修 B2C 區 → 企業培訓計劃 B2B 區 → 企業培訓客戶行業標籤 → 定制培訓流程（4 步驟）→ 底部 CTA → 教育團隊（3 位講師簡介）。
- 內嵌 `teamMembers` 陣列（Aaron Wai / Honcy Lee / Eric 的雙語簡介）。
- 大量 CTA 導向 `/corporate`、`/courses`、WhatsApp。

### 9.2 關於我們 `about/`

- `page.tsx`：Server Component，設定 metadata，組合 `Nav` + `AboutContent` + `Footer`。
- `AboutContent.tsx`：Client Component，內容包含品牌 Banner、ITE 核心（創新與改變）、ITE 優勢（Why Us）、NITTP 資助說明、適合對象 SEO 區、FAQ、聯絡 CTA。

### 9.3 聯絡我們 `contact/`

- `page.tsx`：Server Component，設定 metadata。
- `ContactFormSection.tsx`：Client Component，包含左側 Google 地圖 + 右側聯絡表單。
  - 表單欄位：稱呼、電話、電郵、感興趣服務（多選 checkbox）、類型（單選 radio）、詳細內容。
  - 提交時 `fetch('/api/send-contact')`（**此 API route 目前尚未實作**）。
  - 提交成功後切換為成功畫面，可「再次填寫」。

### 9.4 投訴/建議表單 `complaint-form/page.tsx`

- Client Component，獨立完整的表單頁。
- 含完整前端驗證（姓名/聯絡方式/投訴類型/標題/詳情，電話與電郵正規表示式驗證、描述至少 20 字）。
- 附件上傳功能已用註解停用（原本支援 JPG/PNG/PDF/Word，5MB 上限）。
- 提交目前為「模擬」：`setTimeout(2000)` 後顯示成功畫面，無實際 API。
- 右側有聯絡資訊側欄與處理流程說明。

### 9.5 核心課程體系 `core/`

- `page.tsx`：Server Component，設定 metadata。
- `CoreCourseContent.tsx`：Client Component，內嵌大量課程資料陣列（`coreCourses`、`coreCourses10`、`coreCourses_point`，共 20 門課程），以編號列表呈現課程標題與內容，並附 NITTP 資助申請步驟說明。

### 9.6 企業培訓 `corporate/`

- `layout.tsx`：設定 metadata + canonical + Open Graph，並注入 FAQPage 的 JSON-LD 結構化資料。
- `page.tsx`：Server Component，設定 metadata，組合 `Nav` + `CorporateClient`。
- `CorporateClient.tsx`：Client Component（主要頁面），內容豐富：
  - 首屏（圖片 + 品牌標語 + 「索取企業專屬培訓方案」按鈕）。
  - 企業技術轉移核心價值。
  - 工具匹配表格（Copilot / Claude / Hermes / Codex / Gemini / Deepseek）。
  - 基礎課程（全體員工）與進階課程（核心團隊/IT 團隊）卡片。
  - 選擇 ITE 的 4 大理由、FAQ、諮詢 CTA。
  - Modal 彈窗表單：`fetch('/api/send-enquiry')`（**此 API route 目前尚未實作**），含前端必填驗證。
- `v1.tsx` / `v2.tsx`：企業培訓頁的**舊版備份/實驗版本**（未直接被 `page.tsx` 引用），內容與 `CorporateClient` 高度重疊，保留作為版控參考。

### 9.7 單一課程詳細頁 `course/page.tsx`

- Client Component，AI 課程的詳細示範頁。
- 內嵌 `courseInfo`（AI 課程基本資料）與 `courseDetail`（詳細描述、學期、適合人群、學習回報、職業出路、亮點）。
- 含 Breadcrumb、課程資訊卡、預覽影片區、課程內容、時間安排（學期下拉選擇）、右側報名卡片（sticky）、報名彈窗表單。

### 9.8 課程總覽 `courses/`

- `page.tsx`：Server Component，設定 metadata，內嵌 `allCourses`（4 門課程）與 `filterOptions`（分類/難度/資助/模式）。
- `CoursesFilterClient.tsx`：Client Component，完整的課程篩選介面：
  - 左側篩選側欄（搜尋關鍵字、專業領域 radio、難度多選、資助多選）。
  - 「臨時篩選 vs 已套用篩選」雙狀態：先選條件，按「篩選」才套用，可「重設」。
  - 右側課程卡片列表（含「重點推薦」標籤、時數/模式/開課日期、查看大綱、下載簡章按鈕）。
  - 空狀態提示與分頁（目前分頁為靜態）。

### 9.9 課程體系 `courses_v1/`

- `page.tsx`：Server Component，設定 metadata。
- `CoursesClient.tsx`：Client Component，另一版本的課程列表：
  - 課程依「核心課程 / 技術技能 / 企業應用」三大分類 + 主題色（藍/紫/綠）。
  - 含關鍵字搜尋、分類篩選、難度篩選，即時過濾。
  - 每門課顯示圖示、適合人群、學習回報、職業出路、難度標籤。
  - 底部有客製化企業培訓卡片。

### 9.10 學生登入 `login/`

- `page.tsx`：Server Component，設定 metadata。
- `StudentLoginClient.tsx`：Client Component，登入表單（帳號 + 密碼，含顯示/隱藏密碼 Eye 圖示）。
  - 登入目前為「模擬」（`setTimeout` + `alert`），程式碼內已預留 `fetch('/api/student/login')` 註解。

### 9.11 新版首頁 demo `newpage/page.tsx`

- Server Component，一份「去電商化」的備用首頁設計：Hero（深色）→ 數據信任條 → 重點學程卡片 → 為什麼選擇我們 → CTA。內容較接近學院形象，尚未成為正式首頁。

### 9.12 最新消息 `news/`

- `page.tsx`：Client Component，新聞總覽頁，含 EVENT 區、技術資訊、過往活動、學生作品、文章等區塊，資料皆為 mock（Lorem Ipsum 佔位 + picsum 隨機圖）。
- `post/page.tsx`：Client Component，單篇文章詳細頁（mock 資料）。
- `tech-news/page.tsx`：Client Component，技術資訊列表頁（mock 資料）。

### 9.13 教育團隊 `ourteam/`

- `page.tsx`：Server Component，設定 metadata。
- `OurTeamClient.tsx`：Client Component，含 7 位講師的完整資料（Aaron Wai / Honcy Lee / Eric / J Tsang / Antoninus Yeung / Oscar Lo / CS Fung）。
  - Hero 使用 `WaveHeroBg` 波形背景。
  - 每位講師一張可展開/收合的卡片，內含 Technical Background、Professional & Educational Contributions、Expertise、Bio。
  - 以 `expandedIds` state 管理展開狀態，內容永遠在 DOM 內、僅用 CSS 高度裁切。

### 9.14 隱私政策 `privacy-policy/page.tsx`

- Server Component，英文隱私政策頁（Introduction / Information We Collect / How We Use / Sharing / Security / Contact），動態顯示最後更新日期。

---

## 10. 後台頁面（`app/(admin)/admin/`）詳細說明

### 10.1 `layout.tsx` — 管理後台版面

- Client Component，側邊欄（Sidebar）+ 頂欄（Topbar）佈局。
- 側邊欄選單（5 項）：報名列表、課程管理 / 建立小冊子、開班管理、學生帳號管理、導師薪金，使用 `lucide-react` 圖示。
- 手機版有遮罩與側邊欄滑入效果；底部有「登出」按鈕。
- 頂欄顯示「InnoTrendEDU｜管理後台」。

### 10.2 `page.tsx` — 後台首頁

- 目前為空（`<></>`），尚未製作儀表板內容。

### 10.3 `applications/page.tsx` — 報名列表

- Client Component，管理學員報名。
- 表格欄位：姓名、電話、Email、課程名稱、課程 ID、學期、學費、留位費、全數學費、學生帳戶。
- 可搜尋（姓名/Email/課程 ID），可切換留位費/全數學費狀態，可「開帳戶」。

### 10.4 `courses/page.tsx` — 課程管理 / 小冊子

- Client Component，新增/編輯/刪除課程。
- 欄位：課程 ID、名稱、小冊子內容、學費、留位費（固定 $500）、開班最低人數。
- 左側表單 + 右側課程列表。

### 10.5 `batches/page.tsx` — 開班管理

- Client Component，管理開班狀態（`collecting` 收集留位費 → `ready` 可開班 → `started` 已開班）。
- 顯示班別編號、課程、學期、已報名人數、最低開班人數、狀態、備註、操作。

### 10.6 `students/page.tsx` — 學生帳號管理

- Client Component，新增/編輯/刪除學生帳號（uid、姓名、email、密碼、已報讀課程）。

### 10.7 `tutor-payroll/page.tsx` — 導師薪金

- Client Component，管理導師薪金記錄（教學時數 × 時薪 = 金額），可標記「已出糧 / 未支付」。

---

## 11. 學生平台頁面（`app/(student)/student/`）詳細說明

### 11.1 `layout.tsx` — 學生平台版面

- Client Component，與管理後台版面結構相同（側邊欄 + 頂欄）。
- 側邊欄選單（5 項）：我的課程、個人資料、學院資訊、發票 & 收據、課程證書。

### 11.2 各子頁面

| 頁面 | 型別 | 說明 |
|------|------|------|
| `page.tsx` | Server | 空首頁（尚未製作儀表板） |
| `courses/page.tsx` | Server | 我的課程（mock 卡片列表） |
| `profile/page.tsx` | Server | 個人資料（靜態佔位資料） |
| `notices/page.tsx` | Server | 學院資訊（mock 公告列表） |
| `invoices/page.tsx` | Server | 發票 & 收據（mock 列表） |
| `certificates/page.tsx` | Server | 課程證書（空狀態卡片） |

> 上述子頁面目前皆為**靜態 mock 資料**，尚未接上後端與登入驗證。

---

## 12. 導師平台頁面（`app/(tutor)/tutor/`）詳細說明

### 12.1 `layout.tsx` — 導師平台版面

- Client Component，側邊欄 + 頂欄。
- 側邊欄選單（3 項）：課程點名、學生評語、教學計鐘。

### 12.2 各子頁面

| 頁面 | 型別 | 說明 |
|------|------|------|
| `page.tsx` | Server | 空首頁 |
| `attendance/page.tsx` | Client | 課程點名（選班別 → 切換學生出席狀態） |
| `comments/page.tsx` | Client | 學生評語（選班別 → 填寫每位學生評語） |
| `hourlog/page.tsx` | Client | 教學計鐘（按月查閱時數、本月/全年累計、表格列表） |

---

## 13. `public/` 靜態資源

主要包含：

- **Logo**：`Logo.png`、`Logo_White.png`（另有 `Logo_Blue.png` 被舊版 `corporate/v1.tsx` 引用，但該檔實際不存在於 `public/`，需留意）。
- **講師頭像**：`Teacher_*.png/jpeg/webp`（Aaron Wai、Honcy Lee、Eric、J Tsang、Antoninus、CS Fung、Oscar），以及 `TA_Myra.jpeg`（目前未被引用）。
- **頁面插圖**：`banner.jpg`、`core.jpg`、`corporate_banner.jpg`、`event.png`、`b1.png`、`b2.png`、`b3.png`。
- **首頁 Banner**：`image/home/banner_1.png`、`image/home/banner_2.png`。
- **合作夥伴**：`partners/AIA.jpeg`、`BNI.jpeg`、`CT.jpeg`、`HKCYS.jpeg`、`HKJC.jpeg`（目前頁面未直接引用）。

---

## 14. 已知待辦 / 注意事項

1. **API Routes 未實作**：`/api/send-contact`、`/api/send-enquiry`、`/api/student/login` 等在程式碼中被呼叫，但 `app/` 下**沒有對應的 API route 檔案**（沒有 `app/api/` 目錄），表單提交目前會失敗或僅為模擬。
2. **後台/學生/導師資料皆為前端 mock**：所有資料寫死在各頁面，無資料庫與後端串接。
3. **`lib/` 目錄為空**：尚無共用工具函式或資料層。
4. **多套並存的舊版頁面**：`corporate/v1.tsx`、`corporate/v2.tsx`、`courses_v1/`、`newpage/` 為備份或實驗版本，與正式頁面重複，建議後續清理。
5. **`Logo_Blue.png` 缺失**：`corporate/v1.tsx` 導入 `Logo_Blue.png`，但 `public/` 中不存在此檔（正式版 `CorporateClient.tsx` 已改用 `Logo.png`）。
6. **`TA_Myra.jpeg` 缺失**：`ourteam/OurTeamClient.tsx` 導入 `TA_Myra.jpeg`，但 `public/` 中不存在此檔（該教師未出現在 `teamMembers` 陣列中，屬未使用的導入）。
7. **元件命名不一致**：`WaveHeroBg.tsx` 的 default export 名稱是 `WhiteOscilloscopeHeroBg`；`Nav.tsx` 是 `Navbar`；`Footer.tsx` 是 `ITEFooter`；`GoogleMap.tsx` 是 `ITEGoogleMap`，導入時以實際函式名為準。
8. **`types/index.ts` 未被充分利用**：後台頁面多數自行定義 local type，與 `types/` 的通用型別並存，未來可統一。
