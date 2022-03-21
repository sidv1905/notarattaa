import { useState } from "react";

import Grid from "@mui/material/Grid";
import "../styles/App.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import NotesContainer from "../components/NotesContainer/NotesContainer";
function App() {
  return (
    <Grid container className="main-container">
      <Grid
        item
        xs={12}
        style={{
          height: 60,
        }}
      >
        <Header />
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          height: "100%",
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          height: "100%",
          padding: "20px",
          display: "flex",
        }}
      >
        <NotesContainer />
      </Grid>
    </Grid>
  );
}

export default App;
