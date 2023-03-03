import { CourseFilterStyled } from "./styled"

export const CourseFilterComponent = ({openModalCreateCourse, componentTittle}) => {
    
    return(
        <CourseFilterStyled>
            <div className="title">
                <h3>{componentTittle}</h3>
            </div>
            <button onClick={openModalCreateCourse}>
                <i class="fa-solid fa-plus"></i> 
            </button>
            {/* <button>
                <i class="fa-solid fa-filter"></i> 
            </button> */}
        </CourseFilterStyled>
    )
}