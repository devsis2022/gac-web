import { Typography } from "@mui/material"
import { Center, Container, FColumn, FColumnGap, IconContainer, ShadowedContainer } from "../../shared/styles/styles"
import { AccountCircle } from "@mui/icons-material";
import { GlobalConsumer } from '../../context/globalContext'

export const UserProfile = () => {
    const { state } = GlobalConsumer()

    const formatCpf = (cpf) => {
        let value = "";
        for (var i = 0; i < cpf.length; i++) {
            if (i === 3 || i === 6) {
                value += ".";
            } else if (i === 9) {
                value += "-";
            }
            value += cpf[i];
        }
        return value;
    }

    const formatDate = (data) => {
        const date = new Date(data)

        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();
        const hora = date.getHours().toString().padStart(2, '0');
        const minuto = date.getMinutes().toString().padStart(2, '0');
        const segundo = date.getSeconds().toString().padStart(2, '0');
        return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minuto + ':' + segundo;
    }

    return (
        <>
            {state.userInfo && <Container padding="32px">
                <FColumnGap gap="68px">
                    <Typography variant="h4">Perfil</Typography>

                    <Center>
                        <ShadowedContainer>
                            <FColumnGap>
                                <FColumn alignItems="center">
                                    <IconContainer width="min-content" backgroundColor="#1976d2" borderRadius="100px" padding="8px">
                                        <AccountCircle sx={{ color: 'white' }} fontSize='large'/>
                                    </IconContainer>
                                </FColumn>

                                <Typography variant="h5">Nome: {state.userInfo.name}</Typography>
                                <Typography variant="h5">Nome de usuário: {state.userInfo.username}</Typography>
                                <Typography variant="h5">Email: {state.userInfo.email}</Typography>
                                <Typography variant="h5">CPF: {formatCpf(state.userInfo.cpf)}</Typography>
                                <Typography variant="h5">Data de cadastro: {formatDate(state.userInfo.createdAt)}</Typography>
                            </FColumnGap>
                        </ShadowedContainer>
                    </Center>
                </FColumnGap>
            </Container>}
        </>
    )
}