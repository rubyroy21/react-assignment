import {Routes, Route} from 'react-router-dom'
import {AddCity} from './AddCity'
import {AddCountry} from './AddCountry'
import {HomePage} from './HomePage'

export const AllRoutes = () => {
    return <>
        <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/addcity' element = {<AddCity />} />
            <Route path='/addcountry' element = {<AddCountry />} />
        </Routes>
    </>
}