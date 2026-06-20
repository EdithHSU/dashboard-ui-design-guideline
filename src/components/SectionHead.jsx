import React from "react";

export default function SectionHead({ zh, en, sub }) {
  return pug`
    .section-head
      .bar
      div
        h2
          = zh
          = " "
          span.en= en
        if sub
          .sub= sub
  `;
}
