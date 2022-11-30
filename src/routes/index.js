import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Form } from '../components/form'
export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}