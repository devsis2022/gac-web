import { ProfileComponent } from "./styled"
import { publicInstance } from "../../service/axios"
import { useEffect, useState } from "react"
import Tooltip from '@mui/material/Tooltip';

export const Profile = () =>{
    const [user, setUser] = useState({});
    
    const findRole = (role) => {
        switch(role){
            case "student":
                return 'Aluno'
            case "manager":
                return 'Gestor'
            default:
                return ''
        }
    }

    const loadStudentInfo = async () => {
        if(!sessionStorage.getItem('token')){
            window.location.pathname = ('/login');
            
            return
        }else{
            const {data} = await publicInstance.get('user/whoami', { headers: {'authorization':'Bearer ' + sessionStorage.getItem('token')}})
            data.user.role = findRole(sessionStorage.getItem('role'))
            setUser(data.user)

        }
    }

    useEffect(() => {
        loadStudentInfo();
    },[])

    return(
        <ProfileComponent>
            <div>
                <img src="/logo192.png" alt="imagem" className="userImage"/>
                <div className="userInfo">
                    <h3>Nome: {user.name} </h3>
                    <h3>Username: {user.username} </h3>
                    <h3>Email: {user.email} </h3>
                    <h3>Cadastrado como: {user.role} </h3>
                </div>
            </div>
            
            <div className="fa-container center">
                <Tooltip title={"Sair da sua conta"} placement="left">
                    <button className="center">
                        <a href="/logout"><i className="fa fa-power-off center"></i></a>
                    </button>
                </Tooltip>
            </div>

        </ProfileComponent>
    )
}