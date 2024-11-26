import "./App.css";
import { Routes, Route } from "react-router-dom";
import {CartProvider} from "./contexts/CartContext";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

const App: React.FC = () => {
  return (
    <>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout/:id" element={<Checkout  />} />
      </Routes>
      <Footer />
    </CartProvider>
    </>
  );
};

export default App;
