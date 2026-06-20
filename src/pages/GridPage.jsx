import React from "react";
import SectionHead from "../components/SectionHead.jsx";

const COLS = Array.from({ length: 12 }, (_, i) => i + 1);

const BREAKPOINTS = [
  ["xl 大桌面", "Desktop XL", "1440px", "12", "56px"],
  ["lg 桌面", "Desktop", "1280px", "12", "40px"],
  ["md 平板", "Tablet", "768px", "8", "24px"],
  ["sm 手機", "Mobile", "360px", "4", "16px"],
];

export default function GridPage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 07
          h1
            | 網格系統
            span.h1-en Grid System
          p 本系統採用 12 欄響應式網格，搭配側邊導覽與內容區分區，提供穩定的版面節奏。Gutter 預設為 16px，邊距 (Margin) 為 24–56px。
      .section
        SectionHead(zh="12 欄網格" en="12-column Grid")
        .grid-demo
          each n in COLS
            .grid-col(key=n)= n
      .section
        SectionHead(
          zh="斷點"
          en="Breakpoints"
          sub="響應式斷點對應鐵路雲平台主要的桌面與平板使用情境。"
        )
        .type-table
          .type-row.head
            span 名稱
            span 裝置
            span 最小寬
            span 欄位
            span 邊距
          each r in BREAKPOINTS
            .type-row(key=r[0])
              span.name= r[0]
              span.val= r[1]
              span.val= r[2]
              span.val= r[3]
              span.val= r[4]
  `;
}
