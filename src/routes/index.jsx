import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { StudentHome } from '../pages/home/studentHome'
import { AdminHome } from '../pages/home/adminHome'
import { GestorHome } from '../pages/home/gestorHome'
import { CoordinatorHome } from '../pages/home/coordinatorHome'
import { RequireAuth } from '../components/auth'
import { RequestRecovery } from '../pages/auth/recovery/requestRecovery'
import { Login } from '../pages/auth/login'
import { Logout } from '../pages/auth/logout'
import { Register } from '../pages/auth/register'
import { ValidateRecovery } from '../pages/auth/recovery/validateRecovery'
import { ResetPassword } from '../pages/auth/recovery/resetPassword'
import { Home } from '../pages/home/home'
import { UserProfile } from '../pages/user/userProfile'
import { Header } from '../components/header'

export const AppRoutes = () => {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request-recovery" element={<RequestRecovery />} />
          <Route path="/validate-recovery" element={<ValidateRecovery />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/user-profile" element={<RequireAuth><UserProfile /></RequireAuth>} />
          <Route path="/admin" element={<RequireAuth><AdminHome /></RequireAuth>} />
          <Route path="/manager" element={<RequireAuth><GestorHome /></RequireAuth>} />
          <Route path="/student" element={<RequireAuth><StudentHome /></RequireAuth>} />
          <Route path="/coordinator" element={<RequireAuth><CoordinatorHome /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </Header>
  )
}
