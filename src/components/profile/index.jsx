import { ProfileComponent } from "./styled"
import { publicInstance } from "../../service/axios"
export const Profile = ({user})=>{
    return(
        <ProfileComponent>
            <img src="/logo192.png" alt="imagem" />
            <div>
                <h1>Usuário:</h1>
                <h1>Cadastrado como:</h1>
                <h1>CPF:</h1>
            </div>
        </ProfileComponent>
    )
}