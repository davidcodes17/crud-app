import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between rounded-lg items-center bg-slate-800 px-8 py-5'>
        <Link className='text-white font-bold' href={"/"}>David Codes</Link>
        <Link className='bg-white px-4 py-2 rounded-md' href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default NavBar