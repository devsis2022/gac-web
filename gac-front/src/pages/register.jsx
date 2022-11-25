import { useState } from "react"
import { Primary } from "../components/buttons/Primary"
import { DFlex, FormComponent } from "../components/form/styled"
import { Input } from "../components/input"

export const Register = () =>{
    const [user,setUser] = useState({
        name : '',
        username: '',
        CPF : '',
        password: {
            first: '',
            verify: ''
        }
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const handleRegister = ()=>{
        console.log(user)
    }
    return(
        <FormComponent>
            <DFlex>
                <Input label={'Nome:'} name={'name'} type={'text'} onChange={handleChange}/>
                <Input label={'Nome usuário:'} name={'username'} type={'text'} onChange={handleChange}/>
                <Input label={'CPF:'} name={'CPF'} type={'text'} onChange={handleChange}/>
                <Input label={'Senha:'} name={'fisrt'} type={'password'} onChange={handleChange}/>
                <Input label={'Repetir Senha:'} name={'verify'} type={'password'} onChange={handleChange}/>
                <Primary label={'Enviar'} onClick={handleRegister}/>
            </DFlex>            
        </FormComponent>
    )
}