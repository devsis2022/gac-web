import Modal from "react-modal"
import {CouseEditContent} from "../content/index"

Modal.setAppElement('#root')

export const CourseEditModal = ({modalEditIsOpen, closeModalEditCourse, currentCourse}) => {
    const customStyles = {
        content: {
            top: '4%',
            left: '30%',
            height:"80%",
            width:"40%"
        },
    };

    return(
        <Modal isOpen={modalEditIsOpen}     onRequestClose={closeModalEditCourse} style={customStyles}>
            <i className="fa-solid fa-close"    onClick={closeModalEditCourse}></i> 
            <CouseEditContent currentCourse={currentCourse} closeModalEditCourse={closeModalEditCourse} />
        </Modal>
    )
}