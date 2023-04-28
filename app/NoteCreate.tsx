"use client";
import React, { useState } from "react";
import { NoteType } from "./page";
import uuid from "react-uuid";

type Props = {
  addNewNote: (newNote: NoteType) => void;
  setShowAddNote: (state: boolean) => void;
};

const NoteCreate = ({ addNewNote, setShowAddNote }: Props) => {
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const newNote: NoteType = {
    id: uuid(),
    title: title!,
    body: body,
    modefiedAt: Date.now(),
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className=" w-3/5 py-1 px-2 rounded-lg"
      />
      <label htmlFor="body">Body</label>
      <textarea
        name="body"
        id="body"
        className=" w-3/5 py-1 px-2 rounded-lg"
        rows={10}
        maxLength={600}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          addNewNote(newNote);
          setShowAddNote(false);
        }}
      >
        create
      </button>
    </div>
  );
};

export default NoteCreate;
