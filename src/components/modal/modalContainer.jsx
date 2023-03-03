import { Modal } from "@mui/material"

export const ModalContainer = ({ open, onClose = () => {}, children, ...rest }) => {
    return (
        <Modal open={open} onClose={onClose} {...rest}>
            {children}
        </Modal>
    )
}