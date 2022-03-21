import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";

const AddButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "black",
  backgroundColor: "#feefc3",
  borderColor: "#feefc3",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#feecf3",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#feecf3",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [valueText, setValueText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueText(event.target.value);
  };

  const handleSubmit = () => {
    console.log(valueText);
  };
  return (
    <Box
      sx={{
        height: "100%",
      }}
      p={2}
    >
      <AddButton
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
        disableRipple
      >
        Add Note
      </AddButton>
      <Drawer open={open} anchor="left">
        <Box p={2}>
          <TextField
            id="outlined-multiline-flexible"
            label="Add note text"
            multiline
            maxRows={4}
            value={valueText}
            onChange={handleChange}
          />
        </Box>
        <AddButton onClick={handleSubmit} variant="contained" disableRipple>
          Submit Note
        </AddButton>
      </Drawer>
    </Box>
  );
}
