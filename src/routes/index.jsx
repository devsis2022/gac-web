import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { StudentHome } from '../pages/home/studentHome'
import { AdminHome } from '../pages/home/adminHome'
import { GestorHome } from '../pages/home/gestorHome'
import { CoordinatorHome } from '../pages/home/coordinatorHome'
import { RequireAuth } from '../components/auth'
import { MainRoleChoice } from '../pages/home/mainRoleChoice'
import { RequestRecovery } from '../pages/auth/recovery/requestRecovery'
import { Login } from '../pages/auth/login'
import { Register } from '../pages/auth/register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-recovery" element={<RequestRecovery />} />
        <Route path="/validate-recovery" element={<RequestRecovery />} />
        <Route path="/reset-password" element={<RequestRecovery />} />
        <Route path="/role-choice" element={<MainRoleChoice />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminHome />
            </RequireAuth>
          }
        />
        <Route path="/gestor" element={<GestorHome />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/coordinator" element={<CoordinatorHome />} />
      </Routes>
    </BrowserRouter>
  )
}
