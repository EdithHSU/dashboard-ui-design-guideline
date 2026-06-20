import React from "react";
import SectionHead from "../components/SectionHead.jsx";

const STATS = [
  { num: "8px", lbl: "基礎間距系統" },
  { num: "12", lbl: "欄位網格" },
  { num: "3", lbl: "字重層級" },
  { num: "2", lbl: "主題模式" },
];

const CARDS = [
  { id: "colors", ico: "01", h3: "顏色系統", en: "Colors · Brand · Semantic", p: "品牌主色、次色、單色調與語意色，包含暗色與淺色雙模式的使用情境。" },
  { id: "type", ico: "05", h3: "字體樣式", en: "Typography", p: "使用 Noto Sans TC 與 Roboto 雙字族，建立中英並陳的閱讀層級。" },
  { id: "spacing", ico: "06", h3: "間距與網格", en: "Spacing · Grid", p: "以 8px 為基礎倍數的間距，搭配 12 欄響應式網格，讓畫面節奏一致。" },
  { id: "states", ico: "03", h3: "互動狀態", en: "Interactive States", p: "Default、Hover、Selected、Focus 與 Disabled 的選色邏輯，傳達清晰反饋。" },
  { id: "chart", ico: "04", h3: "圖表顏色", en: "Chart Color", p: "專為資料視覺化設計的色彩組合，支援預設與進階兩種選色策略。" },
  { id: "components", ico: "08", h3: "元件範例", en: "Components", p: "套用上述規範後產出的標準元件 — 按鈕、輸入、徽章與狀態提示。" },
];

export default function Overview({ onNav }) {
  return pug`
    div
      .hero
        div
          span.meta-pill VERSION 2.0 · 2026
          h1
            | 系統介面設計規範
            span.h1-en Design Guideline
          p 本文件定義鐵路雲平台介面的視覺語言與互動規則 — 涵蓋顏色、字體、間距、網格與互動狀態，協助設計師與工程師建立一致、可預期、易於維護的產品體驗。
      .stats
        each s in STATS
          .stat(key=s.lbl)
            .num= s.num
            .lbl= s.lbl
      .section(style={ marginTop: 56 })
        SectionHead(
          zh="閱讀指引"
          en="How to read"
          sub="本規範以基礎元素 (Foundations) 為起點，逐步堆疊出元件與佈局。建議按章節順序閱讀，每節包含視覺示例與可複製的設計權杖 (Design Tokens)。"
        )
        .cards
          each c in CARDS
            .card(key=c.id onClick=${() => onNav(c.id)})
              .ico= c.ico
              h3= c.h3
              .en= c.en
              p= c.p
  `;
}
