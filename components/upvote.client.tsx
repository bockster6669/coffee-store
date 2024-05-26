"use client";

import Image from "next/image";

export default function Upvote() {
  function handleVote() {
    console.log("click");
  }
  return (
    <>
      <div className="mb-6 flex">
        <Image
          src="/static/icons/star.svg"
          width="24"
          height="24"
          alt="star icon"
        />
        <p className="pl-2">0</p>
      </div>
      <button onClick={handleVote}>Up vote</button>
    </>
  );
}
