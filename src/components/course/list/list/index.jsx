import { CourseListStyled } from "./styled"

//mudar nome
export const CourseList = () => {

    //dados falsos
    const courses = [
        {
            name:"Nome primeiro curso"
        },
        {
            name:"Nome segundo curso"
        },
        {
            name:"Nome terceiro curso"
        },
        {
            name:"Nome quarto curso"
        },
    ];

    return(
        <CourseListStyled>
            {courses.map((course)=>{
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