import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Service_intro() {
    return (
        <section className='md:p-16 md:pt-30 w-full bg-neutral-800 transition-all duration-300'>
            <div className='grid lg:grid-cols-4 grid-cols-2 border border-amber-600'>
                <div className='aspect-square col-span-2 border border-amber-600'>
                    <Image src={'/pic/team1.jpg'} width={1024} height={1024} sizes='50vw' alt='team1'
                        className='object-cover aspect-square' />
                </div>
                <div id='services-intro' className='col-span-2 border border-amber-600 aspect-square text-center overflow-hidden'>
                    <div className={'flex flex-col w-full h-full justify-center kanit'}>
                        <h1 className='text-6xl font-bold mb-10 lg:mb-6 xl:text-6xl lg:text-5xl
                         max-md:text-4xl max-md:mb-5'>บริการของเรา</h1>
                        <div className='text-neutral-300 text-left lg:text-1xl text-2xl font-thin space-y-8 
                        lg:space-y-5 px-[20%] max-md:space-y-3 max-md:text-[1rem]'>
                            <li className='hover:text-neutral-100'><Link href={'#'}>งานปรับปรุงบ้าน</Link></li>
                            <li className='hover:text-neutral-100'><Link href={'#'}>งานปรับปรุงห้องครัว</Link></li>
                            <li className='hover:text-neutral-100'><Link href={'#'}>งานปรับปรุงห้องน้ำ</Link></li>
                            <li className='hover:text-neutral-100'><Link href={'#'}>งานตกแต่งภายใน </Link></li>
                            <li className='hover:text-neutral-100'><Link href={'#'}>บริการปูพื้น</Link></li>
                        </div>
                        <Link href={'./Services'} className='text-center w-[50%] mx-auto mt-10 lg:py-3 py-5 bg-amber-800
                        max-md:mt-5 max-md:py-2'>ดูข้อมูล</Link>
                    </div>
                </div>

                <div className='col-span-1 row-span-1 border border-amber-600 aspect-square flex justify-center flex-col items-center'>
                    <Image width={200} height={200} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2' />
                    <h1 className='text-neutral-400 mt-2 lg:mt-5 text-3xl lg:text-2xl 
                    max-md:text-xl'>ตัวอย่าง</h1>
                </div>
                <div className='col-span-1 row-span-1 border border-amber-600 aspect-square flex justify-center flex-col items-center'>
                    <Image width={200} height={200} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2' />
                    <h1 className='text-neutral-400 mt-2 lg:mt-5 text-3xl lg:text-2xl 
                    max-md:text-xl'>ตัวอย่าง</h1>
                </div>
                <div className='col-span-1 row-span-1 border border-amber-600 aspect-square flex justify-center flex-col items-center'>
                    <Image width={200} height={200} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2' />
                    <h1 className='text-neutral-400 mt-2 lg:mt-5 text-3xl lg:text-2xl 
                    max-md:text-xl'>ตัวอย่าง</h1>
                </div>
                <div className='col-span-1 row-span-1 border border-amber-600 aspect-square flex justify-center flex-col items-center'>
                    <Image width={200} height={200} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2' />
                    <h1 className='text-neutral-400 mt-2 lg:mt-5 text-3xl lg:text-2xl 
                    max-md:text-xl'>ตัวอย่าง</h1>
                </div>

                <div className='col-span-2 border border-amber-600 md:aspect-square text-center overflow-hidden'>
                    <div className='flex flex-col mx-auto w-[80%] py-[10%] max-lg:py-[10%] xl:py-[15%] text-left'>
                        <h1 className='text-6xl max-md:text-5xl font-bold'>เกี่ยวกับเรา</h1>
                        <h2 className='mt-15 max-lg:mt-5 text-[2rem] max-md:text-[1.5rem] text-neutral-400'>บริษัท นิยมคอนสตรัคชั่น<br />รับเหมาก่อสร้าง</h2>
                        <p className='xl:mt-10 mt-5 max-lg:mt-20 max-md:mt-5 xl:text-2xl text-xl max-lg:text-2xl max-md:text-[1rem]'>
                            นี่คือส่วนของเนื้อหา เพิ่มข้อความของคุณและแก้ไขได้ง่ายๆ
                            ที่นี่ เพียงคลิก "แก้ไขข้อความ" หรือดับเบิลคลิกจากนั้นลงเนื้อหาของคุณ หรือแก้ไข
                            หรือเปลี่ยนแบบฟอนต์ได้เลย ที่ตรงนี้เหมาะอย่างยิ่งสำหรับการบอกเล่าเรื่องราวและแนะนำตัวให้ผู้ใช้รู้จักคุณมากยิ่งขึ้น
                            มาเริ่มสร้างสรรค์เนื้อหาของคุณเลย
                        </p>
                    </div>
                </div>
                <div className='aspect-square col-span-2 border border-amber-600 '>
                    <Image src={'/pic/team2.jpg'} width={1024} height={1024} sizes='50vw' alt='team2'
                        className='object-cover aspect-square' />
                </div>
            </div>

        </section>
    )
}

export default Service_intro