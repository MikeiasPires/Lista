import React from 'react'
import './style.css'
import { Card } from '../../Components'
import { useState, useEffect } from 'react'

export function Home() {

  const [studentName, setStudantName] = useState('')
  const [armazen, setArmazen] = useState ([])
  const [user, setUser] = useState({name:'', avatar:''})


  function handleAddStudant(){
    
  const NewStudant = {
    name:studentName,
    time: new Date().toLocaleTimeString("pt-br",{
    hour: "2-digit",
    minute: "2-digit",
    second:"2-digit",
  }) 
  }
   setArmazen(prevState =>[ ...prevState,NewStudant])
  }
  


 useEffect(() => {
   fetch("https://api.github.com/users/Mikeiaspires")
   .then(response => response.json())
   .then(data => {
    setUser({
      name:data.name,
      avatar:data.avatar_url,
    })
   })
 },[])

 
  return (
    <div className='Container'>
      <header>
      <h1>Lista de presente</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="foto do gostosão " />
      </div>
      </header>

      <h2>Alunos</h2>

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

      { armazen.map( armazenName => 
      <Card 
      key={armazenName.time}
      name={armazenName.name}
      time={armazenName.time} />)}

    </div>
  )
}

  

