import { CourseListStyled } from "./styled"

export const CourseList = ({listOfCourses}) => {
    return(
        <CourseListStyled>
            {listOfCourses.map((course)=>{
                return(
                    <div className="course">
                        <p>{course.name}</p>
                        {/* <i className="fa fa-ellipsis-h"></i> */}
                        <div className="actions">
                            <i className="fa fa-pen"></i>
                            <i className="fa fa-trash"></i>
                        </div>
                    </div>
                )
            })}
        </CourseListStyled>
    )
}