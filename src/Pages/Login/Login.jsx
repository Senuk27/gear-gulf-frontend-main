import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import logo from "../../assets/logo.svg";
import NewService from "../../services/NewService";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    try {
      const loginResponse = await NewService.login({
        email: data.email,
        password: data.password,
      });

      // Log the entire response object
      console.log("Full login response:", loginResponse);

      if (loginResponse && loginResponse.status === 200) {
        // Compare status as a number
        console.log("Login Success");
        // Navigate to the home page or another page
        navigate("/home");
      } else {
        console.error("Login Failed:", loginResponse.message);
        alert(loginResponse.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error in sign in:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        height="100vh"
        sx={{
          bgcolor: "rgba(208, 201, 249, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="img" src={login} sx={{ width: 510, height: 560 }} />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 10,
          py: 2,
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box component="img" src={logo} sx={{ width: 86, height: 145 }} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          Log In
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 15,
            fontWeight: 500,
            color: "#757575",
          }}
        >
          Bid Smart, Bid Secure: Access Your Auction Account Today - Your
          Gateway to Exclusive Deals and Rare Finds!
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
          Enter Your Email
        </Typography>
        <TextField
          variant="standard"
          type="email"
          InputProps={{ disableUnderline: true }}
          {...register("email", { required: true })}
          sx={{
            width: "100%",
            height: 40,
            px: 2,
            borderRadius: "5px",
            fontFamily: "poppins",
            bgcolor: "#EFEFEF",
            "& .MuiInputBase-root": { height: 40 },
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
          type="password"
          InputProps={{ disableUnderline: true }}
          {...register("password", { required: true })}
          sx={{
            width: "100%",
            height: 40,
            px: 2,
            borderRadius: "5px",
            fontFamily: "poppins",
            bgcolor: "#EFEFEF",
            "& .MuiInputBase-root": { height: 40 },
          }}
        />
        <Box sx={{ display: "flex", mt: 1, width: "105.3%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              {...register("rememberMe")}
              style={{ marginRight: "8px" }}
            />
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: 16,
                fontWeight: 500,
                color: "#757575",
              }}
            >
              Remember me
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: 16,
              fontWeight: 500,
              color: "#6600B5",
              ml: "auto",
            }}
          >
            Forgot Password
          </Typography>
        </Box>
        <Button
          onClick={handleSubmit(onSubmit)}
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
            ":hover": { bgcolor: "#6600B5" },
          }}
        >
          LOGIN
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
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            style={{ color: "#6600B5", cursor: "pointer" }}
          >
            Register Now
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
