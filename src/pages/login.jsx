import { Primary } from "../components/buttons/Primary";
import { FormLogin, FJustify, FCenter, Dados, Welcome } from '../components/form/styled';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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

                        <label for="user">
                            <FontAwesomeIcon className="fa" icon={faUser} />
                            <input name="user" id="user" type="text" placeholder="Digite seu email ou usuário"/>                        
                        </label>

                        <label for="password">
                            <input type="password"  placeholder="Digite sua senha" />
                        </label>

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