import React, { useCallback, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Avatar, Button, Typography, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Center, ShadowedContainer, FullSize, Container, FColumnGap, FRow, ContainerQueryHide } from '../components/form/styles'
import { AuthConsumer } from '../context/authContext'
import { authPagesStyles } from '../shared/styles/authPagesStyles';
import { loginFormSchema } from '../shared/validators/auth/authFormSchemas';

export const Login = () => {
  const { login, authed } = AuthConsumer()
  const navigate = useNavigate()

  const onSubmit = async (form) => {
    const { user, password } = form;

    if (!await login(user, password)) {
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
          <ContainerQueryHide maxWidth="1000px" style={authPagesStyles.presentationContainerStyle}>
            <Center>
              <Container>
                <Typography typography='h3' fontWeight='bold' color='whitesmoke'>Bem vindo ao GAC</Typography>
                <Typography typography='h6' color='whitesmoke'>Gerenciamento de Atividades Complementares</Typography>
              </Container>
            </Center>
          </ContainerQueryHide>

          <Container style={authPagesStyles.formContainerStyle}>
            <Center>
              <ShadowedContainer style={{ width: '264px' }}>
                <FColumnGap>
                  <Container>
                    <Center>
                      <Avatar style={authPagesStyles.avatarStyle}>
                        <LockOutlinedIcon />
                      </Avatar>
                    </Center>
                  </Container>

                  <Container>
                    <Center>
                      <Typography typography='h5' color='GrayText' fontWeight='bold'>Login</Typography>
                    </Center>
                  </Container>
                </FColumnGap>

                <Container>
                  <Formik initialValues={{ user: '', password: '' }} validationSchema={toFormikValidationSchema(loginFormSchema)} onSubmit={onSubmit}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form onSubmit={handleSubmit}>
                        <FColumnGap>
                          <FColumnGap>
                            <TextField label='Usuário/Email' type='text' name='user' placeholder='Digite seu usuário ou email' value={values.user} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.user && errors.user)} helperText={touched.user && errors.user}/>
                            <TextField label='Senha' type='password' name='password' placeholder='Digite sua senha' value={values.password} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.password && errors.password)} helperText={touched.password && errors.password}/>
                          </FColumnGap>

                          <Button type='submit' disabled={isSubmitting} variant='contained' fullWidth>Entrar</Button>
                          <Container>
                            <Link to="/recovery" style={authPagesStyles.linkStyle}>
                              <Typography typography='h7'>Esqueci minha senha</Typography>
                            </Link>
                            <Link to="/register" style={authPagesStyles.linkStyle}>
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
