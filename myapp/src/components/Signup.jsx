import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
       <h2>Signup page</h2>
       <TextField varient="outline" label="Username"> </TextField>
       <br /><br />
       <TextField varient="outline" label="password"> </TextField>
       <br /><br />
       <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup