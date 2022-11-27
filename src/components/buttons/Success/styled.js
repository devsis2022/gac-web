import styled from 'styled-components'

export const ButtonSuccess = styled.button`
    background-color: #3caca3;
    color:white;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    padding: 10px 25px;
    font-weight: 300px;
    font-size: 16px;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.9;
        border-color: #ffff
    }
`