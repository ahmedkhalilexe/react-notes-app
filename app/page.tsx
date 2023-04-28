"use client";
import { useState } from "react";
import Note from "./Note";
import uuid from "react-uuid";
import NoteCreate from "./NoteCreate";
export type NoteType = {
  id: string;
  title: string;
  body: string | undefined;
  modefiedAt: number;
};
export default function Home() {
  const deleteNote = (noteId: string) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [showAddNote, setShowAddNote] = useState<boolean>(false);
  const addNewNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  };
  return (
    <main className=" flex h-screen overflow-hidden">
      {/* side bar */}
      <div className=" basis-1/4 bg-slate-400 p-3 overflow-y-auto ">
        {/* add edit search */}
        <div className="flex justify-end">
          <button
            className=" text-lg font-bold"
            onClick={
              // () => setNotes([emptyNote, ...notes])
              () => setShowAddNote(true)
            }
          >
            Create
          </button>
        </div>
        {/* notes */}
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            modefiedAt={note.modefiedAt}
            deleteNote={deleteNote}
          />
        ))}
      </div>
      {/* note preview /edit/create */}
      <div className=" basis-3/4 bg-gray-200 p-8">
        {showAddNote && (
          <NoteCreate addNewNote={addNewNote} setShowAddNote={setShowAddNote} />
        )}
      </div>
    </main>
  );
}
