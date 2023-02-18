import { CourseFilterComponent } from "./filter/index"
import { CourseList } from "./list/index"
import { CourseListStyled }from "./styled"

export const CourseListComponent = () => {

    return(
        <CourseListStyled>
            <CourseFilterComponent></CourseFilterComponent>
            <CourseList></CourseList>
        </CourseListStyled>
    )
}