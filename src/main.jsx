import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/styles.scss";

createRoot(document.getElementById("root")).render(<App />);
