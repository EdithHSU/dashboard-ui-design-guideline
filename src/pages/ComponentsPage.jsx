import React from "react";
import SectionHead from "../components/SectionHead.jsx";

const STAT_CARDS = [
  { t: "列車營運", v: "98.7%", c: "var(--primary-300)" },
  { t: "今日載客數", v: "412,308", c: "#fff" },
  { t: "異常事件", v: "3", c: "var(--error-400)" },
];

export default function ComponentsPage() {
  return pug`
    div
      .hero
        div
          span.meta-pill PATTERNS · 08
          h1
            | 元件範例
            span.h1-en Components
          p 套用顏色、字體與間距規範後產出的標準元件範例。完整元件庫請參閱 Pattern Library。
      .section
        SectionHead(zh="按鈕" en="Buttons")
        .preview
          .preview-row
            button.btn.btn-primary 主要操作
            button.btn.btn-secondary 次要操作
            button.btn.btn-text 文字按鈕
            button.btn.btn-disabled(disabled) 停用狀態
      .section
        SectionHead(zh="表單欄位" en="Form fields")
        .preview
          .preview-row(style={ gap: 24, alignItems: "flex-start" })
            .field
              label 使用者名稱
              input(placeholder="請輸入姓名" defaultValue="王小明")
            .field
              label 站別選擇
              select
                option 臺北車站
                option 板橋車站
                option 桃園車站
      .section
        SectionHead(zh="狀態徽章" en="Status badges")
        .preview
          .preview-row
            span.badge.badge-success 運行中
            span.badge.badge-warn 警示
            span.badge.badge-error 異常
            span.badge.badge-info 通知
            span.badge.badge-disabled 停用
      .section
        SectionHead(zh="卡片" en="Cards")
        .preview
          .preview-row(style={ gap: 16 })
            each s in STAT_CARDS
              div(key=s.t style={ background: "var(--mono-surface-2)", borderRadius: 10, padding: 20, minWidth: 200, border: "1px solid #4a4848" })
                div(style={ fontSize: 12, color: "var(--neutral-300)", letterSpacing: "0.04em" })= s.t
                div(style={ fontFamily: "var(--font-en)", fontSize: 28, fontWeight: 700, color: s.c, marginTop: 6 })= s.v
  `;
}
