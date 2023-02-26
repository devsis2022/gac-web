import styled from "styled-components";

export const CourseEditStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 95%;

    h4{
        margin-bottom:20px;
    }
    
    .form{
        display:flex;
        flex-direction: column;
        
        gap: 10px;
    }

    .form #description{
        height: 300px;
        line-break: strict;

        display: flex;
        align-items: baseline;
        justify-content: baseline;

        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        font-size: 15px;
        resize: none;

        outline-color: #1976d2;
    }
`