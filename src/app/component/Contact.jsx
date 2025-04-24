'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { web_lisence, ContactInfo } from '../Data/data'

function Contact() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
    
            if (res.ok) {
                alert("ส่งข้อมูลเรียบร้อยแล้วจ้า~")
            } else {
                alert("ส่งไม่สำเร็จจ่ะ ;-; (Status: " + res.status + ")")
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดขณะส่งข้อมูล:", error)
        }
    }

    return (
        <footer id="contact">
            <section>
                <div className='flex flex-col max-md:w-[90%] md:px-20 mx-auto'>
                    <h1 className='text-5xl max-sm:text-4xl font-bold max-lg:text-center'>ติดต่อเรา</h1>
                    <div className='flex flex-col xl:pt-[10%] pt-[5%]'>
                        <div className='flex h-20 overflow-hidden'>
                            <Image width={500} height={500} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2 aspect-square' />
                            <p className='my-auto w-4/1 pl-5 text-xl xl:text-2xl'>{ContactInfo.adress}</p>
                        </div>
                        <div className='flex h-20 overflow-hidden'>
                            <Image width={500} height={500} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2 aspect-square' />
                            <p className='my-auto w-4/1 pl-5 text-xl xl:text-2xl'>{ContactInfo.tele}</p>
                        </div>
                        <div className='flex h-20 overflow-hidden'>
                            <Image width={500} height={500} src={'/icon/user-profile-group_white.svg'} alt='group' className='w-1/2 aspect-square' />
                            <p className='my-auto w-4/1 pl-5 text-xl xl:text-2xl'>{ContactInfo.email}</p>
                        </div>
                        <div className='flex h-20 overflow-hidden w-full'>
                            <p className='my-auto text-[1rem]'>
                                {`© ${web_lisence.year} โดย ${web_lisence.madeFor}`} <br />
                                {`ภูมิใจสร้างสรรค์โดย ${web_lisence.creater}`}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <form onSubmit={handleSubmit} className="text-beige p-6 w-full max-w-xl mx-auto">
                    <div className="flex gap-4 mb-10">
                        <input name="firstName" onChange={handleChange} placeholder="ชื่อ" className="w-1/2 bg-transparent border-b border-beige p-2" />
                        <input name="lastName" onChange={handleChange} placeholder="นามสกุล" className="w-1/2 bg-transparent border-b border-beige p-2" />
                    </div>
                    <input name="email" onChange={handleChange} required placeholder="อีเมล *" className="w-full bg-transparent border-b border-beige p-2 mb-10" />
                    <div className="flex gap-4 mb-10">
                        <input name="phone" onChange={handleChange} placeholder="โทรศัพท์" className="w-1/2 bg-transparent border-b border-beige p-2" />
                        <input name="address" onChange={handleChange} placeholder="ที่อยู่" className="w-1/2 bg-transparent border-b border-beige p-2" />
                    </div>
                    <button type="submit" className="border border-beige mx-auto w-[80%] flex
                    justify-center py-2 mt-2 hover:bg-beige hover:text-black">ส่ง</button>
                </form>
            </section>
        </footer>
    )
}

export default Contact