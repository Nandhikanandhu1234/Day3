import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const[Counts,setCounts]=useState(0)
    const addhandle=()=>{
        setCounts(Counts+1)

    }
        const subhandle=()=>{
            setCounts(Counts-1)
        }
  return (
    <div>
        <p>Counter {Counts}</p>
        <Button variant='contained' onClick={addhandle}>Increment</Button>
        <Button variant='contained' onClick={subhandle}>Decrement</Button>
    </div>
  )
}

export default Counter