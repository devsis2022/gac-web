import styled from "styled-components";

export const ProfileComponent = styled.div`
    margin: 2%;
    background-color: #e4ecec;

    display: flex; 
    align-items: center;
    justify-content: space-between;

    height: 18vh;
    font-weight: 400;

    h3{
        font-size: 17px;
    }

    .userImage{
        margin: 0% 3%;
        background-color: blue;
        border-radius: 1000px;
        height: 100px;
    }

    .userInfo{
        display: flex;
        flex-direction: column;
        width: 400px;
    }
    
    div{
        display: flex;
        flex-direction: row;
    }   

    .fa-container{
        height: 100%;
        margin-right: 30px;
    }

    .center{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fa-container button{
        width: 37px;
        height: 37px;

        background-color: #797ef6;
        border: none;
        border-radius: 3px;
        margin-left: 2px;
    }

    .fa-container button:hover{
        background-color: #5558a7;
    }

    .fa-container button:active{
        background-color: #353883;
    }

    a{
        text-decoration:none;
        color: white;
    }
   
`