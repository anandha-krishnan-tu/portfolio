import styled from "styled-components";

export const NavBarContainer = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:8vh;
    color:white;
    display:flex;
    justify-content:center;
    align-items:end;
    z-index:9999;
`

export const NavBarList = styled.ul`
    height:80%;
    width:60%;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    backdrop-filter: blur(10px);
    background-color: rgba(18, 18, 18, 0.2);
    border-radius: 50px;
    border: solid 1px white;
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