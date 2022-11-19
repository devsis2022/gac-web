import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Login} from '../pages/login'
import { Register } from '../pages/register'

export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}