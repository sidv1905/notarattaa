import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import { gql, useMutation } from "@apollo/client";
import { client } from "../../main";

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

const ADD_NOTE = gql`
  mutation AddTodo($objects: [notes_insert_input]!) {
    insert_notes(objects: $objects) {
      affected_rows
    }
  }
`;

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [valueText, setValueText] = React.useState("");

  const [errorInput, seterrorInput] = React.useState(false);

  let submissionText = "";
  const [addNote, { data, loading, error }] = useMutation(ADD_NOTE);
  if (loading) submissionText = "Submitting...";
  if (error) submissionText = `Submission error! ${error.message}`;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var count = event.target.value.length;
    console.log(count);
    if (count < 180) {
      seterrorInput(false);
      setValueText(event.target.value);
    } else {
      seterrorInput(true);
    }
  };
  const handleSubmit = () => {
    console.log(valueText);
    if (!errorInput) {
      addNote({
        variables: {
          objects: {
            text: valueText,
          },
        },
      })
        .then(async (res) => {
          console.log(res);
          submissionText = "Submission successful!";
          await client.refetchQueries({
            include: "all", // Consider using "active" instead!
          });
          setOpen(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Please enter a valid note");
    }
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
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          p={4}
        >
          <TextField
            error={errorInput}
            id="outlined-multiline-flexible"
            label="Add note text"
            helperText={
              errorInput ? "Characters More than 180. Exceeding the limit" : ""
            }
            multiline
            maxRows={4}
            value={valueText}
            onChange={handleChange}
          />
          <AddButton onClick={handleSubmit} variant="contained" disableRipple>
            Submit Note
          </AddButton>
          {submissionText}
        </Box>
      </Drawer>
    </Box>
  );
}
