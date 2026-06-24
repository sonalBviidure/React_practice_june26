import React from 'react'

const Card = (props) => (
  <div>
    <div className="parent-card">
      <h1>{props.user} </h1>
      <img src={props.img} alt={props.alt} height="200px" width="200px" />
      <p>lorem2020 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      <button>Click Me</button>
    </div>
  </div>
)

export default Card
