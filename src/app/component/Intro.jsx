import React from 'react'
import Image from 'next/image'

function Intro() {
    return (
        <section className='w-full md:aspect-video aspect-square overflow-hidden z-0'>
            <Image
                src="/pic/constructor1.jpg"
                alt="constructor1"
                height={1024}
                width={1024}
                sizes="100vw"
                style={{ width: '100%', objectFit: 'cover' }}
                className='z-0 md:aspect-video aspect-square'
            />

            <div className="absolute inset-0 md:aspect-video aspect-square bg-black opacity-30 items-center"></div>

            <div className="absolute md:aspect-video aspect-square inset-0 flex items-center justify-center flex-col text-white">
                <div className=' lg:text-5xl md:text-4xl  max-md:text-2xl font-bold pt-20'>บริษัท นิยมอิเล็กทริกซ์
                    <br className='md:hidden'/>รับเหมาก่อสร้าง</div>
                <div className='lg:text-3xl md:text-2xl max-md:text-1xl font-thin text-gray-200'>ทำไฟ ต่อเติมบ้าน เป็นกันเองคุยง่ายอุ่นใจ</div>
            </div>

        </section>
    )
}

export default Intro