import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GetIn from "./pages/getin";
import Profile from "./pages/profile";

import { Redr } from "./warehouse/nav";
const App: React.FC = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redr />} />
        <Route path="/home" element={<Home />} />
        <Route path="/getin" element={<GetIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;