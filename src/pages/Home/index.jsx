import React from 'react'
import './style.css'
import { Card } from '../../Components'
import { useState } from 'react'

export function Home() {

  const [studentName, setStudantName] = useState('')
  const [armazen, setArmazen] = useState ([])

  function handleAddStudant(){
    
  const NewStudant = {
    name:studentName,
    time: new Date().toLocaleTimeString("pt-br",{
    hour: "2-digit",
    minute: "2-digit",
    second:"2-digit",
  }) 
  }
   setArmazen([NewStudant])
  }
  console.log(studentName)
  
  return (
    <div className='Container'>
      <h1>Lista de presente</h1>
      <input
        type="text"
        placeholder='digite aqui'
        onChange={e => setStudantName(e.target.value)}
      >
      </input>
      <button 
         type="button" 
            onClick={handleAddStudant}>
        Adicionar
      </button>

      { armazen.map( armazenName => <Card name={armazenName.name} time={armazenName.time} />)}

    </div>
  )
}

  

