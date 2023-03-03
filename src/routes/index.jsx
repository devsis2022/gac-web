import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { StudentHome } from '../pages/home/studentHome'
import { AdminHome } from '../pages/home/adminHome'
import { GestorHome } from '../pages/home/gestorHome'
import { CoordinatorHome } from '../pages/home/coordinatorHome'
import { RequireAuth } from '../components/auth'
import { MainRoleChoice } from '../pages/home/mainRoleChoice'
import { RequestRecovery } from '../pages/auth/recovery/requestRecovery'
import { Login } from '../pages/auth/login'
import { Logout } from '../pages/auth/logout'
import { Register } from '../pages/auth/register'
import { ValidateRecovery } from '../pages/auth/recovery/validateRecovery'
import { ResetPassword } from '../pages/auth/recovery/resetPassword'
import Tooltip from '@mui/material/Tooltip';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-recovery" element={<RequestRecovery />} />
        <Route path="/validate-recovery" element={<ValidateRecovery />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/role-choice" element={<MainRoleChoice />} />
        <Route
          path="/admin"
          element={
            //<RequireAuth>
              <AdminHome />
            //</RequireAuth>
          }
        />
        <Route path="/gestor" element={<GestorHome />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/coordinator" element={<CoordinatorHome />} />
      </Routes>
    </BrowserRouter>
  )
}
