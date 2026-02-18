import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= GLOBAL UI ================= */
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import CartDrawer from "./components/cart/CartDrawer";

/* ================= PAGES ================= */
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";

/* ================= LEGAL ================= */
import Legal from "./pages/legal/Legal";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Trademark from "./pages/legal/Trademark";
import Promotions from "./pages/legal/Promotions";

/* ================= AUTH ================= */
import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./components/auth/ProtectedRoute";

/* ================= DASHBOARD ================= */
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Orders from "./pages/dashboard/Orders";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-black text-white min-h-screen flex flex-col">
          <Navbar />
          <ScrollToTop />

          <main className="flex-1">
            <Routes>
              {/* AUTH */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* PUBLIC */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* LEGAL */}
              <Route path="/legal" element={<Legal />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/trademark" element={<Trademark />} />
              <Route path="/legal/promotions" element={<Promotions />} />

              {/* PROTECTED */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/orders" element={<Orders />} />
              </Route>
            </Routes>
          </main>

          <CartDrawer />
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
