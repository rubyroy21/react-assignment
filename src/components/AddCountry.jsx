import Button from '@mui/material/Button'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AddCountry = () => {
    const [country, setCountry] = useState({country: ""})

    const dispatch = useDispatch()

    const addcountry = () => {
        dispatch(addcountry(country.country))
    }

    return <>
        <h2>Add country</h2>
        <input type="text" placeholder='enter country' value={country} onChange={(e) => setCountry({...country, country: e.target.value})}/>
        <br /><br />
        <Button variant='contained' color='success' onClick={addcountry}>Add Country</Button>
    </>
}