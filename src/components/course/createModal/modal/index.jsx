import Modal from "react-modal"
import {CouseCreationContent} from "../content/index"

Modal.setAppElement('#root')

export const CourseCreationModal = ({modalIsOpen, closeModal}) => {

    return(
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <i class="fa-solid fa-close" onClick={closeModal}></i> 
            <CouseCreationContent/>
        </Modal>
    )
}