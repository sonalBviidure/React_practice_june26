import React from 'react'
import './App.css'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Sonali" img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfHwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image"/>
      <Card user="Rushikesh" img="https://plus.unsplash.com/premium_photo-1780656146074-35e9c3bf251b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="second img"/>
    </div>
  )
}

export default App
