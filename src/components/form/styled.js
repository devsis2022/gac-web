import styled from 'styled-components'

export const FormComponent = styled.div`
    margin:0;
`

export const DFlexRowTable = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const DFlexRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #e4ecec;
    padding: 0.5vw;
    a{
        padding-top: 5%;
    }
    h3{
        font-size: 18px;
        margin-right:36px;
        white-space: nowrap;
    }
`

export const DFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #e4ecec;
    a{
        padding-top: 5%;
    }
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

export const Welcome = styled.div`
    width: 60vw;
    color:white;
    h1{
        font-weight: 300;
    }

    @media only screen and (max-width: 900px) {
        background-color: black;
        display: none;
    }
`

export const Dados = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: #fffffd;

    h1{
        font-size: 6vh;
        font-weight: 500;
        margin-bottom: 8%;
        font-family: 'Poppins', sans-serif;

        text-align: left;
        width: 80%;
    }

    label{
        height: 8%;
        width: 80%;

        margin-bottom: 40px;
        position: relative;
    }

    label input{
        background-color: #f5f5f575;
        border:1px solid #bbbbbb;
        height:100%;
        width:100%;
        border-radius: 8px;

        margin: 0;

        letter-spacing: 1.8px;
        text-indent: 11%;
        color: #333;

        position: absolute;
        left: 0;
        transition: .2s;

    }

    label input::placeholder{
        font-weight: 200;
        color: #767676;
    }

    label input:focus, label input:hover{
        background-color: white;
        box-shadow: 3px 3px 6px #888888;
        transition: .3s;
    }

    label .fa{
        position: absolute;
        left: 3.4%;
        top: 30%;
        height: 35%;
        z-index: 1;
    }

    .button-primary{
        width: 50%;
        height: 6%;

        background-color:#00a9d4 ;
        border: none;
    }

    .button-primary:active{
        background-color:#767676 ;
    }

    label .fa, label input::placeholder{
        color: #a5a5a5;
    }

    label input, .button-primary{
        font-size: 2.2vh;
        font-weight: 500;
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

