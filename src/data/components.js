// 元件文件 — 導覽與各頁面規範內容

export const COMPONENT_INDEX = [
  {
    id: "comp-button",
    num: "00",
    label: "按鈕",
    en: "Buttons",
    desc: "觸發主要、次要與輔助操作的標準按鈕，含停用狀態。",
  },
  {
    id: "comp-field",
    num: "00",
    label: "表單欄位",
    en: "Form Fields",
    desc: "文字輸入與下拉選單，用於表單資料收集與篩選。",
  },
  {
    id: "comp-badge",
    num: "01",
    label: "狀態徽章",
    en: "Status Badges",
    desc: "以語意色標示運行、警示、異常等系統狀態。",
  },
  {
    id: "comp-card",
    num: "00",
    label: "卡片",
    en: "Cards",
    desc: "承載 KPI 數值與摘要資訊的統計卡片容器。",
  },
    {
    id: "comp-status",
    num: "01",
    label: "項目狀態",
    en: "Status",
    desc: "表現某一主題類別下的標籤、值、燈號。",
  },
];

export const BUTTON_DOC = {
  meta: {
    pill: "COMPONENTS · 09",
    title: "按鈕",
    titleEn: "Buttons",
    desc: "按鈕用於觸發頁面內的操作或導向。依視覺層級分為主要、次要與文字三種，並提供停用狀態以表示不可互動。",
  },
  usage: [
    "每個視覺區塊或對話框中，僅保留一個主要按鈕（Primary），避免使用者混淆優先操作。",
    "次要操作（Secondary）用於取消、返回或低優先度動作；文字按鈕（Text）用於輔助連結型操作。",
    "按鈕文案應使用動詞開頭，明確描述結果，例如「儲存設定」而非「確定」。",
    "停用狀態僅用於條件未滿足或權限不足時，並搭配 tooltip 或說明文字解釋原因。",
    "同一列並排按鈕時，主要按鈕置於最右側（閱讀順序的最後），符合操作確認慣例。",
  ],
  a11y: [
    "使用原生 button 元素，確保鍵盤 Tab 可聚焦、Enter / Space 可觸發。",
    "停用狀態使用 disabled 屬性，而非僅以樣式隱藏，避免螢幕閱讀器誤判為可點擊。",
    "Focus 狀態需有可見外框或對比強化，不可僅依賴 hover 變化傳達焦點位置。",
    "按鈕需有明確可讀的文字標籤；若僅有圖示，須提供 aria-label。",
    "主要與次要按鈕除顏色外，應以字重、邊框或尺寸建立足夠視覺區隔（WCAG 非僅靠色彩原則）。",
  ],
  specs: [
    { token: "高度", value: "40px", note: "padding 10px × 2 + line-height 20px" },
    { token: "水平內距", value: "20px", note: "Primary / Secondary；Text 為 12px" },
    { token: "垂直內距", value: "10px", note: "所有變體一致" },
    { token: "圓角", value: "6px", note: "radius/md" },
    { token: "字級 / 字重", value: "14px / 500", note: "Noto Sans TC" },
    { token: "圖示間距", value: "8px", note: "按鈕內 icon + label gap" },
    { token: "並排間距", value: "16px", note: "preview-row gap" },
    { token: "Primary 底色", value: "primary-400", note: "Hover → primary-300" },
    { token: "Secondary 邊框", value: "1px primary-400", note: "Hover 加 8% primary 底色" },
    { token: "Disabled 底色", value: "disabled-400", note: "opacity 0.8，cursor not-allowed" },
  ],
};

export const FIELD_DOC = {
  meta: {
    pill: "COMPONENTS · 10",
    title: "表單欄位",
    titleEn: "Form Fields",
    desc: "表單欄位包含標籤、輸入框或下拉選單，用於使用者輸入與選項篩選。樣式與間距遵循 8px 基礎系統。",
  },
  usage: [
    "每個欄位必須有可見的 label，置於輸入框上方；placeholder 不可取代 label。",
    "必填欄位在 label 旁標示「*」或「必填」，並在表單層級統一說明。",
    "下拉選單選項超過 7 項時，考慮改用搜尋式選單或 autocomplete。",
    "錯誤訊息顯示於欄位下方，使用 error 語意色，並說明如何修正。",
    "相關欄位可橫向並排，但窄螢幕下應改為單欄堆疊。",
  ],
  a11y: [
    "label 須透過 for / id 或 aria-labelledby 與輸入控件關聯。",
    "Focus 時邊框變為 primary-400，並加上 3px 外光暈，確保鍵盤使用者可辨識焦點。",
    "錯誤狀態除顏色外，須以文字說明；可加上 aria-invalid=\"true\" 與 aria-describedby。",
    "select 元素保留原生鍵盤操作（方向鍵選項、Enter 確認）。",
    "placeholder 對比度不可作為唯一提示，重要說明應寫在 label 或 helper text。",
  ],
  specs: [
    { token: "欄位最大寬度", value: "320px", note: "單欄表單預設" },
    { token: "Label 字級", value: "14px", note: "neutral-200" },
    { token: "Label → 輸入間距", value: "6px", note: "field gap" },
    { token: "輸入內距", value: "10px 12px", note: "上下 × 左右" },
    { token: "輸入字級", value: "14px", note: "Noto Sans TC" },
    { token: "圓角", value: "6px", note: "radius/md" },
    { token: "邊框", value: "1px #4a4848", note: "Focus → primary-400" },
    { token: "Focus 光暈", value: "0 0 0 3px", note: "primary 15% 透明度" },
    { token: "並排欄位間距", value: "24px", note: "preview-row gap" },
    { token: "底色", value: "mono-surface-2", note: "深色模式輸入背景" },
  ],
};

export const BADGE_DOC = {
  meta: {
    pill: "COMPONENTS · 11",
    title: "狀態徽章",
    titleEn: "Status Badges",
    desc: "徽章以語意色與前置圓點標示系統或設備狀態，適用於列表、表格與儀表板摘要。",
  },
  usage: [
    "徽章僅用於狀態標示，不可作為可點擊的操作按鈕。",
    "文案保持簡短（2～4 字），例如「運行中」「異常」；詳細說明放在 tooltip 或次要文字。",
    "同一畫面中語意色應一致：success 表正常、warn 表警示、error 表異常、info 表通知。",
    "避免在同一列堆疊過多徽章；超過 3 個時改以摘要或篩選呈現。",
    "停用狀態使用 badge-disabled，與 error / warn 区分，避免誤判為故障。",
  ],
  a11y: [
    "狀態資訊不可僅依賴顏色傳達，徽章內必須包含文字標籤。",
    "若徽章為即時狀態，容器可加上 aria-live=\"polite\" 讓螢幕閱讀器播報變更。",
    "圓點為裝飾性元素，須設定 aria-hidden=\"true\"，避免重複朗讀。",
    "確保文字與背景對比達 WCAG AA（4.5:1 以上）。",
    "色盲使用者依賴文案而非色相，禁用「紅色徽章」等純色彩描述作為唯一說明。",
  ],
  specs: [
    { token: "高度", value: "≈24px", note: "padding 4px × 2 + 字級 12px" },
    { token: "水平內距", value: "10px", note: "左右" },
    { token: "垂直內距", value: "4px", note: "上下" },
    { token: "圓角", value: "999px", note: "radius/pill" },
    { token: "字級 / 字重", value: "12px / 500", note: "Roboto" },
    { token: "圓點尺寸", value: "6px", note: "badge ::before" },
    { token: "圓點間距", value: "6px", note: "dot 與文字 gap" },
    { token: "並排間距", value: "16px", note: "preview-row gap" },
    { token: "Success 底色", value: "success 15%", note: "文字 success-400" },
    { token: "Warn 底色", value: "warning 12%", note: "文字 warning-400" },
    { token: "Error 底色", value: "error 12%", note: "文字 error-400" },
    { token: "Info 底色", value: "info 18%", note: "文字 #6CB7E0" },
  ],
};

export const CARD_DOC = {
  meta: {
    pill: "COMPONENTS · 12",
    title: "卡片",
    titleEn: "Cards",
    desc: "卡片用於承載 KPI 數值、統計摘要或區塊化內容，是儀表板最常見的容器元件。",
  },
  usage: [
    "每張卡片聚焦一個指標或主題，標題說明指標名稱，數值為視覺焦點。",
    "卡片群組並排時保持等寬或等比例，間距使用 16px（spacing-2）。",
    "需要進一步操作時，整卡可點擊，但須有 hover 狀態與 cursor 提示。",
    "數值異常時可改用語意色（如 error-400）強調，但全頁異常色不宜超過 20%。",
    "長標題應換行或截斷，避免挤压數值區域。",
  ],
  a11y: [
    "若卡片可點擊，使用 button 或 a 包裹，並提供描述性 aria-label。",
    "純展示型卡片使用 div，數值變動時外層可加 aria-live=\"polite\"。",
    "標題與數值須維持足夠對比；次要標題 neutral-300、主要數值至少 neutral-100 或更高對比。",
    "不可僅以顏色傳達數值好壞，須搭配標題、趨勢箭頭或輔助說明。",
    "鍵盤使用者聚焦可互動卡片時，須有 visible focus ring。",
  ],
  specs: [
    { token: "最小寬度", value: "200px", note: "統計卡預設" },
    { token: "內距", value: "20px", note: "spacing 2.5 × 8px" },
    { token: "圓角", value: "10px", note: "介於 radius/md 與 lg" },
    { token: "邊框", value: "1px #4a4848", note: "border-card" },
    { token: "底色", value: "mono-surface-2", note: "深色模式表面" },
    { token: "標題字級", value: "12px", note: "neutral-300，letter-spacing 0.04em" },
    { token: "數值字級", value: "28px / 700", note: "Roboto，margin-top 6px" },
    { token: "卡片間距", value: "16px", note: "並排 gap" },
    { token: "預覽區內距", value: "40px", note: "preview container" },
  ],
};

export const STATUS_DOC = {
  meta: {
    pill: "STATUS · 01",
    title: "項目狀態",
    titleEn: "Status",
    desc: "項目狀態用於表現某一主題類別下，單一或數個項目之內容展現‧提供顯示內容之狀態標籤、值、燈號，以快速強調資訊重點與比較項目差異。",
  },
  usage: [
    {
      heading: "- 最佳使用情境",
      items: [
        "呈現單一項目裡不同種類的複數資訊。",
        "使用 CTA 外連詳細資訊內容，保持區塊的內容整潔易讀。",
        "需於畫面中強調的靜態純文字內容。",
      ],
    },
    {
      heading: "- 在以下情況下應使用項目狀態",
      items: [
        "項目內的資訊種類繁雜。",
        "文字公告內容。",
      ],
    },
    {
      heading: "- 在以下情況下不應使用項目狀態",
      items: [
        "項目內容單一，若只需顯示狀態請使用「狀態徽章」元件。",
        "擁有數個項目，若有數個項目對應數個資訊種類建議使用表格呈現。",
      ],
    },
  ],
  a11y: [
    "狀態膠囊與實心樣式的數值不可僅依賴顏色傳達，須搭配文字標籤（如「正常」「警示」）。",
    "動作樣式中的「詳細」為可互動元素，須使用 button 或 a 包裹，並提供描述性 aria-label。",
    "標題與數值須維持足夠對比；次要標題 neutral-300、主要數值至少達 WCAG AA（4.5:1 以上）。",
    "狀態為即時更新時，容器可加上 aria-live=\"polite\" 讓螢幕閱讀器播報變更。",
    "鍵盤使用者聚焦「詳細」連結時，須有 visible focus ring。",
  ],
  specs: [
    { token: "卡片內距", value: "20px 24px", note: "status-card" },
    { token: "圓角", value: "10px", note: "radius/md 與 lg 之間" },
    { token: "邊框", value: "1px #4a4848", note: "border-card，filled 樣式無邊框" },
    { token: "膠囊內距", value: "10px 22px", note: "status-pill，圓角 999px" },
    { token: "標題字級", value: "16px / 500", note: "neutral-300；filled 樣式改為白色 700" },
    { token: "膠囊字級", value: "16px / 600", note: "status-pill" },
    { token: "數值字級", value: "24px / 700", note: "status-card-value，Roboto" },
    { token: "詳細連結", value: "14px", note: "status-card-chip，圓角 999px" },
    { token: "卡片間距", value: "16px", note: "status-card-grid 垂直 gap" },
  ],
};

