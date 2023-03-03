import { Button, Typography, FormHelperText } from '@mui/material'
import { Container, FColumnGap } from '../../../components/form/styles'
import { authPagesStyles } from '../../../shared/styles/authPagesStyles'
import { Link, useNavigate, use, useLocation } from 'react-router-dom'
import { validateRecoveryFormSchema } from '../../../shared/validators/auth/authFormSchemas'
// import { LoadingConsumer } from '../../../context/loadingContext'
import { AuthBaseTemplate } from '../authBaseTemplate'
import { InputCode } from '../../../components/inputCode'
import { useState } from 'react'
import { ZodError } from 'zod'
import { LoadingConsumer } from '../../../context/loadingContext'
import { AuthService } from '../../../service/authService'
import { toast } from 'react-toastify'

export const ValidateRecovery = () => {
    const loadingConsumer = LoadingConsumer()
    const navigate = useNavigate()
    const location = useLocation()
    const [inputState, setInputState] = useState({
      value: '',
      error: false,
      touched: false,
      errorMessage: null,
      isSubmitting: false
    })

    const validate = (value) => {
      const { success, error } = validateRecoveryFormSchema.safeParse(value)

      if (error && !(error instanceof ZodError)) {
        return
      }

      return { isValid: success, message: error && error.errors[0].message}
    }

    const validateCode = async (recoveryCode) => {
      loadingConsumer.show()

      const body = {
        email: location.state.email,
        recoveryCode
      }

      try {
        const { data: { valid } }  = await AuthService.validateRecovery(body)

        if (!valid) {
          toast.error('Código inválido')
        } else {
          navigate('/reset-password', { state: body })
        }


      } catch (error) {
        toast.error('Erro ao realizar a solicitação')
      }

      loadingConsumer.hide()
    }

    const handleChange = (value) => {
      const { isValid, message } = validate(value)

      setInputState({
        ...inputState,
        value,
        error: !isValid,
        errorMessage: !isValid ? message : '',
        isSubmitting: false,
        touched: true
      })
    }

    const updateSubmitButton = (state) => {
      setInputState({
        ...inputState,
        isSubmitting: state
      })
    }

    const submit = (value) => {
      value.preventDefault()

      setInputState({
        ...inputState,
        isSubmitting: true
      })

      validateCode(inputState.value).then(() => {
        updateSubmitButton(false)
      }, () => {
        updateSubmitButton(false)
      })
    }

    return (
      <AuthBaseTemplate title='Código de validação' description='Digite o código enviado para o seu email'>
        <form onSubmit={submit}>
          <FColumnGap>
            <Container>
              <InputCode fields={6} name='code' value={inputState.value} error={inputState.error} onChange={handleChange} autoFocus />
              <FormHelperText error={true}>{inputState.touched && inputState.errorMessage}</FormHelperText>
            </Container>

            <Button type='submit' disabled={inputState.isSubmitting} variant='contained' fullWidth>Recuperar senha</Button>

            <Container>
              <Typography typography='h7'>Lembrou sua senha? <Link to="/login" style={authPagesStyles.linkStyle}>Entrar</Link></Typography>
            </Container>
          </FColumnGap>
        </form>
      </AuthBaseTemplate>
    )
}