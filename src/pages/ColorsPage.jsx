import React from "react";
import SectionHead from "../components/SectionHead.jsx";
import Swatch from "../components/Swatch.jsx";
import { PRIMARY, SECONDARY, LAYOUT_MONO, NEUTRAL } from "../data/colors.js";

export default function ColorsPage() {
  return pug`
    div
      .hero
        div
          span.meta-pill FOUNDATIONS · 01
          h1
            | 顏色
            span.h1-en Colours
          p
            | 本系統介面使用主要顏色 (Primary Colors) 與次要顏色 (Secondary Colors) 呈現品牌的主要視覺元素，並增加設計的靈活性，主色為
            span.code primary-400
            | 。
      .section
        SectionHead(zh="品牌顏色" en="Brand Color")
        .subgroup-label 主要顏色 Primary Color
        .swatch-row
          each s in PRIMARY
            Swatch(key=s.step step=s.step hex=s.hex)
        .subgroup-label 次要顏色 Secondary Color
        .swatch-row
          each s in SECONDARY
            Swatch(key=s.step step=s.step hex=s.hex)
      .section
        SectionHead(
          zh="單色調"
          en="Monotone"
          sub="單色調使用於字體、邊框與背景等中性容器，有助於維持簡潔，讓主要與次要顏色更能突顯重要視覺資訊。"
        )
        .subgroup-label Layout Color (Mono)
        .swatch-row.cols-3
          each s in LAYOUT_MONO
            Swatch(key=s.step step=s.step hex=s.hex)
        .subgroup-label Font Color (Neutral)
        .swatch-row.cols-2
          each s in NEUTRAL
            Swatch(key=s.step step=s.step hex=s.hex)
  `;
}
