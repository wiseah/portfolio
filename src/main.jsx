import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Ep1 from "./pages/Ep1"
import Ep2 from "./pages/Ep2"
import Ep3 from "./pages/Ep3"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ep1" element={<Ep1 />} />
        <Route path="/ep2" element={<Ep2 />} />
        <Route path="/ep3" element={<Ep3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
