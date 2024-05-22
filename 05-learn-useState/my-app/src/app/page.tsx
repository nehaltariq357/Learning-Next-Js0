"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("green");

  const changeColor = () => {
    setName((prevName) => (prevName === "green" ? "blue" : "green"));
  };

  return (
    <>
      <p
        className={`bg-${
          name === "green" ? "green" : "blue"
        }-500 text-center w-28 ml-[725px] text-white`}
      >
        {name}
      </p>
      <button
        className="mt-4 p-2 bg-gray-200 rounded ml-[725px]"
        onClick={changeColor}
      >
        change color
      </button>
    </>
  );
}
