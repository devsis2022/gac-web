import { Profile } from '../../components/profile'
import {DefaultTableList} from '../../components/tableList'
import { StudentModal } from '../../components/modal/modal'
import { Waiting } from '../../components/alerts/waiting'



export const StudentHome = () => {

  return (
    <div>
      <Waiting>Aceito</Waiting>
      <Profile />
      <StudentModal/>
      <DefaultTableList/>
    </div>
  )
}
