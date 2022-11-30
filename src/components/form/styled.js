import styled from 'styled-components'

export const FormComponent = styled.div`

    background-color: #e4ecec;
    border: #6c7e92 solid 2px;
    border-radius: 2px;
    height: 90vh;
    width:100vw;

    input{
        background-color: white;
        border: #6c7e92 solid 1px;
        border-radius: 2px;
        height: 30px;
        width:94vw;
        text-indent: 10px;
        font-size: 13px;
        color: #000000b6;
        margin-top: 2%;
    }
`
export const DFlex = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const FJustify = styled.div`
    display: flex;
    justify-content: space-between;
    input{
        margin: 4vw 1vw;
        width: 46vw;
    }
`