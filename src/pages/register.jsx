import { useState } from "react"
import { Primary } from "../components/buttons/Primary"
import { DFlex, FormComponent } from "../components/form/styled"
import { Input } from "../components/input"

export const Register = () =>{
    const [user,setUser] = useState({
        name : '',
        username: '',
        CPF : '',
        first: '',
        verify: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const handleRegister = ()=>{
        if(user.first === user.verify){
            console.log(user)
        }
        alert('Senhas diferentes')        
    }
    return(
        <FormComponent>
            <DFlex>
                <Input label={'Nome:'} name={'name'} type={'text'} onChange={handleChange}/>
                <Input label={'Nome usuário:'} name={'username'} type={'text'} onChange={handleChange}/>
                <Input label={'CPF:'} name={'CPF'} type={'text'} onChange={handleChange}/>
                <Input label={'Senha:'} name={'first'} type={'password'} onChange={handleChange}/>
                <Input label={'Repetir Senha:'} name={'verify'} type={'password'} onChange={handleChange}/>
                <Primary label={'Enviar'} onClick={handleRegister}/>
            </DFlex>            
        </FormComponent>
    )
}