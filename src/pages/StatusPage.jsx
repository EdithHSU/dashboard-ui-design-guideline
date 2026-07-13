import React, { useState } from "react";
import ComponentDocLayout from "../components/ComponentDocLayout.jsx";
import StatusCard from "../components/StatusCard.jsx";
import { STATUS_DOC } from "../data/components.js";

const STATE_LABELS = {
  default: "預設",
  success: "正常",
  warn: "警告",
  error: "異常",
};

const TONES = ["default", "success", "warn", "error"];

export default function StatusPage() {
  const [tab, setTab] = useState("playground");
  const [style, setStyle] = useState("pill");
  const [state, setState] = useState("success");
  const [hasCta, setHasCta] = useState(true);

  const stateLabel = STATE_LABELS[state];
  const cardLabel = style === "action" ? "運轉影響" : "車站運轉";

  const showcase = pug`
    div
      .showcase-tabs
        button.showcase-tab(
          type="button"
          className=${tab === "playground" ? "active" : ""}
          onClick=${() => setTab("playground")}
        ) 互動預覽
        button.showcase-tab(
          type="button"
          className=${tab === "static" ? "active" : ""}
          onClick=${() => setTab("static")}
        ) 樣式一覽

      //- 樣式一覽
      if tab === "static"
        .status-card-grid
          .grid-section
            .grid-title 標籤樣式
            .status-card-cols-2
              each t in TONES
                StatusCard(key=t variant="pill" tone=t label="車站運轉" value=${STATE_LABELS[t]})
          .grid-section
            .grid-title 背景色樣式
            .status-card-cols-2
              each t in TONES
                StatusCard(key=t variant="filled" tone=t label="車站運轉" value=${STATE_LABELS[t]})
          .grid-section
            .grid-title 文字樣式
            .status-card-cols-2
              StatusCard(variant="action" label="運轉影響" value="變更運轉")
      //- 互動預覽
      else
        .playground
          .playground-controls
            .field
              label 選擇樣式
              select(value=${style} onChange=${(e) => setStyle(e.target.value)})
                option(value="pill") 標籤樣式
                option(value="filled") 背景色樣式
                option(value="action") 文字樣式
            .field
              label 狀態
              select(value=${state} onChange=${(e) => setState(e.target.value)})
                option(value="default") 預設
                option(value="success") 正常
                option(value="warn") 警告
                option(value="error") 異常
            if style === "action"
              .field
                label 有無CTA按鈕
                select(value=${hasCta ? "yes" : "no"} onChange=${(e) => setHasCta(e.target.value === "yes")})
                  option(value="yes") 有
                  option(value="no") 無
          .playground-preview
            StatusCard(variant=style tone=state label=cardLabel value=stateLabel hasCta=hasCta)
  `;

  const showcaseSub = "預設顯示正常、異常，或任一已定義的標籤值。標籤內容文字較多時建議使用版面「標題置左上」的版本。CTA的配置僅適用於標題置右上的元件樣式。";

  return pug`
    ComponentDocLayout(...STATUS_DOC showcase=showcase showcaseSub=showcaseSub)
  `;
}
