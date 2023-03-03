import React from "react"
import { publicInstance } from "../../service/axios"
import { privateInstance } from "../../service/axios"
import { StyledI } from "./styled"

export const I = ({faLabel, method, url, header})=>{
    const handleSubmit = async () => {
        const {data} = await privateInstance[method](url,header)
    }
    return(
        <StyledI className={faLabel} onClick={handleSubmit}/>
    )
}
