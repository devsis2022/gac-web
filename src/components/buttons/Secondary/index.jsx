import { ButtonSecondary } from './styled'

export const Secondary = ({onClick, label}) =>{
    
    return (
        <ButtonSecondary onClick={onClick} > {label} </ButtonSecondary>
    )
}