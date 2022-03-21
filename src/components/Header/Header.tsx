import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Header() {
  return (
    <Box
      sx={{
        height: "100%",
      }}
      p={1}
    >
      <Typography variant="h4" color="inherit">
        Welcome to notaratta
      </Typography>
    </Box>
  );
}
