import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleValues() {
    let user = {
      email,
      password,
    };
    console.log(user);
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
        Register
      </Typography>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button
        style={{ width: "20%", margin: "10px" }}
        variant="contained"
        onClick={handleValues}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
