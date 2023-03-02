import React from "react"
import { StyledSelect } from "./styled"

export const Select = ({name, onChange, options}) =>{
    return(
            <StyledSelect name={name} onChange={onChange}>
                {options.map((option)=>{
                    return(
                        <option>{option.tittle}</option>
                    )
                })}
            </StyledSelect>
    )
}