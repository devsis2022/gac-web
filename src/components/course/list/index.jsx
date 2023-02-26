import { useState } from 'react';

import { CourseListStyled }from "./styled"
import { CourseFilterComponent } from "./filter/index"
import { CourseList } from "./list/index"
import { CourseCreationModal } from "../createModal/modal/index"

export const CourseListComponent = () => {

    //<TODO>
    const [listOfCourses, setListOfCourses] = useState([
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
    ])
    const title = "titulo recebido";
    //</TODO>

    const [modalIsOpen, setModalIsOpen] = useState(true)

    const openModalCreateCourse = () => {
        setModalIsOpen(true)
    }

    const closeModalCreateCourse = ()=>{
        setModalIsOpen(false)
    }

    return(
        <div>
            <CourseCreationModal modalIsOpen={modalIsOpen} closeModal={closeModalCreateCourse}/>
            <CourseListStyled>
                <CourseFilterComponent openModalCreateCourse={openModalCreateCourse} title={title}></CourseFilterComponent>
                <CourseList listOfCourses={listOfCourses}></CourseList>
            </CourseListStyled>
        </div>
    )
}