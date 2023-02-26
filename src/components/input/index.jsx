import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Input = ({ type, name, placeholder, onChange, faIcon }) => {
  return (
    <label>
      
      
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </label>
  )
}
