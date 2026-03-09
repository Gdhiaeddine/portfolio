import React from 'react'
import { playfair } from '../font'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <div className='my-4 max-w-11/12 mx-auto text-white'>
            <div className='flex text-sm justify-between'>
                <div className={`${playfair.className}`}>&copy; GuettafDev. All rights reserved</div>
                <div>
                    <div className='flex gap-2'>
                        <Link href="#">
                            <Instagram size={20}/>
                        </Link>
                        <Link href="#">
                            <Facebook size={20}/>
                        </Link>
                        <Link href="#">
                            <Linkedin size={20}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
