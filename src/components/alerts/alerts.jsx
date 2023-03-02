import React from "react"
import { StyledAccepted } from "./accepted"
import { StyledDenied } from "./denied"
import { StyledWaiting } from "./waiting"

export const Accepted = ()=>{
    return(
        <StyledAccepted>Aceito</StyledAccepted>
    )
}
export const Denied = () =>{
    return(
        <StyledDenied>Negado</StyledDenied>
    )
}
export const Waiting = ()=>{
    return(
        <StyledWaiting>Em espera</StyledWaiting>
    )
}