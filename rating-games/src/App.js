import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./views/Index/Index";
import Ps from "./views/Platforms/Ps";
import Xbox from "./views/Platforms/Xbox";
import Nint from "./views/Platforms/Nint";
import Pc from "./views/Platforms/Pc";
import Game from "./views/Game/Game";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Toprating from "./views/Toprating/Toprating";
import Profile from "./views/Profile/Profile";
import MyList from "./views/Mylist/Mylist";
import RequireAuth from "./components/RequireAuth";
import Missing from "./views/Missing";

function App() {
  return (
    <Routes>
      <Route path="/">
        {/*Public Routes*/}
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="ps" element={<Ps />} />
        <Route path="xbox" element={<Xbox />} />
        <Route path="nint" element={<Nint />} />
        <Route path="pc" element={<Pc />} />
        <Route path="game/:_id" element={<Game />} />
        <Route path="toprating" element={<Toprating />} />
        {/*Protected Routes*/}
        <Route element={<RequireAuth />}>
          <Route path="profile/:_id" element={<Profile />} />
          <Route path="mylist/:_id" element={<MyList />} />
        </Route>
      </Route>
      {/*Missing Routes*/}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
