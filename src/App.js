import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import UserID from "./pages/UserID";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<UserID />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
