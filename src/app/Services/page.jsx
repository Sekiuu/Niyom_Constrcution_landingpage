import React from 'react'
import Image from 'next/image'
import { serviceInfo } from '../Data/data.js'
const { best_services, services } = serviceInfo;
function Service() {
  return (
    <section className='w-full lg:px-[5%] max-xl:pt-[20%] pt-[8%] flex'>
      <div className='service_page border w-full'>

        <div className='bg-stone-600 md:py-[10%] px-[10%] box-m'>
          <h1>หัวข้อตัวอย่าง</h1>
        </div>
        <div className='box-m row-start-2'>
          <Image alt='' width={1024} height={1024} src={'./icon/no_img.svg'} className='bg-white object-cover lg:aspect-[3/4] aspect-video' />
        </div>
        {
          services.map((item, index) => (
            <div key={index} className='lg:py-[10%] py-[5%] box-s'>
              <h2>{item.title}</h2>
              <p className='px-[10%]'>{item.description}</p>
            </div>
          ))
        }

        <div className='lg:py-[10%] py-[5%] px-[10%] box-m'>
          <h1>หัวข้อตัวอย่าง</h1>
        </div>

        {
          best_services.map((item, index) => (
            <div key={index} className='lg:py-[10%] py-[5%] box-s'>
              <h2>{item.title}</h2>
              <p className='px-[10%]'>{item.description}</p>
            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Service