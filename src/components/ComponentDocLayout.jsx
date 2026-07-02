import React from "react";
import SectionHead from "./SectionHead.jsx";

export default function ComponentDocLayout({ meta, usage, a11y, specs, showcase, showcaseSub }) {
  return pug`
    div
      .hero
        div
          span.meta-pill= meta.pill
          h1
            = meta.title
            span.h1-en= meta.titleEn
          p= meta.desc
      .section
        SectionHead(zh="元件展示" en="Showcase" sub=showcaseSub)
        .preview
          = showcase
      .section
        SectionHead(zh="使用規範" en="Usage Guidelines")
        ul.guideline-list
          each item in usage
            li(key=item)= item
      .section
        SectionHead(zh="可用性規範" en="Accessibility")
        ul.guideline-list
          each item in a11y
            li(key=item)= item
      .section
        SectionHead(zh="間距與規格" en="Spacing & Specs")
        .spec-table
          .spec-row.head
            span Token
            span 數值
            span 說明
          each row in specs
            .spec-row(key=row.token)
              span.token= row.token
              span.val= row.value
              span.note= row.note
  `;
}
