import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 p-8 left-0 h-full w-full flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold'>{props.id+1}</h2>
        <div>
            <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio pariatur velit amet nisi dignissimos?</p>
            <div className="flex justify-between">
                <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
                <button><i className="ri-arrow-right-line bg-blue-600 text-white font-medium px-3 py-2 rounded-full"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
