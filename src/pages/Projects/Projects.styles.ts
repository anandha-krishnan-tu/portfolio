import styled from "styled-components";
import colors from "../../styles/theme/colors";

export const ProjectsContainer = styled.div`
    background-color:${colors.mainBackground};
    position:relative;
    padding-top:1px;
    padding-bottom:2%;
    overflow:hidden;
`

export const ProjectsHeading = styled.div`
    font-family: "Bebas";
    font-size: 5vw;
    color: ${colors.primaryText};
    margin: 6% 0% 1% 5%;
`

export const ProjectCardsContainer = styled.div`
    position:relative;
    width: 90vw;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:100px;
    margin-bottom:4%;
    z-index: 9;
`

export const ProjectBgRectangleOne = styled.div`
    width: 130dvw;
    height: 25dvh;
    background-color: ${colors.divider};
    position: absolute;
    top: 70%;
    left: -5%;
    transform: rotate(-35deg);
    transform-origin: left center;
    z-index: 1;
`

export const ProjectBgRectangleTwo = styled.div`
    width: 130dvw;
    height: 25dvh;
    background-color: ${colors.softBg};
    position: absolute;
    top: 10%;
    left: -23%;
    transform: rotate(-35deg);
    transform-origin: right center;
    z-index: 1;
`