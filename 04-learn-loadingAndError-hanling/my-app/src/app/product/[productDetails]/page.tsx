import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: { productDetails: string };
}) {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.productDetails}`,
    { next: { revalidate: 2000 } }
  );
  const respone = await fetchData.json();

  return (
    <>
      <h1>ProductDetails</h1>
      {"UserID:"} {respone.userId} <br />
      {"id:"} {respone.id}
      <br />
      {"title:"} {respone.title}
      <br />
      {"body:"} {respone.body}
    </>
  );
}
