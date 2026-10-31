# 🐱🥐 3CatsMomBakery — 職人烘焙配方計算器與成本總攬

Apple 官網深色毛玻璃風格（Glassmorphism、Spring 動畫）烘焙管理 Dashboard，專為 **iPhone** 與 **iPad** 觸控操作最佳化設計，完整同步 [Jasmine's recipe Google 試算表 (gid=2001)](https://docs.google.com/spreadsheets/d/1jDieeGiKFCe8vaAAr6H7entZuC3gUYEQCYz-O3LkZuo/edit?gid=2001#gid=2001) 最新 **89 項原料** 與 **20 款配方**。

## 📁 專案結構 (GitHub Repository Structure)

```text
3catsmom-bakery/
├── index.html        # 主頁面結構（3CatsMomBakery 大標、三大核心分頁、iOS/iPadOS 全螢幕 Meta）
├── style.css         # Apple 深色模式、毛玻璃 (Glassmorphism) 與大字體 RWD 樣式表
├── script.js         # 兩步驟即時克數換算引擎、20款分類配方、89項原料庫與12款成本分析
├── assets/
│   └── hero.jpg      # 專案視覺烘焙工藝圖
└── README.md         # GitHub Pages 部署與操作說明
```

## ✨ 核心特色與分頁架構

1. **🐱 3CatsMomBakery 專屬精簡頂部導覽列（三大核心分頁）**
   - **⚖️ 配方計算器**：首頁兩步驟極簡速查，專供現場門市銷售與廚房備料大字秤重使用。
     - **STEP 1 分類品項與數量**：四大分類（經典吐司肉桂捲、人氣軟歐鹹軟法、法式常溫甜點、自製酵種內餡），僅保留超大字體「欲製作數量（整數）」控制。
     - **STEP 2 即時原料克數**：超大字體即時顯示換算克數，內含自製波蘭種、老麵、湯種、乳酪餡自動同步拆解。
   - **🌾 原物料資料庫（密碼 0410 保護）**：89 項完整建檔，支援關鍵字搜尋、類別篩選與採購價格即時模擬。
   - **📊 成本總攬（密碼 0410 保護）**：12 款主力品項成本結構圖表（食材、包材、人工、電費）與定價利潤分析。
2. **📱 iPhone & iPad 手機優先、深色模式與毛玻璃美學**
   - 頂部導覽與底部 Dock 均精簡為三大分頁，文字不換行、按鈕超大好點選，支援「加入主畫面」全螢幕原生 App 操作。
