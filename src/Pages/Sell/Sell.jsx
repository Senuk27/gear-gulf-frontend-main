import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import sell from "../../assets/sell.png";

const Sell = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ px: 10, py: 5 }}>
        <Box
          component={"img"}
          src={sell}
          sx={{
            width: 389,
            height: 652,
            ml: 5,
            position: "absolute",
            top: 140,
            right: 150,
          }}
        />
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 30,
            fontWeight: 600,
            color: "#000000",
          }}
        >
          You Can Sell Your{" "}
          <span style={{ color: "#6600B5" }}> Classic Car </span> Here
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: 16,
            fontWeight: 500,
            color: "#757575",
            lineHeight: "18px",
            width: 807,
            mt: 4,
          }}
        >
          With our extensive network and online presence, your classic car will
          be exposed to a wide audience of potential buyers, both locally and
          globally. Maximize your chances of finding the right buyer who truly
          appreciates the value of your cherished vehicle.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxHeight: 440,
            bgcolor: "#EBEBEB",
            mt: 4,
            borderRadius: "10px",
            px: 5,
            py: 4,
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: 20,
              fontWeight: 600,
              color: "#000000",
              mb: 3,
            }}
          >
            Sell Your Classic Car
          </Typography>
          <Box sx={{ display: "flex", gap: 3, width: 633, mb: 3 }}>
            <TextField
              {...register("vehicleName", { required: true })}
              type="text"
              placeholder="Vehicle Name *"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                width: "100%",
                height: 40,
                px: 2,
                borderRadius: "5px",
                fontFamily: "poppins",
                bgcolor: "#FFFFFF",
                "& .MuiInputBase-root": { height: 40 },
              }}
            />
            <TextField
              {...register("year", { required: true })}
              type="number"
              placeholder="Year *"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                width: "100%",
                height: 40,
                px: 2,
                borderRadius: "5px",
                fontFamily: "poppins",
                bgcolor: "#FFFFFF",
                "& .MuiInputBase-root": { height: 40 },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 3, width: 633, mb: 3 }}>
            <TextField
              {...register("startDate", { required: true })}
              type="date"
              placeholder="Start Date *"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                width: "100%",
                height: 40,
                px: 2,
                borderRadius: "5px",
                fontFamily: "poppins",
                bgcolor: "#FFFFFF",
                "& .MuiInputBase-root": { height: 40 },
              }}
            />
            <TextField
              {...register("endDate", { required: true })}
              type="date"
              placeholder="End Date *"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                width: "100%",
                height: 40,
                px: 2,
                borderRadius: "5px",
                fontFamily: "poppins",
                bgcolor: "#FFFFFF",
                "& .MuiInputBase-root": { height: 40 },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 3, width: 633, mb: 3 }}>
            <TextField
              {...register("bidAmount", { required: true })}
              type="number"
              placeholder="Bid Amount *"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                width: "100%",
                height: 40,
                px: 2,
                borderRadius: "5px",
                fontFamily: "poppins",
                bgcolor: "#FFFFFF",
                "& .MuiInputBase-root": { height: 40 },
              }}
            />
            <TextField
              {...register("image", { required: true })}
              type="file"
              placeholder="Upload Image *"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                width: "100%",
                height: 40,
                px: 2,
                borderRadius: "5px",
                fontFamily: "poppins",
                bgcolor: "#FFFFFF",
                "& .MuiInputBase-root": { height: 40 },
              }}
            />
          </Box>
          <TextField
            {...register("description", { required: true })}
            placeholder="Description *"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: 600,
              height: 92,
              px: 2,
              borderRadius: "5px",
              fontFamily: "poppins",
              bgcolor: "#FFFFFF",
              "& .MuiInputBase-root": { height: 40 },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: 630,
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
            POST
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Sell;

const cards = [
  {
    id: 1,
    title: "1996 Jaguar Classic Car",
    image: "car1",
    price: 1200000,
    description:
      "Classical Jaguar cars are synonymous with automotive royalty, embodying a rich heritage of luxury, style, and performance. From iconic models like the XK120 to the E-Type, they captivate enthusiasts with their timeless design, meticulous craftsmanship, and exhilarating driving dynamics.",
  },
  {
    id: 2,
    title: "1996 Jaguar Classic Car",
    image: "hehe",
    price: 1200000,
    description:
      "Classical Jaguar cars are synonymous with automotive royalty, embodying a rich heritage of luxury, style, and performance. From iconic models like the XK120 to the E-Type, they captivate enthusiasts with their timeless design, meticulous craftsmanship, and exhilarating driving dynamics.",
  },
  {
    id: 3,
    title: "1996 Jaguar Classic Car",
    image: "hehe",
    price: 1200000,
    description:
      "Classical Jaguar cars are synonymous with automotive royalty, embodying a rich heritage of luxury, style, and performance. From iconic models like the XK120 to the E-Type, they captivate enthusiasts with their timeless design, meticulous craftsmanship, and exhilarating driving dynamics.",
  },
];
