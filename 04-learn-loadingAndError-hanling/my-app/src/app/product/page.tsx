import Link from 'next/link'
import React from 'react'

export default async function Product() {
const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
const respone = await fetchData.json()
console.log(respone)

  return (
    <>
    <h1>Product</h1>

{respone.map((element:any)=>{
  return(
    <li>
      <Link href={`/product/${element.id}`}>{element.title}</Link>
    </li>
  )
})}


    {/* <ol>
      <li><Link href="/product/productDetails">item1</Link></li>
      <li><Link href="/product/productDetails">item2</Link></li>
      <li><Link href="/product/productDetails">item3</Link></li>
    </ol> */}
    </>
  )
}
