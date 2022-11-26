import axios from 'axios'

const clientConfiguration = () =>{
    return{
        //baseUrl: ,
        headers: {
            common:{
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        }
    }
}
export const client = axios.create(clientConfiguration)