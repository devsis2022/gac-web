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
    background-color: #fffffd;

    h1{
        font-size: 6vh;
        font-weight: 300;
        margin-bottom: 8%;
    }

    label{
        height: 8%;
        width: 80%;

        margin-bottom: 40px;
        position: relative;    
    }

    label input{
        background-color: transparent;
        border:1px solid #bbbbbb;
        height:100%;
        width:100%;
        border-radius: 8px;

        margin: 0;

        font-weight: 500;
        font-size: 2.2vh;
        letter-spacing: 1.8px;
        text-indent: 11%;
        color: #333;

        position: absolute;
        left: 0;
    }

    label input::placeholder{
        font-weight: 200;
        color: #767676;
    }

    label input:focus{
        border:1px solid #333;
    }
    
    label .fa{
        position: absolute;
        left: 3.4%;
        top: 30%;
        height: 35%;
        z-index: 1;
    }

    label .fa, label input::placeholder{
        color: #a5a5a5;
    }

    
    @media only screen and (max-width: 900px) {
        width: 100vw;
    }
`

export const FormLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00a9d4;
`

export const Welcome = styled.div`
    width: 60vw;
    color:white;
    h1{
        font-weight: 400;
    }

    @media only screen and (max-width: 900px) {
        background-color: black;
        display: none;
    }
`