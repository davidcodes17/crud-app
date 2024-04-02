"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dc-crud-app.vercel.app/api/topics/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!response.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="font-bold text-lg pb-2">Topic</p>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          className="border-2 w-full border-slate-900 px-4 rounded-md py-2"
          placeholder="Topic Title"
        />
        <p className="font-bold text-lg mt-5 pb-2">Description</p>
        <textarea
          type="text"
          value={newDescription}
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
          className="border-2 w-full border-slate-900 px-4 rounded-md py-2"
          placeholder="Topic Description"
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-full mt-5 rounded-lg"
        >
          Update Topic
        </button>
      </form>
    </>
  );
};

export default EditTopicForm;
