import React from "react";
import Box from "@mui/material/Box";
export default function NotesCard() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "#feefc3",
        "&:hover": {
          backgroundColor: "#feecf3",
          opacity: [0.9, 0.8, 0.7],
        },
        color: "black",
      }}
    ></Box>
  );
}
