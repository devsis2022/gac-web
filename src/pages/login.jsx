import { Primary } from "../components/buttons/Primary";
import { FormLogin, FJustify, FCenter, Dados, Welcome } from '../components/form/styled';
import { Link } from "react-router-dom";
import { useState } from "react";

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
        <FormLogin>
            <FJustify>
                <Welcome>
                    <FCenter>
                        <h1>Welcome to Gac!</h1>
                    </FCenter>
                </Welcome>

                <Dados>
                    <FCenter>
                        <h1>LOGIN</h1>
                        <input type="text"      placeholder="Digite seu email ou usuário" />
                        <input type="password"  placeholder="Digite sua senha" />
                    </FCenter>
                </Dados>
            </FJustify>
        </FormLogin>
    )
}

{/* <Input label={'Nome ou email:'} type={'text'} onChange={handleUser}/>
                <Input label={'Senha:'} type={'password'} onChange={handlePassword}/>               
                <FJustify>
                    <Primary label={'Enviar'} onClick={handleLogin}/>
                </FJustify>
                <Link to='/register'>Não possuo cadastro</Link> */}