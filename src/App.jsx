// src/App.js
import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import { FaBolt } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "../routes/routes";
function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;
