import React from "react";
import ComponentDocLayout from "../components/ComponentDocLayout.jsx";
import { STATUS_DOC } from "../data/components.js";

export default function StatusPage() {
  const showcase = pug`
    .status-card-grid
      .grid-section
        .grid-title 標籤樣式
        .status-card-cols-2
          .status-card
            .status-card-label 車站運轉
            span.status-pill 預設
          .status-card
            .status-card-label 車站運轉
            span.status-pill.success 正常
          .status-card
            .status-card-label 車站運轉
            span.status-pill.warn 警告
          .status-card
            .status-card-label 車站運轉
            span.status-pill.error 異常
      .grid-section
        .grid-title 背景色樣式
        .status-card-cols-2
          .status-card.filled
            .status-card-label 車站運轉
            .status-card-value 預設
          .status-card.filled.success
            .status-card-label 車站運轉
            .status-card-value 正常
          .status-card.filled.warn
            .status-card-label 車站運轉
            .status-card-value 警告
          .status-card.filled.error
            .status-card-label 車站運轉
            .status-card-value 異常
      .grid-section
        .grid-title 文字樣式
        .status-card-cols-2
          .status-card.action
            .status-card-label 運轉影響
            .status-card-row
              span.status-card-text 變更運轉
              button.status-card-chip(type="button")
                | 詳細
                span.chevron ›
  `;

  const showcaseSub = "預設顯示正常、異常，或任一已定義的標籤值。標籤內容文字較多時建議使用版面「標題置左上」的版本。CTA的配置僅適用於標題置右上的元件樣式。";

  return pug`
    ComponentDocLayout(...STATUS_DOC showcase=showcase showcaseSub=showcaseSub)
  `;
}
