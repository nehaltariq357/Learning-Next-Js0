import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/products">products</Link>
      </li>
    </div>
  );
}

export default NavBar;
