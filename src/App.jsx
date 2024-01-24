import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Price from "./Components/Price/Price";
import AboutMe from "./Components/AboutMe/AboutMe";
import Testimony from "./Components/Testimony/Testimony";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="meconheca" element={<AboutMe />} />
          <Route path="preco" element={<Price />} />
          <Route path="depoimentos" element={<Testimony />} />
          <Route path="whatsapp" element={<Whatsapp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
