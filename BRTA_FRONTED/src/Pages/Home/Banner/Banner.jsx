import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto px-4'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <div className='flex items-center ml-10'>
                        <img className='w-28 h-28' src="/logo.png" />
                        <div>
                            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Bangladesh Road Transport Authority</h1>
                     
                        </div>
                    </div>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/14319623/pexels-photo-14319623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>
        </div>
    )
}

export default Hero