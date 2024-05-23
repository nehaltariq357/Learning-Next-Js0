"use client";
import { useState } from "react";
export default function Home() {
  const [InputVal, setInputVal] = useState("");
  const [Radio, setRadio] = useState("");
  return (
    <>
      <h1 className="ml-[50px] text-center">onchange</h1>

      <input
        type="text"
        value={InputVal}
        placeholder="write something"
        className="ml-[550px] text-center mt-10 bg-blue-200 border-opacity-100"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <br />
      <label>
        <input
          type="radio"
          value="haan"
          name="abc"
          onChange={(e) => setRadio(e.target.value)}
        />
        yes
      </label>
      <label>
        <input
          type="radio"
          value="nahi"
          name="abc"
          onChange={(e) => setRadio(e.target.value)}
        />
        No
      </label>
      <br />
      <p className="ml-[550px] text-center mt-10 ">
        {InputVal} {Radio}
      </p>
    </>
  );
}
