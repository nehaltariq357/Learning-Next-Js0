"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  useEffect(() => {
    console.log("useEffect fire");
  }, []);

  useEffect(() => {
    console.log("second useEffect count1");
  }, [count]);

  useEffect(() => {
    console.log("third useEffect count2");
  }, [count2]);

  return (
    <>
      <h1>useEffect</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        counter increment1
      </button>
      <br />
      <p>{count2}</p>
      <button
        onClick={() => {
          setcount2(count2 + 1);
        }}
      >
        counter increment2
      </button>
    </>
  );
}
