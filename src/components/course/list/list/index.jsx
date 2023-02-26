import { CourseListStyled } from "./styled"

export const CourseList = ({listOfCourses, openModalEditCourse}) => {

    const test = (event) => {
        console.log(event.target.value)
        console.log(listOfCourses)
    }

    return(
        <CourseListStyled>
            {listOfCourses.map((course)=>{
                return(
                    <div className="course">
                        <p>{course.name}</p>
                        {/* <i className="fa fa-ellipsis-h"></i> */}
                        <div className="actions">
                            <i className="fa fa-pen" onClick={ test } value={course.name} ></i>

                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                )
            })}
        </CourseListStyled>
    )
}