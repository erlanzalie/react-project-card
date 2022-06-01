import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import EditProductForm from "./components/EditProductForm/EditProductForm";
import LoginForm from "./components/LoginForm/LoginForm";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditProductForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
