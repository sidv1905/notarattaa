import { useState } from "react";

import Grid from "@mui/material/Grid";
import "../styles/App.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import NotesContainer from "../components/NotesContainer/NotesContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container className="main-container">
      <Grid
        item
        xs={12}
        style={{
          height: 60,
          backgroundColor: "green",
        }}
      >
        <Header />
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          height: "100%",
          backgroundColor: "blue",
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <NotesContainer />
      </Grid>
    </Grid>
  );
}

export default App;
