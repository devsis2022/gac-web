import styled from "styled-components";

export const CourseFilterStyled = styled.div`
    height: 37px;
    
    width: 100%;

    display: flex;
    justify-content: space-between;

    div{
        border: 2px solid #b2b2f5;
        width: calc(100% - 37px - 37px);
    }

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        
        border-radius: 3px;
        font-size: 15px;

        background-color: white;
    }

    .title h3{
        font-weight: 500;
    }

    button{
        width: 37px;
        height: 37px;
        background-color: #797ef6;

        border: none;
        border-radius: 3px;
        margin-left: 2px;
    }

    button:active{
        background-color: #5e64e5;
    }

    button i{
        color:white;
    }

    *{
        color: navy;
    }
`