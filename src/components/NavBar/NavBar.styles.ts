import styled from "styled-components";

export const NavBarContainer = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:8vh;
    background-color:#00000050;
    color:white;
    display:flex;
    justify-content:end;
    z-index:9999;
    backdrop-filter: blur(8px);
`

export const NavBarList = styled.ul`
    height:100%;
    width:60%;
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