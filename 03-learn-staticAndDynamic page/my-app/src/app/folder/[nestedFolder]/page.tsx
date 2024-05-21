import React from "react";

async function NestedFolder({ params }: { params: { nestedFolder: string } }) {
  const fetching = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.nestedFolder}`,{cache:"no-store"} // this is dynamic 
    // and {next:{revalidate:2000}} it is stastic
  );
  const res = await fetching.json();
  return (
    <>
      <h1>NestedFolder</h1>

      {res.id}
      {res.title}
      {res.body}
    </>
  );
}

export default NestedFolder;
