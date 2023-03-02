import { StyledInput } from "./styled"

export const Input = ({ type, name, placeholder, onChange, faIcon }) => {
  return (
    <label>
      <StyledInput type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </label>
  )
}
