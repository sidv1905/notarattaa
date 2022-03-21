import React from "react";
import NotesCard from "../NotesCard/NotesCard";

import { gql, useQuery } from "@apollo/client";

const GET_NOTES = gql`
  query {
    notes {
      text
      id
    }
  }
`;

interface NoteInterface {
  text: string;
  id: number;
}

export default function NotesContainer() {
  const [notesList, setNotesList] = React.useState([]);
  const { loading, error, data } = useQuery(GET_NOTES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data, "DATA NOTES");
  return (
    <>
      {data.notes.map((note: NoteInterface) => {
        return <NotesCard key={note.id} id={note.id} text={note.text} />;
      })}
    </>
  );
}
