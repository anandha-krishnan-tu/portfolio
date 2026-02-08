import styled from "styled-components";
import colors from "../../styles/theme/colors";

export const NavBarContainer = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:8vh;
    display:flex;
    justify-content:center;
    gap: 2%;
    align-items:end;
    z-index:9999;
`

export const NavBarList = styled.ul`
    height:60%;
    width:52%;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    backdrop-filter: blur(10px);
    border-radius: 50px;
    border: solid 2px ${colors.accent};
    box-shadow: 4px 4px 4px ${colors.shadow};
`

export const NavBarItem = styled.li`
    color:${colors.accent};
    font-size:1vw;
    list-style:none;
    cursor:pointer;

    &:hover{
        text-decoration:underline;
    }
`

export const NexoButton = styled.button`
    height: 60%;
    width:16%;
    background-color:${colors.accent};
    border-radius: 50px;
    border: solid 2px ${colors.accent};
    color:white;
    font-family:"Bebas", Arial, sans-serif;
    font-size:1vw;
    cursor:pointer;
    box-shadow: 4px 4px 4px ${colors.shadow};
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5%;
    font-size:1.2vw;

    &:hover{
        background-color:${colors.hover};
        transition: all 0.3s ease-in-out;
    }
`