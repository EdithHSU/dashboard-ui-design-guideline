// Main app — 鐵路雲系統介面 設計規範閱覽平台
const { useState, useMemo, useEffect } = React;

// ─── Data ───
const PRIMARY = [
  { step: 200, hex: "#B7FCC4" },
  { step: 300, hex: "#8ED99D" },
  { step: 400, hex: "#55D877" },
  { step: 500, hex: "#109D52" },
  { step: 600, hex: "#057C49" },
  { step: 700, hex: "#005933" },
];
const SECONDARY = [
  { step: 200, hex: "#EEFCA9" },
  { step: 300, hex: "#D1E58C" },
  { step: 400, hex: "#ABCC4D" },
  { step: 500, hex: "#678542" },
  { step: 600, hex: "#466234" },
  { step: 700, hex: "#364F21" },
];
const LAYOUT_MONO = [
  { step: 500, hex: "#3F3E3E" },
  { step: 600, hex: "#323030" },
  { step: 700, hex: "#282727" },
];
const NEUTRAL = [
  { step: 400, hex: "#AFB4AE" },
  { step: 500, hex: "#868C84" },
];

// Light mode
const PRIMARY_LIGHT = [
  { step: 500, hex: "#91C6E5" },
  { step: 600, hex: "#4687C2" },
  { step: 700, hex: "#004DA1" },
  { step: 800, hex: "#044183" },
  { step: 900, hex: "#073363" },
];
const SECONDARY_LIGHT = [
  { step: 500, hex: "#8FD0D0" },
  { step: 600, hex: "#5EB2BB" },
  { step: 700, hex: "#0091A1" },
  { step: 800, hex: "#0C637B" },
  { step: 900, hex: "#165068" },
];
const LIGHT_LAYOUT = [
  { step: 500, hex: "#EDEEF0" },
  { step: 600, hex: "#E5E6E9" },
  { step: 700, hex: "#DAE0E9" },
  { step: 800, hex: "#BFC9D6" },
];
const LIGHT_NEUTRAL = [
  { step: 500, hex: "#697488" },
  { step: 600, hex: "#393B45" },
];

const SEMANTIC = [
  { name: "Success", zh: "用於傳達成功狀態", swatches: [{ k: "Success 400", hex: "#0DB939" }, { k: "Success 800", hex: "#3B4D3D" }] },
  { name: "Warning", zh: "用於傳達需要注意的問題", swatches: [{ k: "Warning 400", hex: "#EFC313" }, { k: "Warning 800", hex: "#6B581A" }] },
  { name: "Error", zh: "用於傳達錯誤與異常狀態", swatches: [{ k: "Error 400", hex: "#ED5355" }, { k: "Error 800", hex: "#5E3031" }] },
  { name: "Info", zh: "用於傳達即時系統通知", swatches: [{ k: "Info 400", hex: "#1F78AD" }, { k: "Info 800", hex: "#21475F" }] },
  { name: "Disabled", zh: "用於傳達尚未啟用的功能狀態", swatches: [{ k: "Disabled 200", hex: "#D7DBE0" }, { k: "Disabled 400", hex: "#969BA0" }, { k: "Disabled 800", hex: "#565A5E" }] },
];

const STATES = [
  { label: "Default 初始", desc: "元件初始顏色", token: "primary-400", hex: "#55D877" },
  { label: "Hover / Active 懸停與啟用", desc: "滑鼠移動到元素上時或使用者點擊元素時", token: "primary-300", hex: "#8ED99D" },
  { label: "Selected 已選擇", desc: "使用者點擊某元素後保持選取狀態", token: "primary-500", hex: "#109D52" },
  { label: "Focus 焦點", desc: "鍵盤（Tab）選擇時產生外框，可接收輸入", token: "primary-700 / 50%", hex: "rgba(0,89,51,0.5)" },
];

const CHART_BASIC = [
  { hex: "#057C49" }, { hex: "#BCD771" }, { hex: "#466234" }, { hex: "#57908B" }, { hex: "#304E4B" },
];
const CHART_EXT = [
  "#109D52","#057C49","#005933","#BCD771","#678542","#466234","#364F21","#57908B","#42625E","#304E4B","#203F3C"
];

const SPACING = [
  { label: "4px (0.25rem)", px: 4, delta: "+4" },
  { label: "8px (0.5rem)", px: 8, delta: "+4" },
  { label: "16px (1rem)", px: 16, delta: "+8" },
  { label: "24px (1.5rem)", px: 24, delta: "+8" },
  { label: "32px (2rem)", px: 32, delta: "+8" },
  { label: "40px (2.5rem)", px: 40, delta: "+8" },
  { label: "48px (3rem)", px: 48, delta: "+8" },
  { label: "64px (4rem)", px: 64, delta: "+16" },
  { label: "80px (5rem)", px: 80, delta: "+16" },
];

const TYPE_HEAD = [
  { name: "標題文字 H1", weight: "Bold 700", size: "32px", lh: "1", preview: "鐵路雲平台" },
  { name: "標題文字 H3", weight: "Regular 400", size: "40px", lh: "1.2", preview: "標題文字" },
  { name: "標題文字 H4", weight: "Regular 400", size: "18px", lh: "1", preview: "說明文字" },
  { name: "副標題文字 1", weight: "Bold 700", size: "24px", lh: "1", preview: "副標題" },
  { name: "副標題文字 2", weight: "Bold 700", size: "20px", lh: "1", preview: "副標題" },
];
const TYPE_BODY = [
  { name: "Body", weight: "Regular 400", size: "16px", lh: "1.8", preview: "本系統介面內文" },
  { name: "解說文字", weight: "Light 300", size: "12px", lh: "1.2", preview: "輔助說明文字" },
];

const NAV = [
  {
    label: "Overview",
    items: [
      { id: "overview", num: "00", label: "規範總覽" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { id: "colors", num: "01", label: "顏色系統" },
      { id: "lightmode", num: "02", label: "淺色模式" },
      { id: "states", num: "03", label: "狀態色與互動" },
      { id: "chart", num: "04", label: "圖表顏色" },
      { id: "type", num: "05", label: "字體樣式" },
      { id: "spacing", num: "06", label: "間距系統" },
      { id: "grid", num: "07", label: "網格系統" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "components", num: "08", label: "元件範例" },
    ],
  },
];

// ─── Components ───
function Sidebar({ active, onNav }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="logo">
          <div className="logo-mark">TR</div>
          <div>
            <div className="name">鐵路雲平台</div>
            <div className="ver">DESIGN GUIDELINE · v2.0</div>
          </div>
        </div>
        <div className="meta"><span className="dot"></span>系統介面設計規範</div>
      </div>
      {NAV.map(group => (
        <div className="nav-group" key={group.label}>
          <div className="nav-group-label">{group.label}</div>
          {group.items.map(item => (
            <button
              key={item.id}
              className={"nav-item" + (active === item.id ? " active" : "")}
              onClick={() => onNav(item.id)}
            >
              <span>{item.label}</span>
              <span className="num">{item.num}</span>
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}

function Topbar({ active }) {
  const labels = useMemo(() => {
    for (const g of NAV) for (const i of g.items) if (i.id === active) return { group: g.label, page: i.label };
    return { group: "—", page: "—" };
  }, [active]);
  return (
    <div className="topbar">
      <div className="crumbs">
        <span>DESIGN SYSTEM</span>
        <span className="sep">/</span>
        <span>{labels.group}</span>
        <span className="sep">/</span>
        <span className="now">{labels.page}</span>
      </div>
      <div className="topbar-actions">
        <div className="search">
          <span style={{ color: "var(--neutral-400)", fontSize: 13 }}>⌕</span>
          <input placeholder="搜尋規範與元件…" />
        </div>
        <span className="toggle"><span className="swatch" style={{ background: "#55D877" }}></span>Dark Mode</span>
      </div>
    </div>
  );
}

function copyToClipboard(text, el) {
  try { navigator.clipboard.writeText(text); } catch(e) {}
  if (el) {
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 900);
  }
}

function Swatch({ step, hex, suffix }) {
  const isLight = isHexLight(hex);
  const fg = isLight ? "rgba(0,0,0,0.85)" : "#fff";
  return (
    <div
      className="swatch"
      style={{ background: hex, color: fg }}
      onClick={(e) => copyToClipboard(hex, e.currentTarget)}
    >
      <span className="label">{step}{suffix ? ` ${suffix}` : ""}</span>
      <span className="hex">{hex.toUpperCase()}</span>
    </div>
  );
}

function isHexLight(hex) {
  if (!hex.startsWith("#")) return false;
  let h = hex.slice(1);
  if (h.length === 3) h = h.split("").map(c => c+c).join("");
  const r = parseInt(h.slice(0,2), 16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
  const yiq = (r*299 + g*587 + b*114) / 1000;
  return yiq > 165;
}

function SectionHead({ zh, en, sub }) {
  return (
    <div className="section-head">
      <div className="bar"></div>
      <div>
        <h2>{zh} <span className="en">{en}</span></h2>
        {sub && <div className="sub">{sub}</div>}
      </div>
    </div>
  );
}

// ─── Pages ───
function Overview({ onNav }) {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">VERSION 2.0 · 2026</span>
          <h1>系統介面設計規範<span className="h1-en">Design Guideline</span></h1>
          <p>本文件定義鐵路雲平台介面的視覺語言與互動規則 — 涵蓋顏色、字體、間距、網格與互動狀態，協助設計師與工程師建立一致、可預期、易於維護的產品體驗。</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat"><div className="num">8px</div><div className="lbl">基礎間距系統</div></div>
        <div className="stat"><div className="num">12</div><div className="lbl">欄位網格</div></div>
        <div className="stat"><div className="num">3</div><div className="lbl">字重層級</div></div>
        <div className="stat"><div className="num">2</div><div className="lbl">主題模式</div></div>
      </div>

      <div className="section" style={{ marginTop: 56 }}>
        <SectionHead zh="閱讀指引" en="How to read" sub="本規範以基礎元素 (Foundations) 為起點，逐步堆疊出元件與佈局。建議按章節順序閱讀，每節包含視覺示例與可複製的設計權杖 (Design Tokens)。" />
        <div className="cards">
          <div className="card" onClick={() => onNav("colors")}>
            <div className="ico">01</div>
            <h3>顏色系統</h3>
            <div className="en">Colors · Brand · Semantic</div>
            <p>品牌主色、次色、單色調與語意色，包含暗色與淺色雙模式的使用情境。</p>
          </div>
          <div className="card" onClick={() => onNav("type")}>
            <div className="ico">05</div>
            <h3>字體樣式</h3>
            <div className="en">Typography</div>
            <p>使用 Noto Sans TC 與 Roboto 雙字族，建立中英並陳的閱讀層級。</p>
          </div>
          <div className="card" onClick={() => onNav("spacing")}>
            <div className="ico">06</div>
            <h3>間距與網格</h3>
            <div className="en">Spacing · Grid</div>
            <p>以 8px 為基礎倍數的間距，搭配 12 欄響應式網格，讓畫面節奏一致。</p>
          </div>
          <div className="card" onClick={() => onNav("states")}>
            <div className="ico">03</div>
            <h3>互動狀態</h3>
            <div className="en">Interactive States</div>
            <p>Default、Hover、Selected、Focus 與 Disabled 的選色邏輯，傳達清晰反饋。</p>
          </div>
          <div className="card" onClick={() => onNav("chart")}>
            <div className="ico">04</div>
            <h3>圖表顏色</h3>
            <div className="en">Chart Color</div>
            <p>專為資料視覺化設計的色彩組合，支援預設與進階兩種選色策略。</p>
          </div>
          <div className="card" onClick={() => onNav("components")}>
            <div className="ico">08</div>
            <h3>元件範例</h3>
            <div className="en">Components</div>
            <p>套用上述規範後產出的標準元件 — 按鈕、輸入、徽章與狀態提示。</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ColorsPage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 01</span>
          <h1>顏色 <span className="h1-en">Colours</span></h1>
          <p>本系統介面使用主要顏色 (Primary Colors) 與次要顏色 (Secondary Colors) 呈現品牌的主要視覺元素，並增加設計的靈活性，主色為 <span className="code">primary-400</span>。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="品牌顏色" en="Brand Color" />
        <div className="subgroup-label">主要顏色 Primary Color</div>
        <div className="swatch-row">
          {PRIMARY.map(s => <Swatch key={s.step} {...s} />)}
        </div>
        <div className="subgroup-label">次要顏色 Secondary Color</div>
        <div className="swatch-row">
          {SECONDARY.map(s => <Swatch key={s.step} {...s} />)}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="單色調" en="Monotone" sub="單色調使用於字體、邊框與背景等中性容器，有助於維持簡潔，讓主要與次要顏色更能突顯重要視覺資訊。" />
        <div className="subgroup-label">Layout Color (Mono)</div>
        <div className="swatch-row cols-3">
          {LAYOUT_MONO.map(s => <Swatch key={s.step} {...s} />)}
        </div>
        <div className="subgroup-label">Font Color (Neutral)</div>
        <div className="swatch-row cols-2">
          {NEUTRAL.map(s => <Swatch key={s.step} {...s} />)}
        </div>
      </div>
    </>
  );
}

function LightModePage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 02</span>
          <h1>淺色模式 <span className="h1-en">Light Mode</span></h1>
          <p>因應不同的使用情境，將根據主要介面的色彩計畫，延伸出以亮色為基底的淺色色彩主題，提供使用者個人化選擇。淺色模式下，品牌主色為 <span className="code">primary-700 #004DA1</span>。</p>
        </div>
      </div>

      <div className="section">
        <div className="lightmode-shell">
          <div className="mode-tag">LIGHT MODE PREVIEW</div>
          <div className="subgroup-label">主要顏色 Primary Color</div>
          <div className="swatch-row cols-5">
            {PRIMARY_LIGHT.map(s => <Swatch key={s.step} {...s} />)}
          </div>
          <div className="subgroup-label">次要顏色 Secondary Color</div>
          <div className="swatch-row cols-5">
            {SECONDARY_LIGHT.map(s => <Swatch key={s.step} {...s} />)}
          </div>
          <div className="subgroup-label">Layout Color (Mono)</div>
          <div className="swatch-row" style={{ gridTemplateColumns: "repeat(4, minmax(0,1fr))", maxWidth: 720 }}>
            {LIGHT_LAYOUT.map(s => <Swatch key={s.step} {...s} />)}
          </div>
          <div className="subgroup-label">Font Color (Neutral)</div>
          <div className="swatch-row cols-2">
            {LIGHT_NEUTRAL.map(s => <Swatch key={s.step} {...s} />)}
          </div>
        </div>
      </div>
    </>
  );
}

function StatesPage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 03</span>
          <h1>互動狀態 <span className="h1-en">Interactive States</span></h1>
          <p>互動狀態運用顏色的色調與亮度，表現使用者與介面互動時的反饋。當使用者在元件上互動時，主色請使用 Primary 色票，以下為各狀態的參考選色。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="語意狀態" en="Semantic States" />
        <div className="status-grid">
          {SEMANTIC.map(s => (
            <div className="status-item" key={s.name}>
              <h4>{s.name}</h4>
              <div className="desc">{s.zh}。</div>
              <div className="status-swatches">
                {s.swatches.map(sw => {
                  const light = isHexLight(sw.hex);
                  return (
                    <div className="status-sw" key={sw.k} style={{ background: sw.hex, color: light ? "#1a1a1a" : "#fff" }} onClick={(e) => copyToClipboard(sw.hex, e.currentTarget)}>
                      <span className="lbl">{sw.k}</span>
                      <span className="hx">{sw.hex.toUpperCase()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="元件互動色" en="Component States" sub="當使用者在元件上互動時，主色請使用 Primary 色票進行設計，以下為各互動狀態的參考選色。" />
        <div className="state-grid">
          {STATES.map(s => {
            const light = s.hex.startsWith("#") && isHexLight(s.hex);
            return (
              <div className="state-card" key={s.label}>
                <div className="label">{s.label}</div>
                <div className="desc">{s.desc}</div>
                <div className="pill" style={{ background: s.hex, color: light ? "#1a1a1a" : "#fff" }}>
                  <span style={{ fontSize: 11, fontWeight: 500 }}>{s.token}</span>
                  <span style={{ fontSize: 11, textAlign: "right", opacity: 0.95 }}>{s.hex.toUpperCase()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ChartPage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 04</span>
          <h1>圖表顏色 <span className="h1-en">Chart Color</span></h1>
          <p>圖表顏色應適用於所有圖表類型中的各項目，並必須按照標記順序對應項目順序，不可隨意更改顏色排列。若項目數量超過預設組合，請使用進階圖表顏色組合，並依序循環使用。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="預設圖表顏色組合" en="Default Chart Palette" />
        <div className="chart-strip">
          {CHART_BASIC.map((c, i) => (
            <div key={i} style={{ background: c.hex, color: isHexLight(c.hex) ? "#1a1a1a" : "#fff" }}>
              {c.hex.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="swatch-row" style={{ marginTop: 16, gridTemplateColumns: "repeat(5, 1fr)" }}>
          {CHART_BASIC.map((c, i) => (
            <div key={i} className="swatch" style={{ background: c.hex, color: isHexLight(c.hex) ? "rgba(0,0,0,0.85)" : "#fff" }} onClick={(e) => copyToClipboard(c.hex, e.currentTarget)}>
              <span className="label">Chart {i+1}</span>
              <span className="hex">{c.hex.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="進階圖表顏色組合" en="Extended Chart Palette" />
        <div className="swatch-row wrap">
          {CHART_EXT.map((hex, i) => (
            <div key={i} className="swatch" style={{ background: hex, color: isHexLight(hex) ? "rgba(0,0,0,0.85)" : "#fff" }} onClick={(e) => copyToClipboard(hex, e.currentTarget)}>
              <span className="label">{`#${(i+1).toString().padStart(2, "0")}`}</span>
              <span className="hex">{hex.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function TypePage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 05</span>
          <h1>系統字體 <span className="h1-en">Typography</span></h1>
          <p>本系統介面字體使用 思源繁黑體（Noto Sans TC）為中文字體，Roboto 為英文字體，並使用 Bold、Regular 與 Light 三種字重，加強資訊呈現效果。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="字型" en="Font Family" />
        <div className="subgroup-label">中文字體 Noto Sans TC</div>
        <div className="specimen-grid">
          <div className="specimen">
            <div className="meta">Noto Sans TC · Bold</div>
            <div className="display weight-bold">鐵路雲平台</div>
            <p className="desc">國營臺灣鐵路股份有限公司，通稱鐵路公司，是臺灣鐵路的營運機構。</p>
          </div>
          <div className="specimen">
            <div className="meta">Noto Sans TC · Regular</div>
            <div className="display weight-reg">鐵路雲平台</div>
            <p className="desc">國營臺灣鐵路股份有限公司，通稱鐵路公司，是臺灣鐵路的營運機構。</p>
          </div>
          <div className="specimen">
            <div className="meta">Noto Sans TC · Light</div>
            <div className="display weight-light">鐵路雲平台</div>
            <p className="desc">國營臺灣鐵路股份有限公司，通稱鐵路公司，是臺灣鐵路的營運機構。</p>
          </div>
        </div>

        <div className="subgroup-label">英文字體 Roboto</div>
        <div className="specimen-grid">
          {["Bold","Regular","Light"].map((w, i) => (
            <div className="specimen" key={w}>
              <div className="meta">Roboto · {w}</div>
              <div className="display" style={{ fontFamily: "var(--font-en)", fontWeight: i===0 ? 700 : i===1 ? 400 : 300 }}>Roboto</div>
              <div className="glyphs" style={{ fontWeight: i===0 ? 700 : i===1 ? 400 : 300 }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                abcdefghijklmnopqrstuvwxyz<br/>
                0123456789
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="標題文字" en="Headings" sub="標題確立頁面內元素的重要性順序，幫助讀者快速瀏覽並找到相關內容。透過一致的比例與字重，區分不同級別的標題。" />
        <div className="type-table">
          <div className="type-row head">
            <span>標題文字</span><span>字重 Weight</span><span>尺寸 Size</span><span>行高 Line</span><span>預覽</span>
          </div>
          {TYPE_HEAD.map(t => {
            const fw = t.weight.includes("Bold") ? 700 : t.weight.includes("Light") ? 300 : 400;
            return (
              <div className="type-row" key={t.name}>
                <span className="name">{t.name}</span>
                <span className="val">{t.weight}</span>
                <span className="val">{t.size}</span>
                <span className="val">{t.lh}</span>
                <span className="preview" style={{ fontWeight: fw, fontSize: t.size, lineHeight: 1.2 }}>{t.preview}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="內容文字" en="Body" sub="內文適用於常規內容的標準字體樣式。" />
        <div className="type-table">
          <div className="type-row head">
            <span>樣式</span><span>字重 Weight</span><span>尺寸 Size</span><span>行高 Line</span><span>預覽</span>
          </div>
          {TYPE_BODY.map(t => {
            const fw = t.weight.includes("Bold") ? 700 : t.weight.includes("Light") ? 300 : 400;
            return (
              <div className="type-row" key={t.name}>
                <span className="name">{t.name}</span>
                <span className="val">{t.weight}</span>
                <span className="val">{t.size}</span>
                <span className="val">{t.lh}</span>
                <span className="preview" style={{ fontWeight: fw, fontSize: t.size, lineHeight: t.lh }}>{t.preview}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function SpacingPage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 06</span>
          <h1>間距 <span className="h1-en">Spacing</span></h1>
          <p>本系統以 <span className="code">8px</span> 間距系統為基礎規劃間距應用，用於設計元件間的距離，以助於在用戶介面中建立一致性，並減少設計的複雜度。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="間距系統" en="Spacing Scale" />
        <div className="spacing-table">
          <div className="spacing-row head">
            <span>範例</span><span>間距尺寸</span><span>差異</span>
          </div>
          {SPACING.map(s => (
            <div className="spacing-row" key={s.label}>
              <div className="spacing-bar" style={{ width: s.px }}></div>
              <span className="size">{s.label}</span>
              <span className="delta">{s.delta}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="圓角與陰影" en="Radius & Shadow" sub="衍生 Tokens — 配合間距系統，定義元件的轉角圓潤度與層次。" />
        <div className="token-grid">
          {[
            { name: "radius/sm", val: "4px", style: { borderRadius: 4 } },
            { name: "radius/md", val: "6px", style: { borderRadius: 6 } },
            { name: "radius/lg", val: "8px", style: { borderRadius: 8 } },
            { name: "radius/xl", val: "12px", style: { borderRadius: 12 } },
          ].map(t => (
            <div className="token-card" key={t.name}>
              <div className="demo"><div className="r-shape" style={t.style}></div></div>
              <div>
                <div className="name">{t.name}</div>
                <div className="val">{t.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="token-grid" style={{ marginTop: 16 }}>
          {[
            { name: "shadow/xs", val: "0 1px 2px rgba(16,24,40,.05)", style: { boxShadow: "0 1px 2px rgba(16,24,40,.05)" } },
            { name: "shadow/sm", val: "0 4px 6px -2px rgba(16,24,40,.05)", style: { boxShadow: "0 4px 6px -2px rgba(16,24,40,.05)" } },
            { name: "shadow/md", val: "0 8px 16px -4px rgba(0,0,0,.25)", style: { boxShadow: "0 8px 16px -4px rgba(0,0,0,.25)" } },
            { name: "shadow/lg", val: "0 16px 28px -8px rgba(0,0,0,.4)", style: { boxShadow: "0 16px 28px -8px rgba(0,0,0,.4)" } },
          ].map(t => (
            <div className="token-card" key={t.name}>
              <div className="demo"><div className="r-shape" style={{ borderRadius: 8, ...t.style }}></div></div>
              <div>
                <div className="name">{t.name}</div>
                <div className="val">{t.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function GridPage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">FOUNDATIONS · 07</span>
          <h1>網格系統 <span className="h1-en">Grid System</span></h1>
          <p>本系統採用 12 欄響應式網格，搭配側邊導覽與內容區分區，提供穩定的版面節奏。Gutter 預設為 16px，邊距 (Margin) 為 24–56px。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="12 欄網格" en="12-column Grid" />
        <div className="grid-demo">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="grid-col" key={i}>{i+1}</div>
          ))}
        </div>
      </div>

      <div className="section">
        <SectionHead zh="斷點" en="Breakpoints" sub="響應式斷點對應鐵路雲平台主要的桌面與平板使用情境。" />
        <div className="type-table">
          <div className="type-row head">
            <span>名稱</span><span>裝置</span><span>最小寬</span><span>欄位</span><span>邊距</span>
          </div>
          {[
            ["xl 大桌面", "Desktop XL", "1440px", "12", "56px"],
            ["lg 桌面", "Desktop", "1280px", "12", "40px"],
            ["md 平板", "Tablet", "768px", "8", "24px"],
            ["sm 手機", "Mobile", "360px", "4", "16px"],
          ].map(r => (
            <div className="type-row" key={r[0]}>
              <span className="name">{r[0]}</span>
              <span className="val">{r[1]}</span>
              <span className="val">{r[2]}</span>
              <span className="val">{r[3]}</span>
              <span className="val">{r[4]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ComponentsPage() {
  return (
    <>
      <div className="hero">
        <div>
          <span className="meta-pill">PATTERNS · 08</span>
          <h1>元件範例 <span className="h1-en">Components</span></h1>
          <p>套用顏色、字體與間距規範後產出的標準元件範例。完整元件庫請參閱 Pattern Library。</p>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="按鈕" en="Buttons" />
        <div className="preview">
          <div className="preview-row">
            <button className="btn btn-primary">主要操作</button>
            <button className="btn btn-secondary">次要操作</button>
            <button className="btn btn-text">文字按鈕</button>
            <button className="btn btn-disabled" disabled>停用狀態</button>
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="表單欄位" en="Form fields" />
        <div className="preview">
          <div className="preview-row" style={{ gap: 24, alignItems: "flex-start" }}>
            <div className="field">
              <label>使用者名稱</label>
              <input placeholder="請輸入姓名" defaultValue="王小明" />
            </div>
            <div className="field">
              <label>站別選擇</label>
              <select>
                <option>臺北車站</option>
                <option>板橋車站</option>
                <option>桃園車站</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="狀態徽章" en="Status badges" />
        <div className="preview">
          <div className="preview-row">
            <span className="badge badge-success">運行中</span>
            <span className="badge badge-warn">警示</span>
            <span className="badge badge-error">異常</span>
            <span className="badge badge-info">通知</span>
            <span className="badge badge-disabled">停用</span>
          </div>
        </div>
      </div>

      <div className="section">
        <SectionHead zh="卡片" en="Cards" />
        <div className="preview">
          <div className="preview-row" style={{ gap: 16 }}>
            {[
              { t: "列車營運", v: "98.7%", c: "var(--primary-300)" },
              { t: "今日載客數", v: "412,308", c: "#fff" },
              { t: "異常事件", v: "3", c: "var(--error-400)" },
            ].map(s => (
              <div key={s.t} style={{
                background: "var(--mono-surface-2)",
                borderRadius: 10,
                padding: 20,
                minWidth: 200,
                border: "1px solid #4a4848",
              }}>
                <div style={{ fontSize: 12, color: "var(--neutral-300)", letterSpacing: "0.04em" }}>{s.t}</div>
                <div style={{ fontFamily: "var(--font-en)", fontSize: 28, fontWeight: 700, color: s.c, marginTop: 6 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Root ───
function App() {
  const [active, setActive] = useState(() => {
    const h = window.location.hash.replace("#", "");
    return h || "overview";
  });

  useEffect(() => {
    window.location.hash = active;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  return (
    <div className="app" data-screen-label={active}>
      <Sidebar active={active} onNav={setActive} />
      <div className="main">
        <Topbar active={active} />
        <div className="content">
          {active === "overview" && <Overview onNav={setActive} />}
          {active === "colors" && <ColorsPage />}
          {active === "lightmode" && <LightModePage />}
          {active === "states" && <StatesPage />}
          {active === "chart" && <ChartPage />}
          {active === "type" && <TypePage />}
          {active === "spacing" && <SpacingPage />}
          {active === "grid" && <GridPage />}
          {active === "components" && <ComponentsPage />}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
