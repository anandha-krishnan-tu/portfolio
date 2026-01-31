import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color: #121212;
    color: white;
`

const floatingAnimation = keyframes`
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0px);
    }
`

export const HomeTitle = styled.p`
    font-family: "Psilograph", Arial, sans-serif;
    font-weight:900;
    font-size: 18vw;
    color: #ffffff;
    padding-bottom:0;

    animation: ${floatingAnimation} 3s ease-in-out infinite;
`

export const HomeSubTitle = styled.p`
    font-size:2.1vw;
    margin-top:-6%;
    font-family:"Bebas", Arial, sans-serif;
    color: #ffffff;
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    width:100dvw;
    height: 15%;
    display:flex;
    justify-content:space-between;
    padding: 1% 2%;
`

export const ButtonElement = styled.button`
    height:100%;
    aspect-ratio:1;
    border-radius:50%;
    outline:none;
    border: dotted 4px white;
    background-color: transparent;
    backdrop-filter: blur(10px);
    color:white;
    font-size:1vw;
    font-family: "Bebas", Arial, sans-serif;

    animation: ${floatingAnimation} 4s ease-in-out infinite;

    &:hover{
        cursor:pointer;
        background-color: white;
        color: black;
        transition: all 0.3s ease-in-out;
    }
`

export const GlobalStyles = createGlobalStyle`
    
`