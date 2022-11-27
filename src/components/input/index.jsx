import { FJustify } from "../form/styled"

export const Input = ({label,type,name,placeholder, onChange})=>{

    return(
        <FJustify>
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
        </FJustify>            
    )
}