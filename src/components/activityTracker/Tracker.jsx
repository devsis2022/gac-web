import React from "react"
import { DFlexRow, DFlexColumn } from "../form/styled"
import LinearWithValueLabel from "../progressBar/ProgressBar"

export const Tracker = ({items}) => {
    return(
        <div>
            <DFlexColumn>
                {items.map((item)=>{
                    return(
                        <DFlexRow>
                            <h3>{item}</h3>
                            <LinearWithValueLabel value={10}/>
                        </DFlexRow>
                    )
                })}
            </DFlexColumn>
        </div>
    )
}