import "./styles.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Order from "./pages/Order";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}
