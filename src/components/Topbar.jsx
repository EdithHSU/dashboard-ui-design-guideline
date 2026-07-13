import React, { useMemo } from "react";
import { NAV } from "../data/nav.js";

export default function Topbar({ active }) {
  const labels = useMemo(() => {
    for (const g of NAV) for (const i of g.items) if (i.id === active) return { group: g.label, page: i.label };
    return { group: "—", page: "—" };
  }, [active]);

  return pug`
    .topbar
      .crumbs
        span DESIGN SYSTEM
        span.sep /
        span= labels.group
        span.sep /
        span.now= labels.page
      .topbar-actions
        .search
          span(style={ color: "var(--neutral-400)", fontSize: 14 }) ⌕
          input(placeholder="搜尋規範與元件…")
        span.toggle
          span.swatch(style={ background: "#55D877" })
          | Dark Mode
  `;
}
