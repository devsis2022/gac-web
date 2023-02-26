import styled from 'styled-components'

export const FullSize = styled.div`
    width: 100vw;
    height: 100vh;
`

export const ShadowedContainer = styled.div`
    padding: 16px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
    transition: .2s;
`

export const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const FRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`

export const FColumnGap = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '24px'};
`

export const ContainerQueryHide = styled.div`
    @media screen and (max-width: ${props => props.maxWidth || '500px'}) {
        display: none;
    }
`