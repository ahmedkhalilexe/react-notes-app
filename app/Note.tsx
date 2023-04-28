import React from "react";

type Props = {
  id: string;
  title: string;
  modefiedAt: number;
  deleteNote: (id: string) => void;
};

const Note = ({ id, title, modefiedAt, deleteNote }: Props) => {
  return (
    <div className=" h-16 bg-orange-400 rounded-lg px-5 py-2 mb-3">
      <strong>{title}</strong>
      <div className="flex justify-between text-sm">
        {new Date(modefiedAt).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <span>
          <button onClick={() => deleteNote(id)}>delete</button>
        </span>
      </div>
    </div>
  );
};

export default Note;
