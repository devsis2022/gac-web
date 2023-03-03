import AdminList from "../../components/admin/list/AdminList"
import { Profile } from '../../components/profile'
export const AdminHome = () => {
  return (
    <div>
      <h1>Admin Home</h1>
      <Profile></Profile>
      <AdminList/>
    </div>
  )
}
