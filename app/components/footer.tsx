import React from 'react'
import { playfair } from '../font'

export default function Footer() {
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='flex text-sm'>
                <div className={`${playfair.className}`}>&copy; GuettafDev. All rights reserved</div>
                <div>

                </div>
            </div>
        </div>
    )
}
