import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordion } from './components/Accordion'
import { MyContext } from './context/MyContext'
import { ComponenteA } from './components/ComponenteA'

function App() {
  const value = "hola"


  //segundo llamo a mi contexto.provider y le paso el valor a recibir
  return (
    <MyContext.Provider value={value}>
      <>
        <Accordion />
        <ComponenteA />
      </>
    </MyContext.Provider>

  )
}

export default App
