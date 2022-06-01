import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../contexts/productContext";
import Loader from "../Loader/Loader";

// title, description, price, image
const EditProductForm = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let editedProduct = {
      title,
      description,
      price,
      image,
    };
    if (
      !title.trim() ||
      !description.trim() ||
      !price.trim() ||
      !image.trim()
    ) {
      alert("Заполните поля!");
      return;
    }
    updateProduct(id, editedProduct);
    navigate("/products");
  }
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
      setDescription(oneProduct.description);
    }
  }, [oneProduct]);
  return oneProduct ? (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        <Typography color="text.primary">Edit</Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}
      >
        <Typography variant="h4" component="h2">
          Edit Product
        </Typography>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="standard-basic"
          label="Title"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="standard-basic"
          label="Description"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="standard-basic"
          label="Price"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          id="standard-basic"
          label="Image"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <Button
          onClick={handleValues}
          variant="contained"
          color="success"
          style={{ margin: "10px" }}
        >
          Save Product
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default EditProductForm;
