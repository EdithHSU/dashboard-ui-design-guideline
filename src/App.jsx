import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Overview from "./pages/Overview.jsx";
import ColorsPage from "./pages/ColorsPage.jsx";
import LightModePage from "./pages/LightModePage.jsx";
import StatesPage from "./pages/StatesPage.jsx";
import ChartPage from "./pages/ChartPage.jsx";
import TypePage from "./pages/TypePage.jsx";
import SpacingPage from "./pages/SpacingPage.jsx";
import GridPage from "./pages/GridPage.jsx";
import ComponentsPage from "./pages/ComponentsPage.jsx";

// id → 頁面元件對照表，取代原本一長串的條件渲染。
const PAGES = {
  overview: Overview,
  colors: ColorsPage,
  lightmode: LightModePage,
  states: StatesPage,
  chart: ChartPage,
  type: TypePage,
  spacing: SpacingPage,
  grid: GridPage,
  components: ComponentsPage,
};

export default function App() {
  const [active, setActive] = useState(() => {
    const h = window.location.hash.replace("#", "");
    return h && PAGES[h] ? h : "overview";
  });

  useEffect(() => {
    window.location.hash = active;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const Page = PAGES[active] || Overview;

  return pug`
    .app(data-screen-label=active)
      Sidebar(active=active onNav=setActive)
      .main
        Topbar(active=active)
        .content
          Page(onNav=setActive)
  `;
}
