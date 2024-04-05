import React from 'react'
import { useState } from 'react'

const Statetwo = () => {
    const [day, SetDay] = useState('thursday')
    const [thing, SetThing] = useState('coding')

    const allday = () => {
        SetDay('friday')
        SetThing('TGIF')
    }
  return (
    <>
    <h1>Today is {day}, {thing} all day.</h1>
    <button onClick={allday}>click</button>
    </>
  )
}

export default Statetwo