import React from 'react'
import {Button} from '@mui/material'

export const Navbar = () => {
  return (
    <div>
        <Button variant="contained">Add Country</Button>
        <Button variant="contained">Add City</Button>
        <Button variant="contained">Filter by City</Button>
        <Button variant="contained">Sort by asc</Button>
        <Button variant="contained">Sort by des</Button>
        <Button variant="contained">Delete a city</Button>
    </div>
  )
}
