import { Typography } from "@mui/material"
import { Center, Container, FColumnGap, IconContainer, ShadowedContainer } from "../../shared/styles/styles"
import { AccountCircle } from "@mui/icons-material";

export const UserProfile = () => {

    return (
        <>
            <Container padding="32px">
                <FColumnGap gap="68px">
                    <Typography variant="h4">Perfil</Typography>

                    <Center>
                        <ShadowedContainer>
                            <FColumnGap>
                                <IconContainer size="24px" backgroundColor="green" borderRadius="50%" padding="28px">
                                    <AccountCircle sx={{ color: 'white' }}/>
                                </IconContainer>
                            </FColumnGap>
                        </ShadowedContainer>
                    </Center>
                </FColumnGap>
            </Container>
        </>
    )
}