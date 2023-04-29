import React from "react";

type Props = {
  title: string;
  body: string | undefined;
};

function NotePreview({ title, body }: Props) {
  return (
    <div>
      <h1 className=" text-4xl font-bold mb-5">{title}</h1>
      <p className=" max-w-4xl hyphens-auto">{body}</p>
    </div>
  );
}

export default NotePreview;
