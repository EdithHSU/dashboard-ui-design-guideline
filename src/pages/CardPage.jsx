import React from "react";
import ComponentDocLayout from "../components/ComponentDocLayout.jsx";
import { CARD_DOC } from "../data/components.js";

const STAT_CARDS = [
  { t: "列車營運", v: "98.7%", c: "var(--primary-300)" },
  { t: "今日載客數", v: "412,308", c: "#fff" },
  { t: "異常事件", v: "3", c: "var(--error-400)" },
];

export default function CardPage() {
  const showcase = pug`
    .preview-row(style={ gap: 16 })
      each s in STAT_CARDS
        .comp-card(key=s.t)
          .label= s.t
          .value(style={ color: s.c })= s.v
  `;

  return pug`
    ComponentDocLayout(...CARD_DOC showcase=showcase)
  `;
}
