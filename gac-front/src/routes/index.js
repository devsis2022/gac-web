import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Login} from '../pages/login'
import { Register } from '../pages/register'
import { IsAuth } from '../components/is-auth'

export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path='/register' element={<Register/>} exact/>
                
            </Routes>
        </BrowserRouter>
    )
}