import React from "react";
import SectionHead from "../components/SectionHead.jsx";
import { TYPE_HEAD, TYPE_BODY } from "../data/typography.js";

const ZH_SPECS = [
  { meta: "Noto Sans TC · Bold", cls: "weight-bold" },
  { meta: "Noto Sans TC · Regular", cls: "weight-reg" },
  { meta: "Noto Sans TC · Light", cls: "weight-light" },
];

export default function TypePage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 05
          h1
            | 系統字體
            span.h1-en Typography
          p 本系統介面字體使用 思源繁黑體（Noto Sans TC）為中文字體，Roboto 為英文字體，並使用 Bold、Regular 與 Light 三種字重，加強資訊呈現效果。
      .section
        SectionHead(zh="字型" en="Font Family")
        .subgroup-label 中文字體 Noto Sans TC
        .specimen-grid
          each sp in ZH_SPECS
            .specimen(key=sp.meta)
              .meta= sp.meta
              .display(className=sp.cls) 鐵路雲平台
              p.desc 國營臺灣鐵路股份有限公司，通稱鐵路公司，是臺灣鐵路的營運機構。
        .subgroup-label 英文字體 Roboto
        .specimen-grid
          each w, i in ["Bold", "Regular", "Light"]
            .specimen(key=w)
              .meta Roboto · #{w}
              .display(style={ fontFamily: "var(--font-en)", fontWeight: i === 0 ? 700 : i === 1 ? 400 : 300 }) Roboto
              .glyphs(style={ fontWeight: i === 0 ? 700 : i === 1 ? 400 : 300 })
                | ABCDEFGHIJKLMNOPQRSTUVWXYZ
                br
                | abcdefghijklmnopqrstuvwxyz
                br
                | 0123456789
      .section
        SectionHead(
          zh="標題文字"
          en="Headings"
          sub="標題確立頁面內元素的重要性順序，幫助讀者快速瀏覽並找到相關內容。透過一致的比例與字重，區分不同級別的標題。"
        )
        .type-table
          .type-row.head
            span 標題文字
            span 字重 Weight
            span 尺寸 Size
            span 行高 Line
            span 預覽
          each t in TYPE_HEAD
            .type-row(key=t.name)
              span.name= t.name
              span.val= t.weight
              span.val= t.size
              span.val= t.lh
              span.preview(style={ fontWeight: t.weight.includes("Bold") ? 700 : t.weight.includes("Light") ? 300 : 400, fontSize: t.size, lineHeight: 1.2 })= t.preview
      .section
        SectionHead(zh="內容文字" en="Body" sub="內文適用於常規內容的標準字體樣式。")
        .type-table
          .type-row.head
            span 樣式
            span 字重 Weight
            span 尺寸 Size
            span 行高 Line
            span 預覽
          each t in TYPE_BODY
            .type-row(key=t.name)
              span.name= t.name
              span.val= t.weight
              span.val= t.size
              span.val= t.lh
              span.preview(style={ fontWeight: t.weight.includes("Bold") ? 700 : t.weight.includes("Light") ? 300 : 400, fontSize: t.size, lineHeight: t.lh })= t.preview
  `;
}
