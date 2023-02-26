import { useState } from 'react';

import { CourseListStyled }from "./styled"
import { CourseFilterComponent } from "./filter/index"
import { CourseList } from "./list/index"
import { CourseCreationModal } from "../createModal/modal/index"
import { CourseEditModal } from "../editModal/modal/index"

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
    //</TODO>

    const [modalCreationIsOpen, setModalCreationIsOpen] = useState(false)

    const openModalCreateCourse =  () => { setModalCreationIsOpen(true) }
    const closeModalCreateCourse = () => { setModalCreationIsOpen(false) }

    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    const [currentCourse,   setCurrentCourse]   = useState({})

    const openModalEditCourse =  (event) => { 
        // setCurrentCourse(event.target.course_value)
        console.log(event.target.course_value)
        // console.log(currentCourse)

        setModalEditIsOpen(true) 
    }
    const closeModalEditCourse = () => { setModalEditIsOpen(false) }

    return(
        <div>
            <CourseCreationModal    modalCreationIsOpen={modalCreationIsOpen}   closeModalCreateCourse={closeModalCreateCourse}/>
            <CourseEditModal        modalEditIsOpen={modalEditIsOpen}           closeModalEditCourse={closeModalEditCourse}     currentCourse={currentCourse}/>

            <CourseListStyled>
                <CourseFilterComponent                      openModalCreateCourse={openModalCreateCourse}></CourseFilterComponent>
                <CourseList listOfCourses={listOfCourses}   openModalEditCourse={openModalEditCourse}></CourseList>
            </CourseListStyled>
        </div>
    )
}