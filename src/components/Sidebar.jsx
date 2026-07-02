import React from "react";
import { NAV } from "../data/nav.js";

// Pug 寫法：縮排即層級，.class / #id 為元素簡寫，each…in 取代 .map()。
export default function Sidebar({ active, onNav }) {
  return pug`
    aside.sidebar
      .sidebar-brand
        .logo
          .logo-mark TR
          div
            .name 鐵路雲平台
            .ver DESIGN GUIDELINE · v2.0
      each group in NAV
        .nav-group(key=group.label)
          .nav-group-label= group.label
          each item in group.items
            button.nav-item(key=item.id className=${active === item.id ? "active" : ""} onClick=${() => onNav(item.id)})
              span= item.label
              span.num= item.num
  `;
}
