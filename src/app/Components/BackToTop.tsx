"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

function BackToTop() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }



   const scrollwatch = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollwatch)
    })

    return (
        <div className={`fixed bottom-28 z-50  ease-in-out duration-300 ${show ? 'right-5' : '-right-24'}`}>
            <button onClick={handleClick} className='bg-red-500 animate-bounce text-black font-bold text-xl p-5 rounded-full shadow-lg'>
                <AiOutlineArrowUp className='text-2xl font-bold'/>
            </button>
        </div>
    )
}

export default BackToTop