import React from "react";
import ComponentDocLayout from "../components/ComponentDocLayout.jsx";
import { FIELD_DOC } from "../data/components.js";

export default function FormFieldPage() {
  const showcase = pug`
    .preview-row(style={ gap: 24, alignItems: "flex-start" })
      .field
        label 使用者名稱
        input(placeholder="請輸入姓名" defaultValue="王小明")
      .field
        label 站別選擇
        select
          option 臺北車站
          option 板橋車站
          option 桃園車站
  `;

  return pug`
    ComponentDocLayout(...FIELD_DOC showcase=showcase)
  `;
}
