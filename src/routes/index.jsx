import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { StudentHome } from '../pages/home/studentHome'
import { AdminHome } from '../pages/home/adminHome'
import { GestorHome } from '../pages/home/gestorHome'
import { CoordinatorHome } from '../pages/home/coordinatorHome'
import { RequireAuth } from '../components/auth'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
