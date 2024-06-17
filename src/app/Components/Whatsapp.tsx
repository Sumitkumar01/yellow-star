import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Whatsapp() {
  return (
    <div className='fixed bottom-10 right-5 z-20 cursor-pointer'>
      <Link href="https://wa.me/919038262752" target="_blank" rel="noreferrer" className='w-14 h-14 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all'>
        <FaWhatsapp size={32} color='white' />
        <span className='sr-only'>what&apos;s app</span>
      </Link>
    </div>
  )
}

export default Whatsapp