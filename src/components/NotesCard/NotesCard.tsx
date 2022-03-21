import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface NotesCardProps {
  text: string;
  id: number;
}

export default function NotesCard({ text, id }: NotesCardProps) {
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
        cursor: "pointer",
        wordWrap: "break-word",
      }}
      p={4}
      m={2}
    >
      {text}
    </Box>
  );
}
