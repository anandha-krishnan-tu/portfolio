import styled from "styled-components";

export const NavBarContainer = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:5vh;
    background-color:#00000020;
    color:white;
    display:flex;
    justify-content:end;
`

export const NavBarList = styled.ul`
    height:100%;
    width:50%;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

export const NavBarItem = styled.li`
    color:white;
    font-size:1.2vw;
    list-style:none;
    cursor:pointer;

    &:hover{
        text-decoration:underline;
    }
`