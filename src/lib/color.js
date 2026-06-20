// 顏色與剪貼簿工具

// 以 YIQ 亮度判斷色票是否偏亮，用來決定前景文字要用深色或白色。
export function isHexLight(hex) {
  if (!hex.startsWith("#")) return false;
  let h = hex.slice(1);
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq > 165;
}

// 複製文字到剪貼簿，並在來源元素上短暫加上 .copied 動畫類別。
export function copyToClipboard(text, el) {
  try {
    navigator.clipboard.writeText(text);
  } catch (e) {
    /* clipboard 不可用時靜默略過 */
  }
  if (el) {
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 900);
  }
}
