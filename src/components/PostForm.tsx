"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });

    setPost({ title: "", content: "" });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (res.ok) {
      alert("Post successfully created ");
    }
  };

  return (
    <div className="w-full text-left justify-start items-start pt-10 bg-gray-500  ">
      <form
        onSubmit={handleSubmit}
        className="space-x-4 space-y-4 flex flex-col"
      >
        <Input
          type="text"
          name="title"
          placeholder="Title..."
          onChange={handleChange}
          required
          className="w-[50%]"
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          onChange={handleChange}
          className="w-[50%]"
        ></textarea>
        <Button type="submit" className="w-[200px]">
          creata Post
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
