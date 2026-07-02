import React from "react";
import ComponentDocLayout from "../components/ComponentDocLayout.jsx";
import { BADGE_DOC } from "../data/components.js";

export default function BadgePage() {
  const showcase = pug`
    .preview-row
      span.badge.badge-success 運行中
      span.badge.badge-warn 警示
      span.badge.badge-error 異常
      span.badge.badge-info 通知
      span.badge.badge-disabled 停用
  `;

  return pug`
    ComponentDocLayout(...BADGE_DOC showcase=showcase)
  `;
}
