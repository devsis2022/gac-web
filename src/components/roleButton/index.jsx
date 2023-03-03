import { StyledRoleButton } from "./styles"
import { FColumnGap } from '../../shared/styles/styles'
import { roleMapper } from '../../utils/roleMapper'
import { Typography } from '@mui/material'

export const RoleButton = ({ role, onClick = () => {} }) => {
    return (
        <StyledRoleButton onClick={() => onClick(role)}>
            <FColumnGap gap="8px" alignItems="flex-start">
                <Typography fontWeight="bold" >{roleMapper(role.name)} {role.institutionNickname && `- ${role.institutionNickname}`} </Typography>
                {role.institutionName && <Typography>{role.institutionName}</Typography>}
            </FColumnGap>
        </StyledRoleButton>
    )
}