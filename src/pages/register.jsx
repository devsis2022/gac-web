import { useState } from 'react'
import { Primary } from '../components/buttons/Primary'
import { Input } from '../components/input'
import { publicInstance } from '../service/axios'
import { FormLogin, FJustify, FCenter, Dados, Welcome } from '../components/form/styled'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    cpf: '',
    first: '',
    verify: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setUser({
      ...user,
      [name]: value,
    })
  }
  const handleRegister = async () => {
    if (user.first !== user.verify) {
      // TODO: sinalizar visualmente para o usuário que os campos estão diferentes
      console.log('senhas diferentes')
      return
    }
    // TODO: validação de todos os campos (pode ser feita também após a perda do foco. Pesquisem por onBlur)
    try {
      const response = await publicInstance.post('/auth/signin', {
        name: user.name,
        username: user.username,
        cpf: user.cpf,
        password: user.first,
        email: user.email,
      })
      console.log(response)
      navigate('/login')
    } catch (error) {
      // TODO: apontar o erro recebido da API para o usuário. Pode ser um toast ou... um toast
      console.log(error.response)
    }
  }

  return (
    <FormLogin>
      <FJustify>
        <Welcome>
          <FCenter>
            <h1>Welcome to Gac!</h1>
            <h2>Realize sua incrição</h2>
          </FCenter>
        </Welcome>

        <Dados>
          <FCenter>
            <Input placeholder={'Nome:'} name={'name'} type={'text'} faIcon={''} onChange={handleChange} />
            <Input placeholder={'Nome usuário:'} name={'username'} type={'text'} faIcon={''} onChange={handleChange} />
            <Input placeholder={'Email:'} name={'email'} type={'email'} faIcon={''} onChange={handleChange} />
            <Input placeholder={'CPF:'} name={'cpf'} type={'text'} faIcon={''} onChange={handleChange} />
            <Input placeholder={'Senha:'} name={'first'} type={'password'} faIcon={''} onChange={handleChange} />
            <Input
              placeholder={'Repetir Senha:'}
              name={'verify'}
              type={'password'}
              faIcon={''}
              onChange={handleChange}
            />
            <Primary label={'Enviar'} onClick={handleRegister} />
          </FCenter>
        </Dados>
      </FJustify>
    </FormLogin>
  )
}
