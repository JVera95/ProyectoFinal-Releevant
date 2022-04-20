import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./views/Index/Index";
import Ps from "./views/Ps";
import Xbox from "./views/Xbox";
import Nint from "./views/Nint";
import Pc from "./views/Pc";
import Game from "./views/Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Index />} />
        <Route path="/ps" element={<Ps />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/nint" element={<Nint />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
