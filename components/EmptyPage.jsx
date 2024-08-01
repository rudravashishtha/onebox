import React from 'react'
import NoMessage from '../public/no-message.svg'
import Image from 'next/image'

const EmptyPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 text-center'>
        <Image src={NoMessage} alt='Nothing to Show' width={300} height={300} className='mb-5' />
        <h3 className='text-lg'>It{"'"}s the beginning of a legendary sales pipeline</h3>
        <p className='text-sm w-[70%] text-[#9E9E9E]'>When you have inbound E-mails you{"'"}ll see them here</p>

    </div>
  )
}

export default EmptyPage