import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Login} from '../pages/login'
import { Register } from '../pages/register'
import { IsAuth } from '../components/is-auth'

import {StudentHome} from '../pages/home/studentHome'
import {AdminHome} from '../pages/home/adminHome'
import {GestorHome} from '../pages/home/gestorHome'
import {CoordinatorHome} from '../pages/home/coordinatorHome'


export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/"             element={<IsAuth/>}     />
                <Route path="/Login"        element={<Login/>}      />
                <Route path='/register'     element={<Register/>}   />

                <Route path="admin/home"             element={<IsAuth type={'admin'}         component={<AdminHome/>}        />}/>
                
                <Route path="gestor/home"            element={<IsAuth type={'gestor'}        component={<GestorHome/>}       />}/>
                
                <Route path="student/home"           element={<IsAuth type={'student'}       component={<StudentHome/>}      />}/>
                
                <Route path="coordinator/home"       element={<IsAuth type={'cordinator'}    component={<CoordinatorHome/>}  />}/>
            
            </Routes>
        </BrowserRouter>
    )
}