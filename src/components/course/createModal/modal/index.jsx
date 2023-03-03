import Modal from "react-modal"
import {CouseCreationContent} from "../content/index"

Modal.setAppElement('#root')

export const CourseCreationModal = ({modalCreationIsOpen, closeModalCreateCourse, loadCourses}) => {
    const customStyles = {
        content: {
          top: '4%',
          left: '30%',
          height:"80%",
          width:"40%",
        },
    };

    return(
        <Modal isOpen={modalCreationIsOpen} onRequestClose={closeModalCreateCourse} style={customStyles}>
            <i className="fa-solid fa-close" onClick={closeModalCreateCourse}></i> 
            <CouseCreationContent closeModalCreateCourse = {closeModalCreateCourse} loadCourses={loadCourses}/>
        </Modal>
    )
}