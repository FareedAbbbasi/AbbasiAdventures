import React from 'react'
import { Button } from './Button'

const Navbar = () => {
    return (
        <div className='bg-img pt-[63px]'>
            <div className='w-full'>
                <div className=''>
                    <div className='w-[1278px] h-[67.18px] flex justify-between mx-auto '>
                        <div className='flex items-center'>
                            <img className='w-[126.6px] h-auto' src="/src/assets/logo/logo.png" alt="" />
                        </div>
                        <ul className='flex items-center gap-[50px] text-[17px] text-white'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Upcoming pakages</li>
                        </ul>
                        <div>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar