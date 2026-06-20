import React from "react";
import SectionHead from "../components/SectionHead.jsx";
import { SPACING } from "../data/spacing.js";

const RADIUS = [
  { name: "radius/sm", val: "4px", radius: 4 },
  { name: "radius/md", val: "6px", radius: 6 },
  { name: "radius/lg", val: "8px", radius: 8 },
  { name: "radius/xl", val: "12px", radius: 12 },
];

const SHADOW = [
  { name: "shadow/xs", val: "0 1px 2px rgba(16,24,40,.05)", shadow: "0 1px 2px rgba(16,24,40,.05)" },
  { name: "shadow/sm", val: "0 4px 6px -2px rgba(16,24,40,.05)", shadow: "0 4px 6px -2px rgba(16,24,40,.05)" },
  { name: "shadow/md", val: "0 8px 16px -4px rgba(0,0,0,.25)", shadow: "0 8px 16px -4px rgba(0,0,0,.25)" },
  { name: "shadow/lg", val: "0 16px 28px -8px rgba(0,0,0,.4)", shadow: "0 16px 28px -8px rgba(0,0,0,.4)" },
];

export default function SpacingPage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 06
          h1
            | 間距
            span.h1-en Spacing
          p
            | 本系統以
            span.code 8px
            | 間距系統為基礎規劃間距應用，用於設計元件間的距離，以助於在用戶介面中建立一致性，並減少設計的複雜度。
      .section
        SectionHead(zh="間距系統" en="Spacing Scale")
        .spacing-table
          .spacing-row.head
            span 範例
            span 間距尺寸
            span 差異
          each s in SPACING
            .spacing-row(key=s.label)
              .spacing-bar(style={ width: s.px })
              span.size= s.label
              span.delta= s.delta
      .section
        SectionHead(
          zh="圓角與陰影"
          en="Radius & Shadow"
          sub="衍生 Tokens — 配合間距系統，定義元件的轉角圓潤度與層次。"
        )
        .token-grid
          each t in RADIUS
            .token-card(key=t.name)
              .demo
                .r-shape(style={ borderRadius: t.radius })
              div
                .name= t.name
                .val= t.val
        .token-grid(style={ marginTop: 16 })
          each t in SHADOW
            .token-card(key=t.name)
              .demo
                .r-shape(style={ borderRadius: 8, boxShadow: t.shadow })
              div
                .name= t.name
                .val= t.val
  `;
}
