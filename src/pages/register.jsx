import { useState } from "react"
import { Primary } from "../components/buttons/Primary"
import { Input } from "../components/input"
import { FormLogin, FJustify, FCenter, Dados, Welcome } from '../components/form/styled';

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
        user.first === user.verify
        ?console.log(user)
        :alert('Senhas diferentes')        
    }
    return(
        <FormLogin>
            <FJustify>
                <Welcome>
                    <FCenter>
                        <h1>Welcome to Gac!</h1>
                        <h2>Realize sua incrição</h2>
                    </FCenter>
                </Welcome>

                <Dados>
                    <FCenter>
                    <Input placeholder={'Nome:'} name={'name'} type={'text'} faIcon={''} onChange={handleChange}/>
                    <Input placeholder={'Nome usuário:'} name={'username'} type={'text'} faIcon={''} onChange={handleChange}/>
                    <Input placeholder={'CPF:'} name={'CPF'} type={'text'} faIcon={''} onChange={handleChange}/>
                    <Input placeholder={'Senha:'} name={'first'} type={'password'} faIcon={''} onChange={handleChange}/>
                    <Input placeholder={'Repetir Senha:'} name={'verify'} type={'password'} faIcon={''} onChange={handleChange}/>
                    <Primary label={'Enviar'} onClick={handleRegister}/>
                    </FCenter>
                    </Dados> 
                </FJustify>
        </FormLogin>
    )
}