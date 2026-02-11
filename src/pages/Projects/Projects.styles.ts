import styled from "styled-components";
import colors from "../../styles/theme/colors";

export const ProjectsContainer = styled.div`
    background-color:${colors.mainBackground};
    position:relative;
    overflow:hidden;
`

export const ProjectsHeading = styled.div`
    font-family: "Bebas";
    font-size: 5vw;
    color: ${colors.primaryText};
    margin-left: 5%;
    margin-top: 6%;
`

export const ProjectCardsContainer = styled.div`
    background-color:red;
    width: 90vw;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:16px;
`

export const ProjectCards = styled.div`
    background-color:green;
    aspect-ratio:2/2.2;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
`