import styled from 'styled-components'

export const FormComponent = styled.div`    
    margin:0;
`
export const DFlex = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    a{
        padding-top: 5%;
    }
`

export const FJustify = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    input{
        margin: 4vw 1vw;
    }
` 

export const FCenter = styled.div`
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Dados = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: #fcfcd7;

    h1{
        font-size: 6vh;
        font-weight: 300;
    }

    input{
        background-color: #f7dfdf;
        border:1px solid #bbbbbb;
        height: 8%;
        width: 80%;
        border-radius: 5px;
        font-weight: 500;
        letter-spacing: 1.5px;
    }

    input:focus{
        border:2px solid #bbbbbb;
    }
`

export const FormLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00a9d4;
`

export const Welcome = styled.div`
    width: 60vw;
    
    h1{
        font-weight: 400;
    }
`