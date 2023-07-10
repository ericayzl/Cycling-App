/* File Name: index.js
   File Description: Contains the container JavaScript file for my cycling app
   Author: Erica Li
   Date Updated: 7-06-2022
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Logs,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logs" element={<Logs />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

reportWebVitals();