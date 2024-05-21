import React from "react";

async function Items({ params }: { params: { items: string } }) {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.items}`
  );
  const response = await fetchData.json();
  console.log(response);
  return (
    <>
      <h1>items details here ...</h1>
      <p>{response. userId}</p>
      <p>{response.id}</p> 
      <h1>{response.title}</h1> 
      <p>{response.body}</p> 
      
    </>
  );
}

export default Items;
