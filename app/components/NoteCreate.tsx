"use client";
import React, { useRef, useState } from "react";
import { NoteType } from "../page";
import uuid from "react-uuid";

type Props = {
  addNewNote: (newNote: NoteType) => void;
  setShowAddNote: (state: boolean) => void;
};

const NoteCreate = ({ addNewNote, setShowAddNote }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        addNewNote({
          id: uuid(),
          title: titleRef.current?.value!,
          body: bodyRef.current?.value,
          modefiedAt: Date.now(),
        });
        setShowAddNote(false);
      }}
    >
      <label htmlFor="title" className=" text-lg font-medium">
        Title
      </label>
      <input
        type="text"
        id="title"
        ref={titleRef}
        required
        placeholder="Title..."
        className=" w-3/5 mb-2 mt-1 py-2 px-4 focus:outline-orange-400 rounded-lg"
      />
      <label htmlFor="body" className=" text-lg font-medium">
        Body
      </label>
      <textarea
        name="body"
        id="body"
        className=" w-3/5  mb-2 mt-1 py-2 px-4 focus:outline-orange-400 rounded-lg"
        rows={10}
        maxLength={600}
        ref={bodyRef}
        placeholder="Write your note here..."
      ></textarea>
      <button className=" border border-gray-900 w-fit px-3 py-1 rounded-lg mt-3">
        create
      </button>
    </form>
  );
};

export default NoteCreate;
