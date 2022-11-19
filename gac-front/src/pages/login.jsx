import { Primary } from "../components/buttons/Primary";
import { DFlex, FJustify, FormComponent } from '../components/form/styled';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/input";

export const Login = ()=>{
    const [user,setUser] = useState('')
    const [passsword,setPassword] = useState('')

    const handleUser = ({target})=>{
        setUser(target.value)
    }
    const handlePassword = ({target}) =>{
        setPassword(target.value)
    }
    const handleLogin = () =>{
        alert(user)
        alert(passsword)
    }

    return(
        <FormComponent>
            <DFlex>
                <Input label={'Nome ou email:'} type={'text'} onChange={handleUser}/>
                <Input label={'Senha:'} type={'password'} onChange={handlePassword}/>               
                <FJustify>
                    <Primary label={'Enviar'} onClick={handleLogin}/>
                </FJustify>
                <Link to='/register'>Não possuo cadastro</Link>
            </DFlex>
        </FormComponent>
    )
}