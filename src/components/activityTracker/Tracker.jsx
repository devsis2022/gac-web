import React from "react"
import { DFlexRow, DFlexColumn } from "../form/styled"
import LinearWithValueLabel from "../progressBar/ProgressBar"

export const Tracker = ({items}) => {
    return(
        <div>
            <DFlexColumn>
                <DFlexRow>
                    <h3>Total</h3>
                    <LinearWithValueLabel value={100}/>
                </DFlexRow>
                    <hr/>
                {items.map((item)=>{
                    const percentage = (item.currentHour/item.maxHour)*100
                    console.log(percentage)
                    return(
                        <DFlexRow>
                            <h3>{item.tittle}</h3>
                            <LinearWithValueLabel value={percentage}/>
                        </DFlexRow>
                    )
                })}
            </DFlexColumn>
        </div>
    )
}