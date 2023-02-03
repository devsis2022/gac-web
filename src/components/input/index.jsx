import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Input = ({ type, name, placeholder, onChange, faIcon }) => {
  return (
    <label>
      {faIcon && <FontAwesomeIcon className="fa" icon={faIcon} />}
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </label>
  )
}
