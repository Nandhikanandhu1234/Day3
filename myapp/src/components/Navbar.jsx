import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar>
        <Toolbar>
            <Typography variant='h5'>myapp</Typography>
            <Link to='/login'>
            <Button variant='contained'>Login</Button>
            </Link>
            <Link to='/'>
            <Button variant='contained'>Signup</Button>
            </Link>
            <Link to='/state'>
            <Button variant='contained'>State</Button>
            </Link>
            <Link to='/counter'>
            <Button variant='contained'>Counter</Button>
            </Link>
            <Link to='/naming'>
            <Button variant='contained'>Naming</Button>
            </Link>
            <Link to='/api'>
            <Button variant='contained'>api</Button>
            </Link>
            <Link to='/c'>
            <Button variant='contained'>pokemon</Button>
            </Link>
        </Toolbar>
    </AppBar>
    <br /><br /><br />
    </div>
  )
}

export default Navbar