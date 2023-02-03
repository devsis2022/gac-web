import { Primary } from '../components/buttons/Primary'
import { FormLogin, FJustify, FCenter, Dados, Welcome } from '../components/form/styled'
import { useState, useCallback, useEffect } from 'react'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Secondary } from '../components/buttons/Secondary'
import { useNavigate } from 'react-router-dom'
import { AuthConsumer } from '../context/authContext'
import { Input } from '../components/input'

export const Login = () => {
  const { login, authed } = AuthConsumer()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUser = ({ target }) => {
    setUser(target.value)
  }
  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleLogin = async () => {
    if (!user || !password) {
      return
    }
    await login(user, password)
  }

  const goToRegister = () => {
    return navigate('/register')
  }

  const goToHome = useCallback(() => {
    const mainRole = localStorage.getItem('mainRole')
    if (!mainRole) return navigate('/role-choice')
    return navigate(`/${mainRole}`)
  }, [navigate])

  useEffect(() => {
    if (!authed) return
    goToHome()
  }, [authed, goToHome])

  return (
    <FormLogin>
      <FJustify>
        <Welcome>
          <FCenter>
            <h1>Welcome to Gac!</h1>
          </FCenter>
        </Welcome>

        <Dados>
          <FCenter>
            <Input
              name="user"
              type="text"
              placeholder="Digite seu email ou usuário"
              onChange={handleUser}
              faIcon={faUser}
            />

            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              onChange={handlePassword}
              faIcon={faLock}
            />
            <Primary label={'Enviar'} onClick={handleLogin} />
            <Secondary label={'Cadastrar'} onClick={goToRegister} />
          </FCenter>
        </Dados>
      </FJustify>
    </FormLogin>
  )
}
