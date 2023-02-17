import { CourseFilter } from "./styled"

//mudar nome
export const CourseFilterComponent = () => {

    //dados falsos
    const title = "titulo recebido"

    return(
        <CourseFilter>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <button>
                <i class="fa-solid fa-plus"></i> 
            </button>
            <button>
                <i class="fa-solid fa-filter"></i> 
            </button>
        </CourseFilter>
    )
}