import styled, { createGlobalStyle } from "styled-components";
import colors from "../../styles/theme/colors";

export const ExperienceContainer = styled.div`
    background-color:${colors.mainBackground};  
    padding:1px; 
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
    gap:2vw;
`

export const ExperienceLeft = styled.div`
    border:solid 3px ${colors.accent};
    width:50%;
    height:100%;
    border-radius:1.2vw;
    background-color:${colors.softBg};
    padding-top:1%;
    padding-left:2%;
    box-shadow:5px 5px 5px rgba(0,0,0,0.3);
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

export const GlobalStyles = createGlobalStyle`
    .exp-right-top, .exp-right-middle{
        border: solid 3px ${colors.accent};
        background-color:${colors.softBg};
        width:100%;
        border-radius:1.2vw;
        box-shadow:5px 5px 5px rgba(0,0,0,0.3);
    }

    .exp-right-middle{
        height: 33%;
    }

    .exp-right-top, .exp-right-bottom {
        height:33%;
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
        font-size:1.2vw;
        font-weight:400;
    }

    .exp-left ul li{
        margin-bottom:2%;
    }

    .exp-right-top{
        display:flex;
        flex-direction:column;   
        padding:1%; 
    }

    .exp-right-top .main-head{
        font-size:1.5vw;
        font-family:"Bebas";
        margin-bottom:1%;
    }

    .timeline-data-container{
        display:flex;
        position:relative;
        height:100%;
    }

    .timeline-data-container .progress-line{
        width:100%;
        height:8px;
        background-color:${colors.accent};
        position:absolute;
        z-index:5;
        top:49%;
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

    .exp-right-middle{
        padding:1%;
    }

    .exp-right-middle .main-head{
        font-family:"Bebas";
        font-size:1.5vw;
    }

    .exp-right-middle .responsibilities-container{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:80%;
    }

    .exp-right-middle .responsibilities-container .progress-bar-container{
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

    .exp-right-middle .responsibilities-container .progress-bar-container .bar-data{
        width:100%;
        font-size:.8vw;
        font-weight:700;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .exp-right-middle .responsibilities-container .progress-bar-container .bar-data .bar{
        width:40%;
        background-color:white;
        height:100%;
        border:solid 2px ${colors.accent};
        border-radius:500px;
    }

    .exp-right-middle .responsibilities-container .progress-bar-container .bar-data .bar .bar-length{
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
        font-family:"Bebas"
    }

    .exp-bottom-box .sub-head{
        font-size:.6vw;
        font-weight:700;
    }

    .exp-bottom-box ul{
        font-size:.7vw;
        margin-left:8%;
    }

    .exp-right-middle .responsibilities-container .graph-container{
        width:40%;
        height:100%;
    }
`