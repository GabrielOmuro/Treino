import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import FaleMeuNome from './components/FaleMeuNome'

function App() {

    const nome = "Andril"

  return (
    <div className="App">
      <h1>Seu nome é {nome}</h1>
      <HelloWorld/>
      <FaleMeuNome nome="Matias"/>
      <FaleMeuNome nome="Arthur"/>
      <FaleMeuNome nome={nome}/>
    </div>
  )
}

export default App
