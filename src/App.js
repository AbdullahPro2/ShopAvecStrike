import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
