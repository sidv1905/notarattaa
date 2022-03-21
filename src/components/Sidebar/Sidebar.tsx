import React from "react";
import Box from "@mui/material/Box";
export default function Sidebar() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      Sidebar
    </Box>
  );
}
