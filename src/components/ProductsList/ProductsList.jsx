import { Box, Button, Container } from "@mui/material";
import { display } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/productContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { getProducts, products } = useContext(productContext);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Button
        variant="outlined"
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/add-product")}
      >
        Add Product
      </Button>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsList;
