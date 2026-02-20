import styled, { createGlobalStyle, keyframes } from "styled-components";
import colors from "../../styles/theme/colors";

export const ExperienceContainer = styled.div`
    background-color:${colors.mainBackground};  
    padding:1px; 
    position:relative;
    overflow:hidden;
`

export const ExperienceTitle = styled.p`
    font-family: "Bebas";
    font-size: 5vw;
    color: ${colors.primaryText};
    margin: 6% 0% 1% 5%;
`

export const ExperienceBox = styled.div`
    width:90vw;
    height:70vh;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:1vw;
    position:relative;
    z-index:99;
`

export const ExperienceLeft = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const ExperienceRight = styled.div`
    height:100%;
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:1%;
`

export const Heading = styled.p`

`

export const Paragraph = styled.p`

`

const ArrowMoving1 = keyframes`
    0%   { transform: translate(0, 0) rotate(-45deg); }

    /* box1 moves first */
    20%  { transform: translate(100px, -100px) rotate(-45deg); }

    /* waits while box2 moves */
    60%  { transform: translate(100px, -100px) rotate(-45deg); }

    /* returns after box2 */
    80%  { transform: translate(0, 0) rotate(-45deg); }

    100% { transform: translate(0, 0) rotate(-45deg); }
`

const ArrowMoving2 = keyframes`
    0%   { transform: translate(0, 0) rotate(-45deg); }

  /* wait for box1 */
  20%  { transform: translate(0, 0) rotate(-45deg); }

  /* box2 moves second */
  40%  { transform: translate(100px, -100px) rotate(-45deg); }

  /* returns BEFORE box1 */
  60%  { transform: translate(0, 0) rotate(-45deg); }

  100% { transform: translate(0, 0) rotate(-45deg); }
`

export const GlobalStyles = createGlobalStyle`

    .experience-left-top{
        background-color:${colors.softBg};
        border:solid 3px ${colors.accent};
        border-radius:1.2vw;
        padding:2%;
        height:65%;
        box-shadow:5px 5px 5px rgba(0,0,0,0.3);
    }

    .experience-right-top{
        border: solid 3px ${colors.accent};
        background-color:${colors.softBg};
        width:100%;
        border-radius:1.2vw;
        box-shadow:5px 5px 5px rgba(0,0,0,0.3);
        padding:1%;
    }

    .experience-right-top, .exp-right-bottom {
        height:48.5%;
    }

    .exp-right-bottom{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .exp-bottom-box{
        height:100%;
        width:32%;
        border: solid 3px ${colors.accent};
        border-radius:1.2vw;
        background-color:${colors.softBg};
    }

    .sub-title{
        font-size:1.2vw;
        margin: -1% 0% 2% 5%;
    }

    .exp-left .main-head{
        font-size:2vw;
        font-family:"Bebas"
    }

    .exp-left .sub-head{
        font-size:1.2vw;
        font-family:"Bebas";
    }

    .exp-left ul{
        margin-left:3%;
        margin-top:2%;
        font-size:1vw;
        font-weight:400;
    }

    .exp-left ul li{
        margin-bottom:2%;
    }

    .experience-right-top{
        display:flex;
        flex-direction:column;   
        padding:1%; 
    }

    .experience-right-top .main-head{
        font-size:1.5vw;
        font-family:"Bebas";
        margin-bottom:1%;
    }

    .timeline-data-container{
        display:flex;
        position:relative;
        height:60%;
        margin-top:2%;
    }

    .timeline-data-container .progress-line{
        width:100%;
        height:8px;
        background-color:${colors.accent};
        position:absolute;
        z-index:5;
        top:49.5%;
    }

    .timeline-data-container .timeline-data{
        position:relative;
        z-index:10;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        justify-content:space-between;
    }

    .timeline-data-container .timeline-data .dot{
        width:14px;
        height:14px;
        background-color:white;
        border:solid 1px ${colors.accent};
        border-radius:50%;
    }

    .timeline-data-container .timeline-data .head{
        font-family:"Bebas";
        font-size:.9vw;
    }

    .timeline-data-container .timeline-data .desc{
        font-size:.7vw;
    }

    .experience-right-top{
        padding:2%;
    }

    .experience-right-top .main-head{
        font-family:"Bebas";
        font-size:1.5vw;
    }

    .experience-right-top .responsibilities-container{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:70%;
        margin-top:3%;
    }

    .experience-right-top .responsibilities-container .progress-bar-container{
        height:100%;
        width:60%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        border-right: solid 2px ${colors.accent};
        padding-right:1%;
        gap:2%;
    }

    .experience-right-top .responsibilities-container .progress-bar-container .bar-data{
        width:100%;
        font-size:.8vw;
        font-weight:700;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .experience-right-top .responsibilities-container .progress-bar-container .bar-data .bar{
        width:40%;
        background-color:white;
        height:100%;
        border:solid 2px ${colors.accent};
        border-radius:500px;
    }

    .experience-right-top .responsibilities-container .progress-bar-container .bar-data .bar .bar-length{
        background-color:${colors.accent};
        border-radius:500px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:${colors.mainBackground};
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }

    .bar-data .bar .one{
        width:90%;    
    }

    .bar-data .bar .two{
        width:75%;    
    }

    .bar-data .bar .three{
        width:85%;    
    }

    .bar-data .bar .four{
        width:80%;    
    }

    .bar-data .bar .five{
        width:70%;    
    }

    .exp-bottom-box{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:1%;
        box-shadow:5px 5px 5px rgba(0,0,0,0.3);
    }

    .exp-bottom-box .main-head{
        font-family:"Bebas";
        font-size:1.2vw;
    }

    .exp-bottom-box .sub-head{
        font-size:.8vw;
        font-weight:600;
        margin-top:5%;
        margin-bottom:5%;
    }

    .exp-bottom-box ul{
        font-size:.8vw;
        margin-left:8%;
    }

    .experience-right-top .responsibilities-container .graph-container{
        width:40%;
        height:100%;
    }

    .experience-left-bottom{
        background-color:${colors.softBg};
        border:solid 3px ${colors.accent};
        height:32%;
        border-radius:1.2vw;
        padding:2%;
        box-shadow:5px 5px 5px rgba(0,0,0,0.3);
    }

    .exp-bg-arrow{
        width:40vw;
        aspect-ratio:1;
        background-color:${colors.divider};
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 25% 100%, 50% 50%, 25% 0%);
        position:absolute;
        right:2vw;
        top:15vh;
        z-index:9;
        transform: rotate(-45deg);
    }

    .arrow-two{
        right: 18vw;
        top: 45vh;
        animation-delay:1.5s;
        animation: ${ArrowMoving2} 20s ease-in-out infinite;
    }

    .arrow-one{
        animation: ${ArrowMoving1} 20s ease-in-out infinite;
    }
`