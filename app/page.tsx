"use client";
import { useState } from "react";
import Note from "./components/Note";
import NoteCreate from "./components/NoteCreate";
import NotePreview from "./components/NotePreview";
export type NoteType = {
  id: string;
  title: string;
  body: string | undefined;
  modefiedAt: number;
};
export type NotePreviewType = {
  title: string;
  body: string | undefined;
};
export default function Home() {
  const deleteNote = (noteId: string) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [showAddNote, setShowAddNote] = useState<boolean>(false);
  const [showPreviewNote, setShowPreviewNote] = useState<boolean>(false);
  const [previewedNote, setPreviewedNote] = useState<NotePreviewType>();

  const addNewNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  };
  const previewNote = (note: NotePreviewType) => {
    setPreviewedNote(note);
    setShowAddNote(false);
    setShowPreviewNote(true);
  };
  return (
    <main className=" flex h-screen overflow-hidden">
      {/* side bar */}
      <div className=" basis-1/4 bg-gray-300 p-3 overflow-y-auto ">
        {/* add edit search */}
        <div className="flex mb-2 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setShowAddNote(true)}
            className="w-7 h-7 text-orange-400 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
        {/* notes */}
        {notes.length == 0 ? (
          <div>There is no notes yet.</div>
        ) : (
          notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              modefiedAt={note.modefiedAt}
              deleteNote={deleteNote}
              previewNote={previewNote}
            />
          ))
        )}
      </div>
      {/* note preview /edit/create */}
      <div className=" basis-3/4 bg-gray-200 p-8">
        {showAddNote ? (
          <NoteCreate addNewNote={addNewNote} setShowAddNote={setShowAddNote} />
        ) : (
          showPreviewNote && (
            <NotePreview
              title={previewedNote?.title!}
              body={previewedNote?.body}
            />
          )
        )}
      </div>
    </main>
  );
}
