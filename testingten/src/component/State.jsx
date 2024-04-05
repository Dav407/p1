import React from 'react'
import { useState } from 'react'

const State = () => {
    const[name, setName] = useState('Mr David')
    const[job, setJob] = useState('Software-developer')
    const[popo, setPopo] = useState('a ')
    const[account, setAccount] = useState('N10,000')

    const coronation= () => {
        setName('King David')
        setJob('Obong of calabar')
        setPopo(' the ')
        setAccount('$1 trillion')
    }
  return (
    <>
        <h2>My name is {name}, I am {popo}
         { job} and my accout balance is {account}</h2>
        <button onClick={coronation}>Coronation</button>
    </>
  )
}

export default State