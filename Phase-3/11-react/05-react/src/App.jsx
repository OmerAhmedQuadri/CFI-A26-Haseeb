import React from 'react'
import Button from './components/Button.jsx'

const App = () => {
  return (
    <div className= 'flex justify-center items-center gap-3 h-screen'>

  <Button disabled = {false} text = 'primary' size = 'large' color = 'success' 
  onClick = {()=>{console.log('Button Clicked')}}/>
  
  <Button disabled = {false} text=  'danger' size = 'large' color = 'warning'
  onClick = {()=>{console.log('Button Clicked')}}
  />
  </div>
  ) 
}

export default App
