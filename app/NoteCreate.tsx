"use client";
import React, { useRef, useState } from "react";
import { NoteType } from "./page";
import uuid from "react-uuid";

type Props = {
  addNewNote: (newNote: NoteType) => void;
  setShowAddNote: (state: boolean) => void;
};

const NoteCreate = ({ addNewNote, setShowAddNote }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const newNote: NoteType = {
    id: uuid(),
    title: titleRef.current?.value!,
    body: bodyRef.current?.value,
    modefiedAt: Date.now(),
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        ref={titleRef}
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
        ref={bodyRef}
      ></textarea>
      <button
        onClick={() => {
          console.log(titleRef.current?.value);

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
