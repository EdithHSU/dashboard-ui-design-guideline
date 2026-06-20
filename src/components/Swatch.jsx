import React from "react";
import { isHexLight, copyToClipboard } from "../lib/color.js";

export default function Swatch({ step, hex, suffix }) {
  const fg = isHexLight(hex) ? "rgba(0,0,0,0.85)" : "#fff";
  const label = suffix ? `${step} ${suffix}` : String(step);

  return pug`
    .swatch(
      style={ background: hex, color: fg }
      onClick=${(e) => copyToClipboard(hex, e.currentTarget)}
    )
      span.label= label
      span.hex= hex.toUpperCase()
  `;
}
