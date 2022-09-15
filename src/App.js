import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Address from "./Components/Address/Address";
import ShowAdress from "./Components/Address/ShowAdress";
import BuyPixcel from "./Components/BuyPixcel/BuyPixcel";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import PixcelLandscape from "./Components/Pixcel5/PixcelLandscape";
import PixcelPotriate from "./Components/Pixcel5/PixcelPotriate";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/phone" element={<PixcelPotriate />} />
          <Route path="/land" element={<PixcelLandscape />} />
          <Route path="/buy" element={<BuyPixcel />} />
          <Route path="addres" element={<Address />} />
          <Route path="/showAdd" element={<ShowAdress />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
