import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl flex flex-nowrap gap-10 p-6 w-2/3 overflow-x-auto'>
      {props.users.map(function(elem,idx)
      {
        return<RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent