import { Button, TextField, Typography } from '@mui/material'
import { Container, FColumnGap } from '../../../shared/styles/styles'
import { authPagesStyles } from '../../../shared/styles/authPagesStyles'
import { Formik } from 'formik'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { resetPasswordFormSchema } from '../../../shared/validators/auth/authFormSchemas'
import { LoadingConsumer } from '../../../context/loadingContext'
import { AuthBaseTemplate } from '../authBaseTemplate'
import { AuthService } from '../../../service/authService'
import { toast } from 'react-toastify'

export const ResetPassword = () => {
    const loadingConsumer = LoadingConsumer()
    const location = useLocation()
    const navigate = useNavigate()

    const submit = async (form) => {
      loadingConsumer.show()

      const body = {
        ...location.state,
        ...form
      }

      try {
        await AuthService.resetPassword(body)

        toast.success('Senha alterada com sucesso')
        navigate('/login')
      } catch (error) {
        toast.error('Erro ao realizar a solicitação')
      }

      loadingConsumer.hide()
    }

    return (
      <AuthBaseTemplate title='Nova senha' description='Digite sua nova senha.'>
        <Formik initialValues={{ password: '' }} validationSchema={toFormikValidationSchema(resetPasswordFormSchema)} onSubmit={submit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FColumnGap>
                <FColumnGap>
                  <TextField label='Senha' type='password' name='password' placeholder='Digite sua nova senha' value={values.password} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.password && errors.password)} helperText={touched.password && errors.password}/>
                </FColumnGap>

                <Button type='submit' disabled={isSubmitting} variant='contained' fullWidth>Recuperar senha</Button>

                <Container>
                  <Typography typography='h7'>Lembrei sua senha? <Link to="/login" style={authPagesStyles.linkStyle}>Entrar</Link></Typography>
                </Container>
              </FColumnGap>
            </form>
          )}
        </Formik>
      </AuthBaseTemplate>
    )
}