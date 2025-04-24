'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { companyInfo, ContactInfo } from '../Data/data.js'
const { company_name, identity_state } = companyInfo;
function Nav() {
    const [open, setOpen] = useState(false)
    const [hidenav, setHide] = useState(false)
    useEffect(() => {

        console.log("ScreenX :", window.screen.width)

        const handleScroll = () => {
            if (window.screen.width < 678) {
                const currentScrollY = window.scrollY;
                //console.log("Current Scroll :", currentScrollY);
                setHide(currentScrollY > window.screenY / 10);//if scroll down : hide
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <nav className='max-md:fixed flex absolute w-full mb-6 max-md:py-2 py-5 px-[5%] z-1 justify-between items-center transition-all duration-150' >
            <div className={`md:text-2xl z-1 max-md:text-[.75remi] transfrom transition-transform ${hidenav ?
                '-translate-y-12' : '' }`}>{company_name}<br />{identity_state}</div>
            <div className={`text-1xl flex justify-between items-center
            ${open ? 'visible z-50 absolute inset-x-1 inset-y-20 flex-col' :
                    'max-md:hidden z-1'}`}>
                <Link href={'./'} onClick={() => setOpen(false)} className='max-md:border-y max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold mx-3 px-2 text-center'>หน้าแรก</Link>
                <Link href={'#services-intro'} onClick={() => setOpen(false)} className='max-md:border-b max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold mx-3 px-2 text-center'>บริการ</Link>
                <Link href={'#contact'} onClick={() => setOpen(false)} className='max-md:border-b max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold mx-3 px-2 text-center'>ติดต่อ</Link>
                <Link href={`tel:${ContactInfo.tele_num}`} onClick={() => setOpen(false)} className='max-md:border-b max-md:w-full max-md:py-[5%] hover:cursor-pointer hover:font-bold text-center md:border-1 px-5 py-2'>โทรเลย</Link>
            </div>

            {/* black drop */}
            <div className={` transition-all right-0 top-0 bottom-0 bg-black opacity-10
                ${open ? '' : 'absolute'} ${hidenav ? ' max-md:w-23' : 'w-full'}`} />
            {/* menu blur bg */}
            <div className={`fixed z-40 backdrop-blur-sm transition-all right-0 left-0 top-0
            ${open ? ' h-full opacity-100' : 'opacity-0 h-[1%]'
                }`} onClick={() => setOpen(false)} />

            <button onClick={() => setOpen(!open)} className={`absolute p-2 z-50 right-5
             ${open ? 'visible font-bold text-shadow-2xs text-shadow-amber-50' : 'md:hidden'
                }`}>
                Menu
            </button>
        </nav>
    )
}

export default Nav