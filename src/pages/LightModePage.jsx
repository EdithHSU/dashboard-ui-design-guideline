import React from "react";
import Swatch from "../components/Swatch.jsx";
import { PRIMARY_LIGHT, SECONDARY_LIGHT, LIGHT_LAYOUT, LIGHT_NEUTRAL } from "../data/colors.js";

export default function LightModePage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 02
          h1
            | 淺色模式
            span.h1-en Light Mode
          p
            | 因應不同的使用情境，將根據主要介面的色彩計畫，延伸出以亮色為基底的淺色色彩主題，提供使用者個人化選擇。淺色模式下，品牌主色為
            span.code primary-700 #004DA1
            | 。
      .section
        .lightmode-shell
          .mode-tag LIGHT MODE PREVIEW
          .subgroup-label 主要顏色 Primary Color
          .swatch-row.cols-5
            each s in PRIMARY_LIGHT
              Swatch(key=s.step step=s.step hex=s.hex)
          .subgroup-label 次要顏色 Secondary Color
          .swatch-row.cols-5
            each s in SECONDARY_LIGHT
              Swatch(key=s.step step=s.step hex=s.hex)
          .subgroup-label Layout Color (Mono)
          .swatch-row(style={ gridTemplateColumns: "repeat(4, minmax(0,1fr))", maxWidth: 720 })
            each s in LIGHT_LAYOUT
              Swatch(key=s.step step=s.step hex=s.hex)
          .subgroup-label Font Color (Neutral)
          .swatch-row.cols-2
            each s in LIGHT_NEUTRAL
              Swatch(key=s.step step=s.step hex=s.hex)
  `;
}
