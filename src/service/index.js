import axios from 'axios'

const clientConfiguration = () =>{
    return{
        baseUrl: 'localhost:3001',
        headers: {
            common:{
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        }
    }
}
export const client = axios.create(clientConfiguration())