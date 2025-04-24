import React from 'react'
import Image from 'next/image'
import { companyInfo } from '../Data/data.js'
const { company_name, identity_state, slogan_1} = companyInfo;
function Intro() {
    return (
        <section className='w-full aspect-baner-responsive overflow-hidden z-0'>
            <Image
                src="/pic/constructor1.jpg"
                alt="constructor1"
                height={2048}
                width={2048}
                sizes="150vw"
                className='fixed object-cover -z-10 aspect-baner-responsive'
            />

            <div className="absolute inset-0 aspect-baner-responsive bg-black opacity-30 items-center"></div>

            <div className="absolute inset-0 aspect-baner-responsive flex items-center justify-center flex-col text-white">
                <div className=' lg:text-5xl md:text-4xl  max-md:text-2xl font-bold pt-20'>{company_name}
                    <br className='md:hidden'/> {identity_state}</div>
                <div className='lg:text-3xl md:text-2xl max-md:text-1xl font-thin text-gray-200'>
                    {slogan_1}
                </div>
            </div>

        </section>
    )
}

export default Intro