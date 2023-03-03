import { Link, useNavigate } from 'react-router-dom'
import { Container, FColumnGap } from '../../shared/styles/styles'
import { Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { authPagesStyles } from '../../shared/styles/authPagesStyles'
import { registerFormInitialValues, registerFormSchema } from '../../shared/validators/auth/authFormSchemas'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { parseErrorMessage } from '../../utils/requestErrorMessage.util'
import { AuthBaseTemplate } from './authBaseTemplate'
import { AuthService } from '../../service/authService'

export const Register = () => {
  const navigate = useNavigate()

  const onSubmit = async (form) => {
    const body = {
      ...form,
      ...form.passwords,
      username: form.username || null
    }

    delete body.passwords
    delete body.confirmPassword

    try {
      await AuthService.register(body)

      toast.success('Cadastro realizado com sucesso')
      navigate('/login')
    } catch (error) {

      if (error instanceof AxiosError) {
        const { message } = error.response.data

        toast.error(parseErrorMessage(message))

        return;
      }

      toast.error('Erro ao realizar o cadastro')
    }

    return true
  }

  return (
    <AuthBaseTemplate title='Cadastro'>
      <Formik initialValues={registerFormInitialValues} validationSchema={toFormikValidationSchema(registerFormSchema)} onSubmit={onSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FColumnGap>
            <FColumnGap>
              <TextField label='Nome' type='text' name='name' placeholder='Digite seu nome' value={values.name} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.name && errors.name)} helperText={touched.name && errors.name}/>
              <TextField label='Nome de usuário' type='text' name='username' placeholder='Digite seu nome de usuário' value={values.username} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.username && errors.username)} helperText={touched.username && errors.username}/>
              <TextField label='Email' type='email' name='email' placeholder='Digite seu email' value={values.email} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.email && errors.email)} helperText={touched.email && errors.email}/>
              <TextField label='Cpf' type='text' name='cpf' placeholder='Digite seu cpf' value={values.cpf} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.cpf && errors.cpf)} helperText={touched.cpf && errors.cpf}/>
              <TextField label='Senha' type='password' name='passwords.password' placeholder='Digite sua senha' value={values.passwords.password} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.passwords?.password && errors.passwords?.password)} helperText={touched.passwords?.password && errors.passwords?.password}/>
              <TextField label='Confirmar senha' type='password' name='passwords.confirmPassword' placeholder='Repita sua senha' value={values.passwords.confirmPassword} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.passwords?.confirmPassword && errors.passwords?.confirmPassword)} helperText={touched.passwords?.confirmPassword && errors.passwords?.confirmPassword}/>
            </FColumnGap>

            <Button type='submit' disabled={isSubmitting} variant='contained' fullWidth>Cadastrar</Button>
            <Container>
              <Link to="/login" style={authPagesStyles.linkStyle}>
                <Typography typography='h7'>Já tenho cadastro</Typography>
              </Link>
            </Container>
          </FColumnGap>
        </form>
        )}
      </Formik>
    </AuthBaseTemplate>
  )
}
