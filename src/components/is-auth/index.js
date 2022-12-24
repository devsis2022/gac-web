import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const IsAuth = ({type=['admin','gestor','cordinator','student'],component}) =>{
    const role = sessionStorage.getItem('type')

    if(type.includes(role)){
        return component || <Outlet/>
    }

    if(role.includes(['admin','gestor','cordinator','student'])){        
        return <Navigate to={`/${type}`} />
    }

    return <Navigate to='/' />
}