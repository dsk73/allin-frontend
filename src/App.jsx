import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/cart/CartDrawer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
        <CartDrawer />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
