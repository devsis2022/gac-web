import styled from "styled-components";

export const CourseCreationStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 95%;

    
    .form, label{
        display:flex;
        flex-direction: column;
    }

    input, textarea{
        box-shadow: 0px 1px 6px #888888;
    }
    
    .form{
        width: 500px;
        height: 80%;

        align-items: center;
    }

    label{
        align-items: left;
        justify-content: center;

        width: 80%;
        padding: 0px 5%;
        margin: 25px 0px;

        box-sizing: border-box;
    }

    label p{
        white-space: nowrap;
        margin-bottom: 4px;
        font-size: 14px;
    }

    input{
        height: 35px;
        width: 100%;

        border: 1px solid #888888;
        border-radius: 4px;
    }

    textarea{
        width: 100%;
        height: 150px;
        box-sizing: border-box;
        resize: none;

        padding: 8px;

        font-size: 16px;    

        outline:none;
        border: 1px solid #888888;
        border-radius: 4px;
    }

    textarea::-webkit-scrollbar {
        width: 10px;  
    }

    textarea::-webkit-scrollbar-track {
        background: #dfdfdf ;
    }  

    textarea::-webkit-scrollbar-thumb {
        background-color: #04AA6D;
        border-radius: 14px;   
        border: 2px #ffd0d0 solid;   
    }
`