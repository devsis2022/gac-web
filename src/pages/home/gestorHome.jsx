import { CourseListComponent } from "../../components/course/list/index"
import { Profile } from '../../components/profile'

export const GestorHome = () => {
  return (
    <div>
      <Profile/>
      <CourseListComponent></CourseListComponent>
    </div>
  )
}
