import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'
import { ModeToggle } from './ModeToggle'

const AuthNav = () => {
  return (
    <div className="w-screen top-0 fixed h-[12vw] md:h-[6vw] bg-[#1F1F1F] flex justify-center items-center">
        <Image src={logo} alt='logo' width={150} height={150} />
    </div>
  )
}

export default AuthNav