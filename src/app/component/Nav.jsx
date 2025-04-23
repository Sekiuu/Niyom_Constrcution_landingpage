'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='max-md:fixed flex absolute w-full mb-6 max-md:py-2 py-5 px-[5%] z-1 justify-between items-center transition-all duration-150' >
            <div className='md:text-2xl z-1 max-md:text-[.75rem]'>บริษัท นิยมคอนสตรัคชั่น<br />รับเหมาก่อสร้าง</div>
            <div className={`text-1xl flex justify-between items-center
            ${open ? 'visible z-50 absolute inset-x-1 inset-y-20 flex-col' :
                    'max-md:hidden z-1'}`}>
                <Link href={'./'} onClick={() => setOpen(false)} className='max-md:border-y max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold mx-3 px-2 text-center'>หน้าแรก</Link>
                <Link href={'#services-intro'} onClick={() => setOpen(false)} className='max-md:border-b max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold mx-3 px-2 text-center'>บริการ</Link>
                <Link href={'#'} onClick={() => setOpen(false)} className='max-md:border-b max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold mx-3 px-2 text-center'>ติดต่อ</Link>
                <Link href={'#'} onClick={() => setOpen(false)} className='max-md:border-b max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold text-center md:border-1 px-5 py-2'>โทรเลย</Link>
            </div>
            {/* menu blur bg */}
            <div className={`fixed z-40 backdrop-blur-sm transition-all right-0 left-0 top-0
            ${open ? ' h-full opacity-100' : 'opacity-0 h-[1%]'
                }`} onClick={() => setOpen(false)} />

            <button onClick={() => setOpen(!open)} className={`absolute p-2 z-50 right-5
             ${open ? 'visible font-bold text-shadow-2xs text-shadow-amber-50' : 'md:hidden'
                }`}>
                Menu
            </button>

            {/* black drop */}
            <div className={`inset-0  bg-black opacity-10
                ${open ? '' : 'absolute'}`} />
        </nav>
    )
}

export default Nav