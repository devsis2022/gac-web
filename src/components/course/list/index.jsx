import { useEffect, useState } from 'react';

import { CourseList }       from "./list/index"
import { CourseListStyled } from "./styled"
import { CourseEditModal }  from "../editModal/modal/index"
import { CourseFilterComponent }  from "./filter/index"
import { CourseCreationModal }    from "../createModal/modal/index"

import { publicInstance }   from '../../../service/axios'

export const    CourseListComponent = () => {

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

    const loadCourses = async () => {
        alert('loading')
        if(!sessionStorage.getItem('token')) { window.location.pathname = ('/login'); return; }

        try {
            const tokenFormat = 'Bearer ' + sessionStorage.getItem('token');
            //TODO
            const institutionId = "1"
            const response = await publicInstance.get(`/institution/${institutionId}/courses`, { headers: {'authorization':tokenFormat}})
            
            alert(JSON.stringify(response.data))
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    useEffect(()=>{
        loadCourses();
    },[])

    const [modalCreationIsOpen, setModalCreationIsOpen] = useState(false)

    const openModalCreateCourse =  () => { setModalCreationIsOpen(true) }
    const closeModalCreateCourse = () => { setModalCreationIsOpen(false) }

    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    const [currentCourse,   setCurrentCourse]   = useState({  "name":"Nome primeiro curso"  })

    const openModalEditCourse =  () => { setModalEditIsOpen(true) }
    const closeModalEditCourse = () => { setModalEditIsOpen(false) }

    return(
        <div>
            <CourseCreationModal    modalCreationIsOpen={modalCreationIsOpen}   closeModalCreateCourse={closeModalCreateCourse} loadCourses={loadCourses}/>
            <CourseEditModal        modalEditIsOpen={modalEditIsOpen}           closeModalEditCourse={closeModalEditCourse}     currentCourse={currentCourse}/>

            <CourseListStyled>
                <CourseFilterComponent                      openModalCreateCourse ={openModalCreateCourse}  componentTittle  ={'Lista de Cursos'}></CourseFilterComponent>
                <CourseList listOfCourses={listOfCourses}   openModalEditCourse   ={ openModalEditCourse }  setCurrentCourse = {setCurrentCourse}></CourseList>
            </CourseListStyled>
        </div>
    )
}