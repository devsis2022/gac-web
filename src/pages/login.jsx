import React, { useCallback, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Avatar, FormControl, InputLabel, Input, Button, Typography, FormHelperText } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Center, ShadowedContainer, FullSize, Container, FColumnGap, FRow, ContainerQueryHide } from '../components/form/styles'
import { AuthConsumer } from '../context/authContext'

const avatarStyle = {
  backgroundColor: '#00a9d4'
}

const presentationContainerStyle = {
  flex: 3,
  backgroundColor: '#00a9d4',
  padding: '48px'
}

const formContainerStyle = {
  flex: 2
}

const schema = z.object({
  email: z.string({ required_error: 'Campo obrigatório' }).email('Email inválido'),
  password: z.string({ required_error: 'Campo obrigatório' }).min(6, 'A senha deve ter no mínimo 6 caracteres')
})

export const Login = () => {
  const { login, authed } = AuthConsumer()
  const navigate = useNavigate()

  const onSubmit = async (form) => {
    const { email, password } = form;

    if (!await login(email, password)) {
      toast.error('Erro ao realizar o login')
    }

    return
  }

  const goToHome = useCallback(() => {
    const mainRole = localStorage.getItem('mainRole')

    if (mainRole) {
      return navigate(`/${mainRole}`)
    }

    return navigate('/role-choice')
  }, [navigate])

  useEffect(() => {
    authed && goToHome()
  }, [authed, goToHome])

  return (
      <FullSize>
        <FRow>
          <ContainerQueryHide maxWidth="1000px" style={presentationContainerStyle}>
            <Center>
              <Container>
                <Typography typography='h3' fontWeight='bold' color='whitesmoke'>Bem vindo ao GAC</Typography>
                <Typography typography='h6' color='whitesmoke'>Gerenciamento de Atividades Complementares</Typography>
              </Container>
            </Center>
          </ContainerQueryHide>

          <Container style={formContainerStyle}>
            <Center>
              <ShadowedContainer style={{ width: '264px' }}>
                <FColumnGap>
                  <Container>
                    <Center>
                      <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                      </Avatar>
                    </Center>
                  </Container>

                  <Container>
                    <Center>
                      <Typography typography='h5' color='GrayText' fontWeight='bold'>Login GAC</Typography>
                    </Center>
                  </Container>
                </FColumnGap>

                <Container>
                  <Formik initialValues={{ email: '', password: '' }} validationSchema={toFormikValidationSchema(schema)} onSubmit={onSubmit}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form onSubmit={handleSubmit}>
                        <FColumnGap>
                          <FColumnGap>
                            <FormControl>
                              <InputLabel htmlFor='email-input' error={!!errors.email}>Email</InputLabel>
                              <Input id='email-input' type='email' name='email' placeholder='Digite seu email' label='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} size='small' error={!!(touched && errors.email)} />
                              <FormHelperText error>{errors.email}</FormHelperText>
                            </FormControl>

                            <FormControl>
                              <InputLabel htmlFor='password-input' error={!!errors.email}>Senha</InputLabel>
                              <Input id='password-input' type="password" name="password" placeholder='Digite sua senha' label="Senha" value={values.password} onChange={handleChange} onBlur={handleBlur} size='small' error={!!errors.password} />
                              <FormHelperText error>{errors.password}</FormHelperText>
                            </FormControl>
                          </FColumnGap>

                          <Button type='submit' disabled={isSubmitting} variant='contained' fullWidth>Entrar</Button>
                          <Container>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                              <Typography typography='h7'>Esqueci minha senha</Typography>
                            </Link>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                              <Typography typography='h7'>Cadastrar-se</Typography>
                            </Link>
                          </Container>
                        </FColumnGap>
                      </form>
                    )}
                  </Formik>
                </Container>
              </ShadowedContainer>
            </Center>
          </Container>
        </FRow>
      </FullSize>
  )
}
