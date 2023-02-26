import Modal from "react-modal"
import {CouseCreationContent} from "../content/index"

Modal.setAppElement('#root')

export const CourseCreationModal = ({modalCreationIsOpen, closeModalCreateCourse}) => {
    const customStyles = {
        content: {
          top: '4%',
          left: '30%',
          height:"80%",
          width:"40%",
          transition: ".5s"
        },
    };

    return(
        <Modal isOpen={modalCreationIsOpen} onRequestClose={closeModalCreateCourse} style={customStyles}>
            <i class="fa-solid fa-close" onClick={closeModalCreateCourse}></i> 
            <CouseCreationContent/>
        </Modal>
    )
}