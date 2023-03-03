export const Logout = () => {
    
    const cleanSessionStorage = (() => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')

        window.location.pathname = ('/login');
        return;
    })  
  
    cleanSessionStorage()
  
    return (
        <div></div>
    )
  }