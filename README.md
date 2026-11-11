# 🐈 3CatsMomBakery v2.4.0 — 職人烘焙配方計算與成本總覽

Apple 官網深色毛玻璃風格（Glassmorphism、Spring 動畫）烘焙管理 Dashboard，專為 **iPhone** 與 **iPad** 觸控操作最佳化設計，完整同步 [Jasmine's recipe Google 試算表 (gid=2001)](https://docs.google.com/spreadsheets/d/1jDieeGiKFCe8vaAAr6H7entZuC3gUYEQCYz-O3LkZuo/edit?gid=2001#gid=2001) 最新 **89 項原料** 與 **20 款配方**。

## 📁 專案結構 (GitHub Repository Structure)

```text
3catsmom-bakery/
├── index.html        # 主頁面結構（3CatsMomBakery 一隻橘貓標題、三大分頁、iOS/iPadOS 全螢幕 Meta）
├── style.css         # Apple 深色模式、毛玻璃 (Glassmorphism) 與大字體 RWD 樣式表
├── script.js         # 單排不截斷即時克數換算引擎、20款分類配方、89項原料庫與12款成本分析
├── assets/
└── README.md         # GitHub Pages 部署與操作說明
```

## ✨ 核心特色與分頁架構

1. **🐈 3CatsMomBakery 頂部導覽列（三大精簡分頁）**
   - **配方計算**：首頁三區塊免滾動速查，專供現場門市銷售與廚房備料大字秤重使用。
     - **1. 選種類**：四項無截斷藥丸按鈕（吐司・肉桂、軟歐・軟法、常溫甜點、酵種・抹醬）。
     - **2. 選品項**：單列橫向滑動卡片（左右選），下方清楚呈現「本次欲製作數量：− [ 11 ] + 顆 (1份)」。
     - **3. 即時配方克數**：**一排一個品項（預設單排）**，原料名稱 100% 完整顯示、**完全沒有「…」省略號**，清楚區分麵粉品牌、酵母規格與特調內餡；支援切換單排/雙排與公克(g)/公斤(kg)。
   - **原物料**：89 項完整建檔，支援關鍵字搜尋、類別篩選與採購價格即時模擬（密碼 `0410` 保護）。
   - **成本總覽**：12 款主力品項成本結構圖表（食材、包材、人工、電費）與定價利潤分析（密碼 `0410` 保護）。
2. **📱 Google 試算表官方圖示**
   - 頂部導覽列右側配置綠色底官方 Google 試算表 Icon 與 GitHub 部署指引。
