import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className=' w-full lg:h-screen h-[50vh] relative'>
            <Image src="/slide1.jpg" alt='' className='w-full h-full' width={500} height={500} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B2615]/68 via-[#4B2615]/28 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B2615]/60 via-transparent to-[#4B2615]/20"></div>
        </div>
    )
}

export default Hero
