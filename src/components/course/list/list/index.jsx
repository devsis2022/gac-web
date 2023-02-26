import { CourseListStyled } from "./styled"

export const CourseList = ({listOfCourses, openModalEditCourse, setCurrentCourse}) => {

    return(
        <CourseListStyled>
            {listOfCourses.map((course)=>{
                return(
                    <div className="course">
                        <p>{course.name}</p>
                        <div className="actions">
                            <i className="fa fa-pen" onClick={ () => { setCurrentCourse(course); openModalEditCourse()} } ></i>

                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                )
            })}
        </CourseListStyled>
    )
}