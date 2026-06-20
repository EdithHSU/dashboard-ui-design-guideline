import React from "react";
import SectionHead from "../components/SectionHead.jsx";
import { isHexLight, copyToClipboard } from "../lib/color.js";
import { SEMANTIC, STATES } from "../data/colors.js";

export default function StatesPage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 03
          h1
            | 互動狀態
            span.h1-en Interactive States
          p 互動狀態運用顏色的色調與亮度，表現使用者與介面互動時的反饋。當使用者在元件上互動時，主色請使用 Primary 色票，以下為各狀態的參考選色。
      .section
        SectionHead(zh="語意狀態" en="Semantic States")
        .status-grid
          each s in SEMANTIC
            .status-item(key=s.name)
              h4= s.name
              .desc
                = s.zh
                | 。
              .status-swatches
                each sw in s.swatches
                  .status-sw(
                    key=sw.k
                    style={ background: sw.hex, color: isHexLight(sw.hex) ? "#1a1a1a" : "#fff" }
                    onClick=${(e) => copyToClipboard(sw.hex, e.currentTarget)}
                  )
                    span.lbl= sw.k
                    span.hx= sw.hex.toUpperCase()
      .section
        SectionHead(
          zh="元件互動色"
          en="Component States"
          sub="當使用者在元件上互動時，主色請使用 Primary 色票進行設計，以下為各互動狀態的參考選色。"
        )
        .state-grid
          each s in STATES
            .state-card(key=s.label)
              .label= s.label
              .desc= s.desc
              .pill(style={ background: s.hex, color: (s.hex.startsWith("#") && isHexLight(s.hex)) ? "#1a1a1a" : "#fff" })
                span(style={ fontSize: 11, fontWeight: 500 })= s.token
                span(style={ fontSize: 11, textAlign: "right", opacity: 0.95 })= s.hex.toUpperCase()
  `;
}
