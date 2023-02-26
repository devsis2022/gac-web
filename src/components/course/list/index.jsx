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
            name:"Nome primeiro curso",
            description:"Este é o primeiro curso",
            coordinator:"Coord. 1"
        },
        {
            name:"Nome segundo curso",
            description:"Este é o primeiro curso",
            coordinator:"Coord. 1"
        },
        {
            name:"Nome terceiro curso",
            description:"Este é o primeiro curso",
            coordinator:"Coord. 1"
        },
        {
            name:"Nome quarto curso",
            description:"Este é o primeiro curso",
            coordinator:"Coord. 1"
        }
    ])
    //</TODO>

    const [modalCreationIsOpen, setModalCreationIsOpen] = useState(false)

    const openModalCreateCourse =  () => { setModalCreationIsOpen(true) }
    const closeModalCreateCourse = () => { setModalCreationIsOpen(false) }

    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    const [currentCourse,   setCurrentCourse]   = useState({  "name":"Nome primeiro curso"  })

    const openModalEditCourse =  () => { setModalEditIsOpen(true) }
    const closeModalEditCourse = () => { setModalEditIsOpen(false) }

    return(
        <div>
            <CourseCreationModal    modalCreationIsOpen={modalCreationIsOpen}   closeModalCreateCourse={closeModalCreateCourse}/>
            <CourseEditModal        modalEditIsOpen={modalEditIsOpen}           closeModalEditCourse={closeModalEditCourse}     currentCourse={currentCourse}/>

            <CourseListStyled>
                <CourseFilterComponent                      openModalCreateCourse ={openModalCreateCourse}></CourseFilterComponent>
                <CourseList listOfCourses={listOfCourses}   openModalEditCourse   ={ openModalEditCourse }  setCurrentCourse = {setCurrentCourse}></CourseList>
                
            </CourseListStyled>
        </div>
    )
}