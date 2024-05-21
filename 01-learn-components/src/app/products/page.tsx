import Link from "next/link";
import React from "react";
import NavBar from "../componets/navbar";

const Products = () => {
  return (
    <div>
      <NavBar />
      <h1>products page</h1>
      <ol>
        <li>
          <Link href="/products/product">product</Link>
        </li>
        <li>
          <Link href="/products/product">product</Link>
        </li>
        <li>
          <Link href="/products/product">product</Link>
        </li>
      </ol>
    </div>
  );
};

export default Products;
