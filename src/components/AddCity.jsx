import Button from '@mui/material/Button'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AddCity = () => {
    const [city, setCity] = useState({country: ""})

    const dispatch = useDispatch()

    const addcity = () => {
        dispatch(addcity(city.city))
    }

    return <>
        <h2>Add city</h2>
        <input type="text" placeholder='enter country' value={city} onChange={(e) => setCity({...city, country: e.target.value})}/>
        <br /><br />
        <Button variant='contained' color='success' onClick={addcity}>Add City</Button>
    </>
}