import styled from 'styled-components'

export const ButtonPrimary = styled.button`
    background-color: #1414ea;
    color:white;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    padding: 13px 45px;
    margin-bottom: 30px;
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