import { Button, TextField, Typography } from '@mui/material'
import { Container, FColumnGap } from '../../../components/form/styles'
import { authPagesStyles } from '../../../shared/styles/authPagesStyles'
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { requestRecoveryFormSchema } from '../../../shared/validators/auth/authFormSchemas'
import { LoadingConsumer } from '../../../context/loadingContext'
import { AuthBaseTemplate } from '../authBaseTemplate'
import { AuthService } from '../../../service/authService'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { parseErrorMessage } from '../../../utils/requestErrorMessage.util'

export const RequestRecovery = () => {
    const loadingConsumer = LoadingConsumer()
    const navigate = useNavigate()

    const submit = async (form) => {
      loadingConsumer.show()

      try {
        await AuthService.requestRecovery(form)

        navigate('/validate-recovery', { state: { email: form.email } })
      } catch (error) {
        if (error instanceof AxiosError) {
          const { message } = error.response.data

          toast.error(parseErrorMessage(message))
        }
      }

      loadingConsumer.hide()
    }

    return (
      <AuthBaseTemplate title='Esqueci a senha' description='Digite seu e-mail e enviaremos um código para você recuperá-la.'>
        <Formik initialValues={{ email: '' }} validationSchema={toFormikValidationSchema(requestRecoveryFormSchema)} onSubmit={submit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FColumnGap>
                <FColumnGap>
                  <TextField label='Email' type='email' name='email' placeholder='Digite seu email' value={values.email} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.email && errors.email)} helperText={touched.email && errors.email}/>
                </FColumnGap>

                <Button type='submit' disabled={isSubmitting} variant='contained' fullWidth>Recuperar senha</Button>

                <Container>
                  <Typography typography='h7'>Lembrou sua senha? <Link to="/login" style={authPagesStyles.linkStyle}>Entrar</Link></Typography>
                </Container>
              </FColumnGap>
            </form>
          )}
        </Formik>
      </AuthBaseTemplate>
    )
}