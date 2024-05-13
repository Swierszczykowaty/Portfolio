import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Photography from "./components/Photography";
import Web_dev from "./components/Web_dev";
import Pandas from "./components/Pandas";
import Design from "./components/Design";
import Movies from "./components/Movie";
import Tech from "./components/Tech";
import Page404 from "./components/Page404";
import Index from "./components/Index.jsx";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
