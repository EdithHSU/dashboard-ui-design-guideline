import React from "react";
import SectionHead from "../components/SectionHead.jsx";
import { isHexLight, copyToClipboard } from "../lib/color.js";
import { CHART_BASIC, CHART_EXT } from "../data/colors.js";

export default function ChartPage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 04
          h1
            | 圖表顏色
            span.h1-en Chart Color
          p 圖表顏色應適用於所有圖表類型中的各項目，並必須按照標記順序對應項目順序，不可隨意更改顏色排列。若項目數量超過預設組合，請使用進階圖表顏色組合，並依序循環使用。
      .section
        SectionHead(zh="預設圖表顏色組合" en="Default Chart Palette")
        .chart-strip
          each c, i in CHART_BASIC
            div(key=i style={ background: c.hex, color: isHexLight(c.hex) ? "#1a1a1a" : "#fff" })= c.hex.toUpperCase()
        .swatch-row(style={ marginTop: 16, gridTemplateColumns: "repeat(5, 1fr)" })
          each c, i in CHART_BASIC
            .swatch(
              key=i
              style={ background: c.hex, color: isHexLight(c.hex) ? "rgba(0,0,0,0.85)" : "#fff" }
              onClick=${(e) => copyToClipboard(c.hex, e.currentTarget)}
            )
              span.label Chart #{i + 1}
              span.hex= c.hex.toUpperCase()
      .section
        SectionHead(zh="進階圖表顏色組合" en="Extended Chart Palette")
        .swatch-row.wrap
          each hex, i in CHART_EXT
            .swatch(
              key=i
              style={ background: hex, color: isHexLight(hex) ? "rgba(0,0,0,0.85)" : "#fff" }
              onClick=${(e) => copyToClipboard(hex, e.currentTarget)}
            )
              span.label= "#" + String(i + 1).padStart(2, "0")
              span.hex= hex.toUpperCase()
  `;
}
