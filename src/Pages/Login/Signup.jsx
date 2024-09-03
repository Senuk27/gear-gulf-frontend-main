import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../assets/signup.png";
import logo from "../../assets/logo.svg";
import { signUp } from "../../services/ApiService";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSignUp = async (formData) => {
    // Data to Send
    const data = {
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
    };
    const response = await signUp(data);
    if (response.status === "200") {
      console.log("Sign Up Success");
      alert("Successfully Registered! Redirecting to Login...");
      navigate("/log-in");
    } else {
      console.log("Sign Up Failed :", response.message);
      setAlertMessage(response.message);
      setOpenSnackbar(true);
    }
  };

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        height={"100vh"}
        sx={{
          bgcolor: "rgba(208, 201, 249, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={signup}
          sx={{
            width: 510,
            height: 560,
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 10,
          mt: -1,
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Box
            component={"img"}
            src={logo}
            sx={{
              width: 86,
              height: 145,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: 15,
                fontWeight: "bold",
                mt: "auto",
              }}
            >
              Gear Gulf
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: 10,
                fontWeight: "bold",
                opacity: "50%",
              }}
            >
              Auction Cars
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 50,
            lineHeight: "75px",
            fontWeight: 600,
          }}
        >
          Sign Up
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 15,
            fontWeight: 500,
            color: "#757575",
          }}
        >
          Join the Excitement: Sign Up Now to Unlock Exclusive Access to
          Auctions, Deals, and Rare Finds.
          <span style={{ color: "#6600B5" }}> Start Your Journey Today!</span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 16,
            fontWeight: 500,
            color: "#757575",
            mt: 3,
          }}
        >
          Enter Your Name
        </Typography>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          {...register("userName", { required: "Name is required" })}
          error={!!errors.userName}
          helperText={errors.userName ? errors.userName.message : ""}
          sx={{
            width: "100%",
            height: 40,
            px: 2,
            borderRadius: "5px",
            fontFamily: "poppins",
            bgcolor: "#EFEFEF",
            "& .MuiInputBase-root": {
              height: 40,
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 16,
            fontWeight: 500,
            color: "#757575",
            mt: 1,
          }}
        >
          Enter Your Password
        </Typography>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
          sx={{
            width: "100%",
            height: 40,
            px: 2,
            borderRadius: "5px",
            fontFamily: "poppins",
            bgcolor: "#EFEFEF",
            "& .MuiInputBase-root": {
              height: 40,
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 16,
            fontWeight: 500,
            color: "#757575",
            mt: 1,
          }}
        >
          Enter Your Email
        </Typography>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address"
            }
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          sx={{
            width: "100%",
            height: 40,
            px: 2,
            borderRadius: "5px",
            fontFamily: "poppins",
            bgcolor: "#EFEFEF",
            "& .MuiInputBase-root": {
              height: 40,
            },
          }}
        />
        <Button
          onClick={handleSubmit(handleSignUp)}
          variant="contained"
          sx={{
            width: "105.3%",
            height: 50,
            mt: 4,
            borderRadius: "5px",
            bgcolor: "#6600B5",
            fontFamily: "poppins",
            fontSize: 20,
            fontWeight: 600,
            ":hover": {
              bgcolor: "#6600B5",
            },
          }}
        >
          SIGNUP
        </Button>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 12,
            fontWeight: 500,
            textAlign: "center",
            mt: 1,
            width: "105.3%",
          }}
        >
          Already have an account ?{" "}
          <span
            onClick={() => navigate("/log-in")}
            style={{
              color: "#6600B5",
              cursor: "pointer",
            }}
          >
            Login Now
          </span>
        </Typography>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

export default Signup;