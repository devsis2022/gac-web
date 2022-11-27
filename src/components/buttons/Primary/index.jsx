import { ButtonPrimary } from './styled'

export const Primary = ({onClick, label}) =>{
    
    return (
        <ButtonPrimary onClick={onClick} > {label} </ButtonPrimary>
    )
}