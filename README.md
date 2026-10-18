# 🥐 Jasmine's Bakery Studio — 職人烘焙動態配方與成本中樞

Apple 官網深色毛玻璃風格（Hero、Glassmorphism、Spring 動畫）烘焙管理 Dashboard，專為 **iPhone** 與 **iPad** 觸控操作最佳化設計，完整同步 [Jasmine's recipe Google 試算表](https://docs.google.com/spreadsheets/d/1jDieeGiKFCe8vaAAr6H7entZuC3gUYEQCYz-O3LkZuo/edit?usp=sharing) 四大核心分頁。

## 📁 專案結構 (GitHub Repository Structure)

```text
jasmine-bakery-dashboard/
├── index.html        # 主頁面結構（支援 iOS/iPadOS Web App 全螢幕 Meta 設定）
├── style.css         # Apple 深色模式、毛玻璃 (Glassmorphism) 與 RWD 響應式樣式表
├── script.js         # 動態配方比例換算引擎、59項原料庫、排程彙整與成本圖表邏輯
├── assets/
│   └── hero.jpg      # 主視覺烘焙工藝攝影圖
└── README.md         # GitHub Pages 部署與 iPhone/iPad 安裝說明
```

## ✨ 核心功能

1. **⚖️ 動態配方計算器（彈性調整製作份數與數量）**
   - 支援「**依本次欲製作麵包個數（條/顆）**」與「**依製作份數（批次倍率）**」雙向即時連動換算。
   - 醒目顯示**核心麵粉與奶油乳脂即時克數**，並提供「**依現有單一原料克數反推可製作份數**」與「**廚房大字秤重打勾模式**」。
2. **📖 經典配方庫 & 今日多品項排程總表**
   - 內建生吐司、肉桂捲、檸檬磅蛋糕、瑪德蓮、費南雪與波蘭種 6 款配方，支援多品項同時排程並跨配方合併計算總備料克數。
3. **🌾 原料資料庫（59 項完整建檔）**
   - 支援分類篩選、供應商篩選、關鍵字搜尋與**互動式採購價格模擬**。
4. **📊 成本與定價總覽**
   - 完整呈現單件食材、包材、人工（$196/hr）、電費（$5/hr）成本結構圖表與定價擴產模擬器。

## 🚀 部署至 GitHub Pages

```bash
git init
git add index.html style.css script.js assets/hero.jpg README.md
git commit -m "feat: initialize Jasmine Bakery Apple-style dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/jasmine-bakery-dashboard.git
git push -u origin main
```

於 GitHub Repository 進入 **Settings ➔ Pages**，將 Source 設為 `main` 分支即可透過網址於 iPhone / iPad Safari 開啟並「加入主畫面」。
