import React from 'react'

const SingleMail = ({subject, fromEmail, toEmail, body}) => {
    return (
        <div className='mr-4  border border-gray-700 p-3 text-[14px] flex flex-col gap-2.5 text-left mb-3'> 
        <div className='flex justify-between'>
           <p>{subject}</p>
           <p className='text-[#AEAEAE]'>20 june 2022 : 9:16AM</p>
        </div>
        <p className='text-[#AEAEAE]'>from : {fromEmail} </p>
        <p className='text-[#AEAEAE]'>to : {toEmail}</p>
        <p className={'w-[500px]'}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",")[0]} ,</p>
        <p className='w-[500px]'>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",").slice(1)}</p>
    
        </div>
      )
}

export default SingleMail