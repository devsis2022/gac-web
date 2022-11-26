import { Primary } from "../components/buttons/Primary";
import { FormLogin, FJustify, FCenter, Dados } from '../components/form/styled';
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
                
                <FCenter>
                    <h1>Logo Gac</h1>
                </FCenter>

                <Dados>
                    <FCenter>
                        {/* <input type="text" /> */}
                        <p>dados</p>
                    </FCenter>
                </Dados>
            </FJustify>

                {/* <Input label={'Nome ou email:'} type={'text'} onChange={handleUser}/>
                <Input label={'Senha:'} type={'password'} onChange={handlePassword}/>               
                <FJustify>
                    <Primary label={'Enviar'} onClick={handleLogin}/>
                </FJustify>
                <Link to='/register'>Não possuo cadastro</Link> */}
        </FormLogin>
    )
}