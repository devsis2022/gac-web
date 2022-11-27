import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const IsAuth = ({type=['admin','gestor','coordenador','aluno'],component}) =>{
    const role = sessionStorage.getItem('type')
    if(type.includes(role)){
        // console.log(role)
        return component || <Outlet/>
    }
    return <Navigate to='/' />
}