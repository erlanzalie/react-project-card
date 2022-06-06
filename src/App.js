import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";

import "./App.css";
import ProductsContextProvider from "./contexts/productContext";
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Header />
        <Routing />
        <Footer />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
