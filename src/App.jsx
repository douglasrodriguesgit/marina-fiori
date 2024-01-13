import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Price from "./Components/Price";
import AboutMe from "./Components/AboutMe";
import Testimony from "./Components/Testimony";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
