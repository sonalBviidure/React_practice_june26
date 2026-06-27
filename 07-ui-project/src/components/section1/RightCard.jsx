import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full p-4 overflow-hidden relative w-80 rounded-4xl mt-1 mb-1'>
      <img
        className='w-full h-full object-cover rounded-4xl'
        src={props.img}
        alt="sonali"
      />
      
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard