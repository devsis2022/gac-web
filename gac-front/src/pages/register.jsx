import { useState } from "react"
import { Primary } from "../components/buttons/Primary"
import { DFlex, FormComponent } from "../components/form/styled"
import { Input } from "../components/input"

export const Register = () =>{
    const [name,setName] = useState('')
    const [user,setUser] = useState('')
    const [CPF,setCPF] = useState('')
    const [password,setPassword] = useState({
        first: '',
        verify: ''
    })

    const handleName = ({target}) =>{
        setName(target.value)
    }
    const handleUser = ({target}) =>{
        setUser(target.value)
    }
    const handleCPF = ({target}) =>{
        setCPF(target.value)
    }
    const handlePassword = ({target}) =>{
        setPassword(password =>({
            fisrt : target.value
        }))
    }
    const handleRepeat = ({target}) =>{
        setPassword(password =>({
            verify : target.value
        }))
    }
    const handleRegister = ()=>{
        alert(name)
        alert(user)
        alert(CPF)
        alert(password.first)
        alert(password.verify)
    }
    return(
        <FormComponent>
            <DFlex>
                <Input label={'Nome:'} type={'text'} onChange={handleName}/>
                <Input label={'Nome usuário:'} type={'text'} onChange={handleUser}/>
                <Input label={'CPF:'} type={'text'} onChange={handleCPF}/>
                <Input label={'Senha:'} type={'password'} onChange={handlePassword}/>
                <Input label={'Repetir Senha:'} type={'password'} onChange={handleRepeat}/>
                <Primary label={'Enviar'} onClick={handleRegister}/>
            </DFlex>            
        </FormComponent>
    )
}