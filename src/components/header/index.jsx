import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { AuthConsumer } from '../../context/authContext'
import { GlobalConsumer } from '../../context/globalContext'
import { RoleModal } from "../../components/modal/roleModal"
import { FRow } from '../../shared/styles/styles'
import { isEqual } from 'lodash'
import { roleMapper } from "../../utils/roleMapper";
import { RoleModalButton } from "./styles";

const styles = {
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
    }
}

const defaultFunction = () => null

export const Header = ({ userName, onOpenProfile = defaultFunction }) => {
    const { logout } = AuthConsumer()
    const { state, dispatch } = GlobalConsumer()
    const [anchorEl, setAnchorEl] = useState(null);
    const [showModal, setShowModal] = useState(false)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = () => {
        const roleStringfied = localStorage.getItem('role')

        if (!roleStringfied) {
            return setShowModal(true)
        }

        const role = JSON.parse(roleStringfied)

        const findRole = state.userRoles.find(userRole => isEqual(userRole, role))

        if (!findRole) {
            return setShowModal(true)
        }

        dispatch((dispatchState) => ({
            ...dispatchState,
            selectedRole: findRole
        }))
    }

    const handleRoleSelect = (role) => {
        localStorage.setItem('role', JSON.stringify(role))

        dispatch((dispatchState) => ({
            ...dispatchState,
            selectedRole: role
        }))

        setShowModal(false);
    }

    useEffect(() => {
        handleOpenModal()
    }, [state.userRoles])

    return (
        <>
            <RoleModal open={showModal} onSelect={handleRoleSelect} roles={state.userRoles}/>

            {state.selectedRole && <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <FRow alignItems="center" justifyContent="space-between">
                            <FRow alignItems="center">
                                <Typography variant="h6" component="div">Olá, {userName}</Typography>
                            </FRow>

                            <FRow gap="16px" alignItems="center" width="min-content">
                                <RoleModalButton onClick={() => setShowModal(true)}>
                                    <Typography variant="h6" component="div">{state.selectedRole && roleMapper(state.selectedRole.name)}</Typography>
                                </RoleModalButton>

                                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                                    <AccountCircle />
                                </IconButton>

                                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={styles.anchorOrigin} keepMounted transformOrigin={styles.transformOrigin} open={Boolean(anchorEl)} onClose={handleClose} >
                                    <MenuItem onClick={onOpenProfile}>Perfil</MenuItem>

                                    <MenuItem onClick={logout}>Sair</MenuItem>
                                </Menu>
                            </FRow>
                        </FRow>
                    </Toolbar>
                </AppBar>
            </Box>}
        </>
    );
}