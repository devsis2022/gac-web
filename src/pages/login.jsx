import { Primary } from '../components/buttons/Primary'
import { FormLogin, FJustify, FCenter, Dados, Welcome } from '../components/form/styled'
import { useState, useContext, useCallback, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Secondary } from '../components/buttons/Secondary'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export const Login = () => {
  const { login, mainRole, authed } = useContext(AuthContext)
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

  const goToHome = useCallback(
    (mainRole) => {
      navigate(`/${mainRole}`)
    },
    [navigate]
  )

  useEffect(() => {
    if (!authed || !mainRole) return
    console.log(`useEffect`, mainRole)
    goToHome(mainRole)
  }, [mainRole, authed, goToHome])

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
            <label htmlFor="user">
              <FontAwesomeIcon className="fa" icon={faUser} />
              <input
                id="user"
                name="user"
                type="text"
                placeholder="Digite seu email ou usuário"
                onChange={handleUser}
              />
            </label>

            <label htmlFor="password">
              <FontAwesomeIcon className="fa" icon={faLock} />
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Digite sua senha"
                onChange={handlePassword}
              />
            </label>
            <Primary label={'Enviar'} onClick={handleLogin} />
            <Secondary label={'Cadastrar'} onClick={goToRegister} />
          </FCenter>
        </Dados>
      </FJustify>
    </FormLogin>
  )
}
