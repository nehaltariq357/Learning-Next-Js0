import Link from 'next/link'
import React from 'react'

async function Folder() {

   const fetching = await fetch("https://jsonplaceholder.typicode.com/posts")
   const respone = await fetching.json()
   console.log(respone)
  return (
    <>
    <h1>
      folder page
    </h1>

   {
    respone.map((item:any)=>{
      return (
        <li>
          <Link href={`/folder/${item.id}`}>{item.title}</Link>
        </li>
      )
    })
   }





  {/* { this is hard coding} */}
    {/* <ol>
      <li><Link href="/folder/nestedFolder1">items1</Link></li>
      <li><Link href="/folder/nestedFolder2">items2</Link></li>
      <li><Link href="/folder/nestedFolder3">items3</Link></li>
      <li><Link href="/folder/nestedFolder4">items4</Link></li>
    </ol> */}
    </>


  )
}

export default Folder