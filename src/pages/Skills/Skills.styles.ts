import styled, { createGlobalStyle, keyframes } from "styled-components";
import colors from "../../styles/theme/colors";

export const SkillsContainer = styled.div`
    background-color:${colors.mainBackground};
    padding:1px;
    height:100dvh;
    overflow:hidden;
    position:relative;
`

export const SkillsHead = styled.p`
    font-family: "Bebas";
    font-size: 5vw;
    color: ${colors.primaryText};
    margin: 6% 0% 1% 5%;
`

export const SubHead = styled.p`
    font-family: "Bebas";
    font-size:1.4vw;
    padding-top:2vh;
    padding-left:1vw;
    text-decoration:underline;
`

export const DataContainer = styled.div`
    width:90%;
    height:70dvh;
    margin-left:5%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    gap:3%;
    position:relative;
    z-index:99;
`

export const DataContainerTop = styled.div`
    width:100%;
    // height:60%;
    flex:1;
    display:flex;
    gap:2%;
`

export const DataContainerBottom = styled.div`
    width:100%;
    // height:40%;
    display:flex;
    gap:2%;
`

export const DataBoxes = styled.div`
    height:100%;
    flex:1;
    background-color:${colors.softBg};
    border:solid 3px ${colors.accent};
    border-radius:20px;
    box-shadow:5px 5px 10px rgba(0,0,0,0.3); 
    position:relative;
`

const HexagonRotate = keyframes`
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
`
const HexagonMove = keyframes`
    0% {transform: translate(0, 0);}

    25% {transform: translate(0, -50px);}

    50% {transform: translate(-50px, -50px);}

    75% {transform: translate(0px, -50px);}

    100% {transform: translate(0, 0);}
`

export const GlobalStyles = createGlobalStyle`
    .databox-ul{
        padding-left:2vw;
        padding-top:2vh;
        line-height:3.2vh;
        font-size:1vw;
    }

    .coding-languages-main-container{
        padding-left:1vw;
        padding-top:2vh;
        display:grid;
        grid-template-columns: repeat(2,1fr);
    }

    .code-language-container{
        margin-bottom:10%;
        margin-right:10%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        font-size:1vw;
        font-weight:500;
    }

    .code-language-container .loader-div{
        background-color:${colors.mainBackground};
        border:solid 1px ${colors.accent};
        border-radius:500px;
        height:80%;
        width: 40%
    }

    .code-language-container .loader-div .loaded{
        width:100%;
        height:100%;
        background-color:${colors.accent};
        border-radius:500px;
        color:white;
        font-size:.6vw;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .code-language-container .loader-div .js{
        width: 95%;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }

    .code-language-container .loader-div .ts{
        width: 95%;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }

    .code-language-container .loader-div .python{
        width: 70%;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }

    .code-language-container .loader-div .java{
        width: 70%;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }

    .code-language-container .loader-div .html{
        width: 98%;
    }

    .communication-languages-main-container{
        padding-left:1vw;
        padding-right:5vw;
        padding-top:2vh;
        height:60%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        font-size:1vw;
        font-weight:500;
    }

    .communication-language-container{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .communication-language-container p{
        width:20%;
    }

    .communication-language-container .check-box-container{
        flex:1;
        display:flex;
        justify-content: space-between;
    }

    .communication-language-container .check-box-container div{
        display:flex;
        gap:10%;
    }

    .communication-language-container .check-box-container div input[type="checkbox"]{
        accent-color:${colors.accent};
        border:solid 2px red;
    }

    .hexagon-left-wrapper,.hexagon-right-wrapper{
        width:50dvh;
        aspect-ratio:1/1.2;
        position:absolute;
        z-index:9;
    }

    .hexagon-left-wrapper{
        top:50%;
        left:-5%;
    }

    .hexagon-right-wrapper{
        top:5%;
        right:-15%;
    }

    .skills-bg-hexagon-one{
        width:100%;
        height:100%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background-color:${colors.divider};
        animation: ${HexagonRotate} 30s linear infinite;
    }

    .skills-bg-hexagon-two{
        width:100%;
        height:100%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background-color:${colors.divider};
        animation: ${HexagonMove} 10s linear infinite;
    }

    .box-bg-icon{
        position:absolute;
        top:0;
        left:0;
        font-size:40px;
        color:white;
    }
`