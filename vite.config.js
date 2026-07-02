import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Pug-in-React 透過 babel-plugin-transform-react-pug 在編譯期把
// pug`...` 標籤模板轉成 JSX，因此走 @vitejs/plugin-react 的 babel 管線。
export default defineConfig({
  // 專案型 GitHub Pages 的路徑為 /<repo>/，資源 URL 需帶此前綴才不會 404。
  base: "/dashboard-ui-design-guideline/",
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-transform-react-pug"],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      // Bootstrap 內部使用了已棄用的 Sass 顏色函式，quietDeps 只隱藏
      // 第三方套件（node_modules）發出的棄用警告，不影響自身程式碼的檢查。
      scss: { quietDeps: true },
    },
  },
});
