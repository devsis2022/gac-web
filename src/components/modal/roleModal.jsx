import { Box, IconButton, Typography } from "@mui/material"
import { ModalContainer } from './modalContainer'
import { ShadowedContainer, FColumnGap, FRow, ScrollContainer } from '../../shared/styles/styles'
import CloseIcon from '@mui/icons-material/Close'
import { RoleButton } from "../roleButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    outline: '0'
};

export const RoleModal = ({ open = false, showClose, onClose, roles, onSelect }) => {
    return (
        <ModalContainer open={open} onClose={onClose} keepMounted>
            <Box sx={style}>
                <ShadowedContainer padding="24px" borderRadius="5px" style={{ backgroundColor: 'white' }} >
                    <FColumnGap>
                        {showClose && <FRow justifyContent="flex-end">
                            <IconButton onClick={onClose}>
                                <CloseIcon />
                            </IconButton>
                        </FRow>}

                        <Typography variant="h5">Selecione qual perfil e instituição você deseja visualizar</Typography>

                        <ScrollContainer maxHeight="400px">
                            {roles && roles.map(role => (
                                <RoleButton onClick={onSelect} key={`${role.name}-${role.institutionId}-${role.courseId}`} role={role} />
                            ))}
                        </ScrollContainer>
                    </FColumnGap>
                </ShadowedContainer>
            </Box>
        </ModalContainer>
    )
}