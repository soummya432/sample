import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './auth/login'

function App() {
  const [count, setCount] = useState(0)
  const increment=() => {
    if(count<10)
    {
      setCount((count) => count + 1)
    }
}
  const decrement=() =>{
    if(count>-10){
    setCount((count)=> count-1)}
    }
  return (
    <Login/>
  )
}

export default App
