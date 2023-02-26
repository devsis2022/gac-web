import React, { useCallback, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Button, Typography, TextField } from '@mui/material'
import { Container, FColumnGap } from '../../components/form/styles'
import { AuthConsumer } from '../../context/authContext'
import { authPagesStyles } from '../../shared/styles/authPagesStyles';
import { loginFormSchema } from '../../shared/validators/auth/authFormSchemas';
import { LoadingConsumer } from '../../context/loadingContext';
import { AuthBaseTemplate } from './authBaseTemplate';

export const Login = () => {
  const { login, authed } = AuthConsumer()
  const loadingConsumer = LoadingConsumer()
  const navigate = useNavigate()

  const onSubmit = async (form) => {
    const { user, password } = form;
    loadingConsumer.show()

    if (!await login(user, password)) {
      toast.error('Erro ao realizar o login')
    }

    loadingConsumer.hide()

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
      <AuthBaseTemplate title='Login'>
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
                <Typography typography='h7'><Link to="/request-recovery" style={authPagesStyles.linkStyle}>Esqueceu sua senha?</Link></Typography>
                <Typography typography='h7'><Link to="/register" style={authPagesStyles.linkStyle}>Cadastrar-se</Link></Typography>
              </Container>
            </FColumnGap>
          </form>
          )}
        </Formik>
      </AuthBaseTemplate>
  )
}
