import styled from "styled-components";

export const CourseListStyled = styled.div`

    padding: 13px 0px;

    .course{
        height: 50px;
    
        margin: 13px 5%;
        padding: 0px 2%;

        background-color: white;
        border: 2px solid #cdcbcb;
        border-radius: 3px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: 500;

        .actions{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .actions i{
            display: flex;
            align-items: center;
            justify-content: center;

            width: 25px;
            height: 25px;

            border-radius: 4px;

            margin-left:10px;
            background-color: #cdcbcb;
            color: #363636;
        }
    }

    .course i:active{
        color: #000000;
        background-color: #a7a6a6;
    }
    
`