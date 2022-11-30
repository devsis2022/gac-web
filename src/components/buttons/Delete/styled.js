import styled from 'styled-components'

export const ButtonDelete = styled.button`
    background-color: #cc445c;
    color:white;
    border: 2px solid #d3d3d3;
    border-radius: 7.5%;
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