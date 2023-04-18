import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

    const nome = "Gabriel"
    const turma = "91"

  return (
    <div className="App">
      <h1>Seu nome é {nome}</h1>
      <h1>Sua turma é {turma}</h1>
    </div>
  )
}

export default App
