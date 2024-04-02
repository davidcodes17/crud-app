import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicById = async (id) => {
  try {
    const response = await fetch(`https://dc-crud-app.vercel.app//api/topics/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch topic");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const editTopic = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default editTopic;
