import React from "react";
import SectionHead from "../components/SectionHead.jsx";
import { COMPONENT_INDEX } from "../data/components.js";

export default function ComponentsPage({ onNav }) {
  return pug`
    div
      .hero
        div
          span.meta-pill PATTERNS · 08
          h1
            | 元件總覽
            span.h1-en Components
          p 套用顏色、字體與間距規範後產出的標準元件。點選下方卡片進入各元件的展示、使用規範、可用性規範與間距規格。
      .section
        SectionHead(
          zh="元件目錄"
          en="Component Index"
          sub="每個元件皆有獨立頁面，包含元件展示、使用規範、可用性規範（Accessibility）以及間距與規格表。"
        )
        .cards
          each c in COMPONENT_INDEX
            .card(key=c.id onClick=${() => onNav(c.id)})
              .ico= c.num
              h3= c.label
              .en= c.en
              p= c.desc
  `;
}
