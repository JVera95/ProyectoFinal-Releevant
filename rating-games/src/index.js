import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./views/Index/Index";
import Ps from "./views/Platforms/Ps";
import Xbox from "./views/Platforms/Xbox";
import Nint from "./views/Platforms/Nint";
import Pc from "./views/Platforms/Pc";
import Game from "./views/Game/Game";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Toprating from "./views/Toprating";
import Profile from "./views/Profile";
import MyList from "./views/Mylist";

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
        <Route path="/game/:_id" element={<Game />} />
        <Route path="/toprating" element={<Toprating />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
