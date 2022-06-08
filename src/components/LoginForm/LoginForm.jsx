import React, { useContext, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, error } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleValues() {
    if (!email || !password) {
      alert("Заполните поля!");
      return;
    }
    login(email, password, navigate);
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"70vh"}
    >
      <Typography variant="h3" component="h2">
        Login
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "30%", margin: "10px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "30%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button
        style={{ width: "30%", margin: "10px" }}
        variant="contained"
        onClick={handleValues}
      >
        Login
      </Button>
      <Typography variant="p" component="h2">
        Don't have an account?
      </Typography>
      <Typography
        onClick={() => navigate("/register")}
        variant="p"
        color={"primary"}
        style={{ cursor: "pointer" }}
        component="h2"
      >
        Sign up
      </Typography>
    </Box>
  );
};

export default LoginForm;
