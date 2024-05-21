import React from "react";
import { Card, Card2 } from "./componets/card";
import Link from "next/link";
import NavBar from "./componets/navbar";


const Page = () => {
  return (
    <div>
      <NavBar />
     <h1>home page</h1>
      <Card />
      <Card />
    </div>
  );
};

export default Page;
