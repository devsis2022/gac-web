import { redirect } from 'react-router-dom'

export const IsAuth = ({ type, component }) => {
  if (!type) {
    return redirect('/login')
  }
  return component
}
