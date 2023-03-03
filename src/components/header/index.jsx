import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react";
import { AuthConsumer } from '../../context/authContext'
import { GlobalConsumer } from '../../context/globalContext'
import { RoleModal } from "../../components/modal/roleModal"
import { FRow } from '../../shared/styles/styles'
import { isEqual } from 'lodash'
import { roleMapper } from "../../utils/roleMapper";
import { RoleModalButton } from "./styles";
import { LoadingConsumer } from "../../context/loadingContext";
import { UserService } from "../../service/userService";
import { toast } from "react-toastify";

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

export const Header = ({ children }) => {
    const loadingService = LoadingConsumer()
    const { authed, logout } = AuthConsumer()
    const { state, dispatch } = GlobalConsumer()
    const [anchorEl, setAnchorEl] = useState(null);
    const [showModal, setShowModal] = useState(false)

    const goToProfile = () => {
        window.location.href = '/user-profile'
    }

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

        if (!state.userRoles) {
            return
        }

        const findRole = state.userRoles.find(userRole => isEqual(userRole, role))

        if (!findRole) {
            return setShowModal(true)
        }

        dispatch((dispatchState) => ({
            ...dispatchState,
            selectedRole: findRole
        }))

        if (window.location.pathname !== `/${findRole.name}`) {
            window.location.href = `/${findRole.name}`
        }
    }

    const handleRoleSelect = (role) => {
        localStorage.setItem('role', JSON.stringify(role))

        dispatch((dispatchState) => ({
            ...dispatchState,
            selectedRole: role
        }))

        setShowModal(false);

        if (window.location.pathname !== `/${role.name}`) {
            window.location.href = `/${role.name}`
        }

    }

    const requestInfo = useCallback( async () => {
        loadingService.show()

        try {
            const { data } = await UserService.getUserInfo()

            dispatch((state) => {
                return {
                    ...state,
                    userInfo: data.user,
                    userRoles: data.roles
                }
            })

        } catch (error) {
            toast.error('Erro ao realizar solicitação')
        }

        loadingService.hide()
    }, [])

    useEffect(() => {
        if (!authed) {
            return
        }
        requestInfo()
    }, [authed, requestInfo])

    useEffect(() => {
        if (!authed) {
            return
        }
        handleOpenModal()
    }, [authed, state.userRoles])

    return (
        <>
            <RoleModal open={showModal} showClose={state.selectedRole} onClose={() => setShowModal(false)} onSelect={handleRoleSelect} roles={state.userRoles}/>

            {(authed && state.selectedRole) && <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <FRow alignItems="center" justifyContent="space-between">
                            <FRow alignItems="center">
                                <RoleModalButton onClick={() => setShowModal(true)}>
                                    <Typography title="Ir para a página principal" variant="h6" component="div">Olá, {state.userInfo.name}</Typography>
                                </RoleModalButton>
                            </FRow>

                            <FRow gap="16px" alignItems="center" width="min-content">
                                <RoleModalButton onClick={() => setShowModal(true)}>
                                    <Typography title="Trocar perfil" variant="h6" component="div">{state.selectedRole && roleMapper(state.selectedRole.name)}</Typography>
                                </RoleModalButton>

                                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                                    <AccountCircle />
                                </IconButton>

                                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={styles.anchorOrigin} keepMounted transformOrigin={styles.transformOrigin} open={Boolean(anchorEl)} onClose={handleClose} >
                                    <MenuItem onClick={goToProfile}>Perfil</MenuItem>

                                    <MenuItem onClick={logout}>Sair</MenuItem>
                                </Menu>
                            </FRow>
                        </FRow>
                    </Toolbar>
                </AppBar>
            </Box>}
            {children}
        </>
    );
}