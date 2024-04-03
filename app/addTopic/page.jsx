"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const [topic, setTopic] = useState("");
  const [des, setDes] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(topic, des);
    if (!topic || !des) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch(
        "https://dc-crud-app.vercel.app/api/topics/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: topic,
            description: des,
          }),
        }
      );
      if (response.ok) {
        router.push("/");
        window.location.reload();
      } else {
        throw new Error("Failed to create topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="font-bold text-lg pb-2">Topic</p>
        <input
          value={topic}
          type="text"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          className="border-2 w-full border-slate-900 px-4 rounded-md py-2"
          placeholder="Topic Title"
        />
        <p className="font-bold text-lg mt-5 pb-2">Description</p>
        <textarea
          value={des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
          className="border-2 w-full border-slate-900 px-4 rounded-md py-2"
          placeholder="Topic Description"
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-full mt-5 rounded-lg"
        >
          Add Topic
        </button>
      </form>
    </>
  );
};

export default AddTopic;
