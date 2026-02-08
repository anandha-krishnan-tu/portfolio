import styled, { createGlobalStyle, keyframes } from 'styled-components';
import colors from '../../styles/theme/colors';

export const HomeContainer = styled.div`
    position: relative;
    background-color: ${colors.mainBackground};
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    height:100vh;
`

export const HeadContainer = styled.div`
    width:80%;
    z-index:9;
`

export const MainHead = styled.p`
    width:100%;
    font-family:"Psilograph";
    text-align:center;
    font-size:30vw;
    color:${colors.primaryText};
    -webkit-text-stroke: 2px ${colors.mainBackground};
`
export const SubHead = styled.p`
    width:100%;
    font-family:"Bebas";
    text-align:center;
    font-size:1.36vw;
    margin-top:-15%;
`
export const ButtonContainer = styled.div`
    margin-top:4%;
    height:7vh;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10%;
`

export const Button = styled.button`
    height:100%;
    min-width:20%;
    border-radius:20px;
    font-family:"Bebas";
`

const SquareRotate = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const CircleEnlarge = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const GlobalStyles = createGlobalStyle`
    .btn{
        border: solid 2px ${colors.accent};
        display:flex;
        align-items:center;
        justify-content:center;
        gap:6%;
        font-size:1.4vw;
        background-color:${colors.accent};
        color:${colors.mainBackground};
        font-weight:400;
        box-shadow:4px 4px 4px ${colors.shadow};
    }

    .secondary-btn{
        background-color:${colors.mainBackground};
        color:${colors.accent};

        &:hover{
            background-color:${colors.accent};
            color:${colors.mainBackground};
        }
    }

    .home-bg-square-wrapper {
        position: absolute;
        left: -20%;
        width: 40%;
        aspect-ratio: 1;
        will-change: transform;
    }

    .home-bg-square {
        width: 100%;
        height: 100%;
        background-color: ${colors.divider};
        animation: ${SquareRotate} 90s linear infinite;
        border-radius:50px;
    }

    .home-bg-circle-wrapper {
        position: absolute;
        right: -20%;
        bottom: -20%;
        width: 50%;
        aspect-ratio: 1;
        will-change: transform;
    }

    .home-bg-circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${colors.accent};
        animation: ${CircleEnlarge} 10s ease-in-out infinite;
    }
    
`