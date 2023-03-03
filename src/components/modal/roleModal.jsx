import { Box, Typography } from "@mui/material"
import { ModalContainer } from './modalContainer'
import { ShadowedContainer, FColumnGap } from '../../shared/styles/styles'
import { RoleButton } from "../roleButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    outline: '0'
};

export const RoleModal = ({ open = false, onClose, roles, onSelect }) => {
    return (
        <ModalContainer open={open} onClose={onClose} keepMounted>
            <Box sx={style}>
                <ShadowedContainer padding="24px" borderRadius="5px" style={{ backgroundColor: 'white' }} >
                    <FColumnGap>
                        <Typography variant="h5">Selecione qual perfil e instituição você deseja visualizar</Typography>
                        {roles && roles.map(role => (
                            <RoleButton onClick={onSelect} key={`${role.name}-${role.institutionId}`} role={role} />
                        ))}
                    </FColumnGap>
                </ShadowedContainer>
            </Box>
        </ModalContainer>
    )
}