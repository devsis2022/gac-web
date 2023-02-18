import { Profile } from '../../components/profile'
import {DefaultTableList} from '../../components/tableList'
import { StudentModal } from '../../components/modal/modal'



export const StudentHome = () => {

  return (
    <div>
      <Profile />
      <StudentModal/>
      <DefaultTableList/>
    </div>
  )
}
