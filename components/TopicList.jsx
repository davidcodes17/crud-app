import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const reponse = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!reponse.ok) {
      throw new Error("Failed to fetch topics");
    }
    return reponse.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 rounded-md cursor-pointer border border-slate-300 my-3 flex justify-between gap-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div className="flex gap-2 items-center">
            <RemoveBtn id={topic._id} />
            <Link href={"/editTopic/" + topic._id}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
