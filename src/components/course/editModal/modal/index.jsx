import Modal from "react-modal"
import {CouseEditContent} from "../content/index"

Modal.setAppElement('#root')

export const CourseEditModal = ({modalEditIsOpen, closeModalEditCourse}) => {
    const customStyles = {
        content: {
          top: '4%',
          left: '10%',
          height:"80%",
          width:"80%",
          transition: ".5s"
        },
    };

    return(
        <Modal isOpen={modalEditIsOpen}     onRequestClose={closeModalEditCourse} style={customStyles}>
            <i class="fa-solid fa-close"    onClick={closeModalEditCourse}></i> 
            <CouseEditContent/>
        </Modal>
    )
}