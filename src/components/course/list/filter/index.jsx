import { CourseFilterStyled } from "./styled"

export const CourseFilterComponent = ({openModalCreateCourse, title }) => {
    
    return(
        <CourseFilterStyled>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <button onClick={openModalCreateCourse}>
                <i class="fa-solid fa-plus"></i> 
            </button>
            <button>
                <i class="fa-solid fa-filter"></i> 
            </button>
        </CourseFilterStyled>
    )
}