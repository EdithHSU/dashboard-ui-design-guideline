import React from "react";

// variant: "pill" | "filled" | "action"
// tone: "default" | "success" | "warn" | "error"（僅 pill / filled 使用）
export default function StatusCard({
  variant = "pill",
  tone = "default",
  label,
  value,
  hasCta = true,
  ctaLabel = "詳細",
}) {
  const toneClass = tone === "default" ? "" : tone;

  if (variant === "filled") {
    return pug`
      .status-card.filled(className=${toneClass})
        .status-card-label= label
        .status-card-value= value
    `;
  }

  if (variant === "action") {
    return pug`
      .status-card.action
        .status-card-label= label
        .status-card-row
          span.status-card-text= value
          if hasCta
            button.status-card-chip(type="button")
              = ctaLabel
              span.chevron ›
    `;
  }

  return pug`
    .status-card
      .status-card-label= label
      span.status-pill(className=${toneClass})= value
  `;
}
