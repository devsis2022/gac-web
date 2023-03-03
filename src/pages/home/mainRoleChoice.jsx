import { publicInstance } from "../../service/axios"
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
export const MainRoleChoice = () => {

  const sendToAnyRole = async() => {
    if(!sessionStorage.getItem('token')){
      window.location.pathname = ('/login');
      return 
    }

    const {data} = await publicInstance.get('user/whoami', { headers: {'authorization':'Bearer ' + sessionStorage.getItem('token')}});
    sessionStorage.setItem('role',data.roles[0].name )
    window.location.pathname = ('/'+data.roles[0].name);
  }

  useEffect(() => {
    sendToAnyRole();
  })

  return (
    <>
    </>
  )
}
