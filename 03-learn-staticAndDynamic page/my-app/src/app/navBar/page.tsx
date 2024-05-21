import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
   <>
 
 <li><Link href="/">home</Link></li>
    <li><Link href="/about">about</Link></li>
    <li><Link href="/contact">contact</Link></li>
     <li><Link href="/folder">folder</Link></li>
  
 
   </>
  )
}

export default NavBar