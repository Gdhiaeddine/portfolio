"use client"
import { Menu } from 'lucide-react'
import { lato, playfair } from '../font'
import { useState } from 'react'

export default function NavBar() {
    const [openNavBar, setOpenNavBar] = useState<boolean>(false)
    return (
        <div className="Header flex flex-col gap-2 md:flex-row justify-between items-center mb-4 max-w-11/12 mx-auto p-4">
            <div className="logo">
                <h1 className={`${playfair.className} text-xl font-bold lg:text-2xl`}>Zaki Tebiche</h1>
            </div>
            <div className="nav">
                {/*<div className="sm:hidden hover:pointer">
                    <Menu onClick={() => setOpenNavBar(!openNavBar)} />
                </div>*/}
                {/*openNavBar && (
                    <div className='absolute top-0 left-0 bg-black h-dvh w-dvw flex items-center justify-center'>
                        <span className='absolute right-10 top-5 cursor-pointer' onClick={() => setOpenNavBar(!openNavBar)}>X</span>
                        <ul className={`${lato.className} flex-col gap-3 text-md font-medium sm:hidden `}>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Experience</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                )
                */}
                <ul className={`${lato.className} flex gap-4 sm:text-md sm:font-medium sm:text-lg`}>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}