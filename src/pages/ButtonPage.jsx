import React from "react";
import ComponentDocLayout from "../components/ComponentDocLayout.jsx";
import { BUTTON_DOC } from "../data/components.js";

export default function ButtonPage() {
  const showcase = pug`
    .preview-row
      button.btn.btn-primary 主要操作
      button.btn.btn-secondary 次要操作
      button.btn.btn-text 文字按鈕
      button.btn.btn-disabled(disabled) 停用狀態
  `;

  return pug`
    ComponentDocLayout(...BUTTON_DOC showcase=showcase)
  `;
}
