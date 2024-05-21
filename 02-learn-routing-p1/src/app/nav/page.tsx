import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <>
    <li><Link href="/">home</Link></li>
  <li><Link href="/about">about</Link></li>
  <li><Link href="/product">product</Link></li>
    </>
  )
}

export default Nav