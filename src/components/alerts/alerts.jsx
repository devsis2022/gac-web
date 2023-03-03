import React from "react"
import { StyledAccepted } from "./accepted"
import { StyledDenied } from "./denied"
import { StyledWaiting } from "./waiting"

export const Accepted = ({content})=>{
    return(
        <StyledAccepted>{ content || 'Aceito' }</StyledAccepted>
    )
}
export const Denied = ({content}) =>{
    return(
        <StyledDenied>{ content ||'Negado' }</StyledDenied>
    )
}
export const Waiting = ({content})=>{
    return(
        <StyledWaiting>{ content ||'Em espera' }</StyledWaiting>
    )
}