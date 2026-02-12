import { styled, createGlobalStyle, keyframes } from "styled-components";
import colors from "../../styles/theme/colors";

export const CaseStudyContainer = styled.div`
    background-color:${colors.mainBackground};
    overflow:hidden;
    padding:3%;
    position: relative;
`

export const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const Button = styled.button`
    height: 5dvh;
    min-width: 10dvw;
    background-color:${colors.accent};
    color: white;
    border:none;
    border-radius: 5dvh;
    font-size:1.2vw;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5%;
    margin-bottom:2%;
    text-wrap:nowrap;
    padding: 0 2%;
    z-index:99;
        position:relative;
`

export const MainTitle = styled.h1`
    font-size:4vw;
    font-family:"bebas";
    font-weight:500;
`

export const SubTitle = styled.h3`
    font-family: "Bebas";
    font-size:2vw;
    font-weight:300;
    text-decoration: underline;
    margin-bottom:1%;
`

export const MediaContainer = styled.div`
    overflow:hidden;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:99;
        position:relative;
`

export const ProjectImage = styled.img`
    width:100%;
    aspect-ratio:2/1.4;
    object-fit:cover;
    object-position:center;
    display:block;
    border-radius:30px;
    border:solid 2px ${colors.accent};
`

export const ProjectVideo = styled.video`
    background-color:red;
    width:100%;
    aspect-ratio:2/1.4;
    object-fit:cover;
    object-position:center;
    display:block;
    border-radius:30px;
    border:solid 2px ${colors.accent};
`

export const Paragraph = styled.p`
    font-size: 1.2vw;
    color:black;
`

export const List = styled.ul`
    font-size: 1.2vw;
    color:black;
`

export const ListItem = styled.li`
    font-size: 1.2vw;
    color:black;
`

const CircleAnimation = keyframes`
    0%{transform: scale(1)};
    50%{transform: scale(1.2)};
    100%{transform: scale(1)};
`

export const GlobalStyles = createGlobalStyle`
    .media-container-left, .media-container-right{
        width: 47.5%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:2dvh;
        font-size:1vw;
    }

    .data-container-box{
        background-color:${colors.softBg};
        border:solid 2px ${colors.accent};
        width:100%;
        padding:20px;
        margin-top:3vh;
        border-radius:20px;
        box-shadow:2px 2px 10px 1px rgba(0,0,0,0.3);
        z-index:99;
        position:relative;
    }

    .data-container-box li{
        margin-left:20px;
    }

    .case-study-bg-circle-one, .case-study-bg-circle-two{
        width:50dvw;
        aspect-ratio:1;
        border-radius:50%;
        background-color:${colors.divider};
        position:absolute;
        z-index:9;

        animation: ${CircleAnimation} 10s ease-in-out infinite;
    }

    .case-study-bg-circle-one{
        left:-15%;
        bottom:-10%;
    }

    .case-study-bg-circle-two{
        top:-10%;
        right:-10%
    }
`