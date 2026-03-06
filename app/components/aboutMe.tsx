import React from 'react'
import Image from 'next/image'
import { playfair } from '../font'

const AboutMe = () => {
    return (
        <div className='my-10 flex flex-col gap-8 max-w-3/4 mx-auto lg:flex-row justify-center items-center h-full text-white'>
            <div className='max-w-11/12 lg:max-w-1/2'>
                <Image
                    src={'/picture.png'}
                    height={300}
                    width={300}
                    alt="zakaria tebiche"
                    className='p-4 border border-amber-50'
                />
            </div>
            <div className='max-w-11/12 lg:max-w-1/2'>
                <h1 className={`${playfair.className} text-2xl mb-2`}>About Me</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, obcaecati dolorem consectetur eligendi ducimus assumenda est, accusantium labore, fugit debitis voluptates? Dolorum iusto at officia adipisci. Consectetur nesciunt iusto error!
                    Delectus repellendus ab eos labore natus fuga reiciendis deserunt, vero accusantium possimus, dolorum fugit mollitia, enim eveniet omnis nemo incidunt perspiciatis quod minus voluptates ex? Rem error quibusdam quasi consequatur.
                </p>
            </div>
        </div>
    )
}

export default AboutMe