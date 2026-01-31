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
    font-size:1.72vw;
    margin-top:-6%;
`

export const GlobalStyles = createGlobalStyle`
    
`