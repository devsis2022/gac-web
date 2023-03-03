import { useEffect, useState } from 'react';

import { CourseList }       from "./list/index"
import { CourseListStyled } from "./styled"
import { CourseEditModal }  from "../editModal/modal/index"
import { CourseFilterComponent }  from "./filter/index"
import { CourseCreationModal }    from "../createModal/modal/index"
import { privateInstance }   from '../../../service/axios'
import { GlobalConsumer } from '../../../context/globalContext'
import { LoadingConsumer } from '../../../context/loadingContext'
import { toast } from 'react-toastify';

export const CourseListComponent = () => {
    const loadingService = LoadingConsumer()
    const { state } = GlobalConsumer()

    //<TODO>
    const [listOfCourses, setListOfCourses] = useState([])

    const loadCourses = async () => {
        loadingService.show()
        try {
            console.log(state);
            if (!state.selectedRole) {
                loadingService.hide()
                return
            }

            const { institutionId } = state.selectedRole

            const { data } = await privateInstance.get(`/institution/${institutionId}/courses`)

            setListOfCourses(data.data)
        } catch (error) {
            toast.error('Erro ao realizar a chamada')
        }
        loadingService.hide()
    }

    useEffect(()=>{
        loadCourses();
    },[state.selectedRole])

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