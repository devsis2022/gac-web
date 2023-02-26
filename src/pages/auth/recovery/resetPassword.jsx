import { Button, TextField, Typography } from '@mui/material'
import { Container, FColumnGap } from '../../../components/form/styles'
import { authPagesStyles } from '../../../shared/styles/authPagesStyles'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { requestRecoveryFormSchema } from '../../../shared/validators/auth/authFormSchemas'
import { LoadingConsumer } from '../../../context/loadingContext'
import { AuthBaseTemplate } from '../authBaseTemplate'

export const ResetPassword = () => {
    const loadingConsumer = LoadingConsumer()
    const submit = (form) => {
      const { email } = form
      loadingConsumer.show()

      setTimeout(loadingConsumer.hide, 2000)


      console.log(email);
        return true
    }

    return (
      <AuthBaseTemplate title='Esqueci a senha' description='Digite seu e-mail e enviaremos um e-mail para você informando como recuperá-la.'>
        <Formik initialValues={{ email: '' }} validationSchema={toFormikValidationSchema(requestRecoveryFormSchema)} onSubmit={submit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <FColumnGap>
                <FColumnGap>
                  <TextField label='Email' type='email' name='email' placeholder='Digite seu email' value={values.email} onChange={handleChange} onBlur={handleBlur} size='small' variant='standard' error={!!(touched.email && errors.email)} helperText={touched.email && errors.email}/>
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