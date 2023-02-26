import { Avatar, Typography } from "@mui/material"
import { Center, Container, ContainerQueryHide, FColumnGap, FRow, FullSize, ShadowedContainer } from "../../components/form/styles"
import { authPagesStyles } from "../../shared/styles/authPagesStyles"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const AuthBaseTemplate = ({ title, description, children }) => {
    return (
        <FullSize>
            <FRow>
                <ContainerQueryHide maxWidth="1000px" style={authPagesStyles.presentationContainerStyle}>
                    <Center>
                    <Container>
                        <Typography typography='h3' fontWeight='bold' color='whitesmoke'>Bem vindo ao GAC</Typography>
                        <Typography typography='h6' color='whitesmoke'>Gerenciamento de Atividades Complementares</Typography>
                    </Container>
                    </Center>
                </ContainerQueryHide>

                <Container style={authPagesStyles.formContainerStyle}>
                    <Center>
                    <ShadowedContainer style={{ width: '264px' }}>
                        <FColumnGap>
                        <Container>
                            <Center>
                            <Avatar style={authPagesStyles.avatarStyle}>
                                <LockOutlinedIcon />
                            </Avatar>
                            </Center>
                        </Container>

                        <Container>
                            <Center>
                                <Typography typography='h5' color='GrayText' fontWeight='bold'>{title}</Typography>
                            </Center>
                            {description && <Center>
                                <Typography typography='h7' sx={authPagesStyles.descriptionStyle} color='GrayText' fontWeight='bold'>{description}</Typography>
                            </Center>}
                        </Container>
                        </FColumnGap>

                        <Container>
                            {children}
                        </Container>
                    </ShadowedContainer>
                    </Center>
                </Container>
            </FRow>
        </FullSize>
    )
}