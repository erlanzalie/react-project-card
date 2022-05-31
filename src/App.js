import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";

import "./App.css";
import ProductsContextProvider from "./contexts/productContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <Header />
      <Routing />
      <Footer />
    </ProductsContextProvider>
  );
};

export default App;
