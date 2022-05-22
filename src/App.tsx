import { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";
import { Header } from "./components/Header";

const App: Component = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
    </Routes>
  </div>
);

export default App;
