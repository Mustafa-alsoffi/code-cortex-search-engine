import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";
import Search from "../views/Search";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/admin" element={<Admin />} />
      {/* other routes */}
    </Routes>
  );
}
