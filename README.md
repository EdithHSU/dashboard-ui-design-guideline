# 鐵路雲系統介面 · 設計規範閱覽平台

Dashboard UI Design Guideline — 以 React 建置的設計規範閱覽網站，涵蓋色彩、字體、間距、格線、元件與圖表等章節。

## 公開網址

| 項目 | 連結 |
|------|------|
| GitHub Pages | https://edithhsu.github.io/dashboard-ui-design-guideline/ |
| GitHub 儲存庫 | https://github.com/EdithHSU/dashboard-ui-design-guideline |

> 推送到 `main` 分支後，GitHub Actions 會自動建置並部署至 GitHub Pages。

## 專案環境

| 項目 | 版本 / 說明 |
|------|-------------|
| Node.js | **20**（CI 與建議本機版本） |
| 套件管理 | npm |
| 框架 | React 18 |
| 建置工具 | Vite 4 |
| 樣式 | Sass (SCSS) |
| 模板 | Pug-in-React（`babel-plugin-transform-react-pug`） |

## 快速開始

### 安裝相依套件

```bash
npm install
```

若需與 CI 完全一致，可使用：

```bash
npm ci
```

### 本機開發

```bash
npm run dev
```

啟動 Vite 開發伺服器，預設為 `http://localhost:5173/dashboard-ui-design-guideline/`（`base` 路徑與 GitHub Pages 一致）。

### 建置正式版

```bash
npm run build
```

產出靜態檔案至 `dist/` 目錄。

### 預覽建置結果

```bash
npm run preview
```

在本機預覽 `dist/` 建置後的網站。

## npm 指令一覽

| 指令 | 說明 |
|------|------|
| `npm install` | 安裝 `package.json` 中的相依套件 |
| `npm ci` | 依 `package-lock.json` 乾淨安裝（適合 CI 或重現環境） |
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產版本至 `dist/` |
| `npm run preview` | 預覽建置後的靜態網站 |

## 部署

部署流程定義於 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)：

1. 推送至 `main` 分支（或手動觸發 workflow）
2. 執行 `npm ci` 與 `npm run build`
3. 將 `dist/` 上傳並發布至 GitHub Pages

Vite 的 `base` 設定為 `/dashboard-ui-design-guideline/`，以符合 GitHub Pages 專案頁的路徑前綴。

## 專案結構（摘要）

```
├── src/
│   ├── components/   # 共用元件
│   ├── pages/        # 各規範章節頁面
│   ├── styles/       # SCSS 樣式
│   └── data/         # 靜態資料
├── index.html
├── vite.config.js
└── package.json
```
