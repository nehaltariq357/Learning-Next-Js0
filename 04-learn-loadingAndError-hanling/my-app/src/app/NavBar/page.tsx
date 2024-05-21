import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
   <>
  <ol>
    <li><Link href="/">home</Link></li>
    <li><Link href="/about">about</Link></li>
    <li><Link href="/contact">contact</Link></li>
    <li><Link href="product">product</Link></li>
  </ol>
   </>
  )
}
