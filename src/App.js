import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <Navbar toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </header>
  )
}

export default App
