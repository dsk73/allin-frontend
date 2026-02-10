//src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/cart/CartDrawer";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <CartDrawer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
