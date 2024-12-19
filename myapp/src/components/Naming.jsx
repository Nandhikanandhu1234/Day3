import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Naming = () => {
    var[x,setx]=useState()
    const handle=()=>{
        setx("React")
    }
    const addhandle=()=>{
        setx("Vue")
    }
    const subhandle=()=>{
        setx("Angular")
    }
    //use effect
    // useEffect(()=>{},[])
    useEffect(()=>{
        addhandle()
    },[])
  return (
    <div>
        <Typography variant='h6'>Welcome {x}</Typography>
        <br /><br /><br />
        <Button variant='contained' color='primary' onClick={handle}>React</Button>
        <Button variant='contained' color='secondary' onClick={addhandle}>Vue</Button>
        <Button variant='contained' color='success' onClick={subhandle}>Angular</Button>
    </div>
  )
}

export default Naming