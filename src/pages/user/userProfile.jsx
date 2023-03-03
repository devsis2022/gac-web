import { Typography } from "@mui/material"
import { Container, FColumnGap, ShadowedContainer } from "../../shared/styles/styles"

export const UserProfile = () => {

    return (
        <>
            <Container>
                <FColumnGap gap="68px">
                    <Typography variant="h4">Perfil</Typography>

                    <ShadowedContainer>
                        Teste
                    </ShadowedContainer>
                </FColumnGap>
            </Container>
        </>
    )
}