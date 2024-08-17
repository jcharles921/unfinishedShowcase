"use client";
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
const LikeComment = () => {
  const [likeCount, setLikeCount] = useState(26);
  const like = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div className="w-full flex gap-7 mt-6">
      <div className="flex gap-2 items-center">
        <FcLike
          className="w-8 h-8 cursor-pointer hover:scale-105 active:scale-110  duration-100"
          onClick={like}
        />
        <p>{likeCount}</p>
      </div>
      <div className="flex gap-2 items-center">
        <FaRegComment />
        <p>0</p>
      </div>
      <div className="flex gap-2 items-center">
        <IoIosSend />
      </div>
    </div>
  );
};

export default LikeComment;
