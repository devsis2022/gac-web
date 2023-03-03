import { CourseListComponent } from "../../components/course/list/index"
import { Container } from '../../shared/styles/styles'

export const GestorHome = () => {
  return (
    <Container padding="32px">
      <CourseListComponent></CourseListComponent>
    </Container>
  )
}
