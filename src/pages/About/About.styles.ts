import styled, {createGlobalStyle, keyframes} from "styled-components";
import colors from "../../styles/theme/colors";
 

export const AboutContainer = styled.div`
    background-color:${colors.mainBackground};
    position:relative;
    overflow:hidden;
`

export const ImageContainer = styled.img`
    position:absolute;
    bottom:0;
    right:0;
    width:34dvw;
    z-index: 2;
`

const StarRotate = keyframes`
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
`

export const AboutHeading =  styled.div`
    font-family: "Bebas";
    font-size: 5vw;
    color: ${colors.primaryText};
    margin-left: 5%;
    margin-top:6%;
`

export const AboutDetailsContainer = styled.div`
    margin-left:5%;
    width: 60vw;
    height: 70vh;
    display:flex;
    flex-direction:column;
    gap:3%;
`

export const DataCard = styled.div`
    width: 100%;
    height: 100%;
    background-color:white;
    flex: 1;
    border-radius: 10px;
    display:flex;
    align-items:center;
    justify-content:left;
    padding-left:2%;
    font-size:1vw;
    font-weight:500;
`

export const GlobalStyles = createGlobalStyle`

    .about-bg-star-wrapper{
        height:85vh;
        aspect-ratio:1;
        will-change: transform;position: absolute;
        right: -22%;
        bottom:2%;
        z-index: 1;
    }
    .about-bg-star{
        width:100%;
        height:100%;
        background-color:${colors.divider};
        clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
        );

        animation: ${StarRotate} 60s linear infinite;
    }

    .about-top{
        width: 100%;
        height: 75%;
        display:flex;
        gap:2.8%
    }

    .about-left{
        width: 70%;
        height:100%;
        flex-direction: column;
        align-items:center;
        justify-content: space-around;
        gap:4%;
        padding:2%;
        z-index:3;
    }

    .about-right{
        height:100%;
        width:30%;
        z-index:3;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        gap:4%;
        padding: 2%;
    }

    .about-right p{
        color: white;
        font-size: 1.3vw;
        font-weight: 400;
    }

    .about-bottom{
        width:100%;
        height:25%;
        z-index:3;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-around;
    }


    .bottom-top{
        width: 100%;
        height: 20%;
        display:flex;
        align-items:center;
        padding-left:2%;
    }
        
    .bottom-top p{
        color:white;
        font-size: 1.3vw;
        padding-top:2%;
    }

    .bottom-bottom{
        width:100%;
        height:80%;
        display:flex;
        align-items:center;
        justify-content: space-around;
        gap:1%;
        padding: 2%;
    }

    .bottom-bottom .right-arrow-icon{
        color:white;
        font-size:2vw;
    }

    .bottom-data-card{
        background-color:white;
        width:100%;
        height:100%;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:1vw;
    }

    .about-right-data-card{
        justify-content:center;
        text-align:center;
    }

    .about-details{
        border-radius:20px;
        background-color:${colors.accent};
        box-shadow: 6px 6px 10px rgba(000,000,000,0.5);
        display:flex;
    }
`
