// 顏色系統資料 — 暗色 / 淺色雙模式色票、語意色、互動狀態與圖表配色

// ── Dark mode ──
export const PRIMARY = [
  { step: 200, hex: "#B7FCC4" },
  { step: 300, hex: "#8ED99D" },
  { step: 400, hex: "#55D877" },
  { step: 500, hex: "#109D52" },
  { step: 600, hex: "#057C49" },
  { step: 700, hex: "#005933" },
];
export const SECONDARY = [
  { step: 200, hex: "#EEFCA9" },
  { step: 300, hex: "#D1E58C" },
  { step: 400, hex: "#ABCC4D" },
  { step: 500, hex: "#678542" },
  { step: 600, hex: "#466234" },
  { step: 700, hex: "#364F21" },
];
export const LAYOUT_MONO = [
  { step: 500, hex: "#3F3E3E" },
  { step: 600, hex: "#323030" },
  { step: 700, hex: "#282727" },
];
export const NEUTRAL = [
  { step: 400, hex: "#AFB4AE" },
  { step: 500, hex: "#868C84" },
];

// ── Light mode ──
export const PRIMARY_LIGHT = [
  { step: 500, hex: "#91C6E5" },
  { step: 600, hex: "#4687C2" },
  { step: 700, hex: "#004DA1" },
  { step: 800, hex: "#044183" },
  { step: 900, hex: "#073363" },
];
export const SECONDARY_LIGHT = [
  { step: 500, hex: "#8FD0D0" },
  { step: 600, hex: "#5EB2BB" },
  { step: 700, hex: "#0091A1" },
  { step: 800, hex: "#0C637B" },
  { step: 900, hex: "#165068" },
];
export const LIGHT_LAYOUT = [
  { step: 500, hex: "#EDEEF0" },
  { step: 600, hex: "#E5E6E9" },
  { step: 700, hex: "#DAE0E9" },
  { step: 800, hex: "#BFC9D6" },
];
export const LIGHT_NEUTRAL = [
  { step: 500, hex: "#697488" },
  { step: 600, hex: "#393B45" },
];

// ── Semantic & states ──
export const SEMANTIC = [
  { name: "Success", zh: "用於傳達成功狀態", swatches: [{ k: "Success 400", hex: "#0DB939" }, { k: "Success 800", hex: "#3B4D3D" }] },
  { name: "Warning", zh: "用於傳達需要注意的問題", swatches: [{ k: "Warning 400", hex: "#EFC313" }, { k: "Warning 800", hex: "#6B581A" }] },
  { name: "Error", zh: "用於傳達錯誤與異常狀態", swatches: [{ k: "Error 400", hex: "#ED5355" }, { k: "Error 800", hex: "#5E3031" }] },
  { name: "Info", zh: "用於傳達即時系統通知", swatches: [{ k: "Info 400", hex: "#1F78AD" }, { k: "Info 800", hex: "#21475F" }] },
  { name: "Disabled", zh: "用於傳達尚未啟用的功能狀態", swatches: [{ k: "Disabled 200", hex: "#D7DBE0" }, { k: "Disabled 400", hex: "#969BA0" }, { k: "Disabled 800", hex: "#565A5E" }] },
];

export const STATES = [
  { label: "Default 初始", desc: "元件初始顏色", token: "primary-400", hex: "#55D877" },
  { label: "Hover / Active 懸停與啟用", desc: "滑鼠移動到元素上時或使用者點擊元素時", token: "primary-300", hex: "#8ED99D" },
  { label: "Selected 已選擇", desc: "使用者點擊某元素後保持選取狀態", token: "primary-500", hex: "#109D52" },
  { label: "Focus 焦點", desc: "鍵盤（Tab）選擇時產生外框，可接收輸入", token: "primary-700 / 50%", hex: "rgba(0,89,51,0.5)" },
];

// ── Chart palettes ──
export const CHART_BASIC = [
  { hex: "#057C49" }, { hex: "#BCD771" }, { hex: "#466234" }, { hex: "#57908B" }, { hex: "#304E4B" },
];
export const CHART_EXT = [
  "#109D52", "#057C49", "#005933", "#BCD771", "#678542", "#466234", "#364F21", "#57908B", "#42625E", "#304E4B", "#203F3C",
];
