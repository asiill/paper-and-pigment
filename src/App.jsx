import React from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Content />
      <Footer />
    </CartProvider>
  );
};

export default App;
