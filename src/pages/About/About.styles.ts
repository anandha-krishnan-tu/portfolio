import styled from "styled-components";

export const AboutContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    background: radial-gradient(circle at center, #01081c, #000000);
    color:white;    
`

export const LeftSection = styled.div`
    height:75%;
    width:35%;
    overflow:hidden;
    position:relative;
    cursor: grab;
`

export const RightSection = styled.div`
    height:75%;
    width:60%;
    padding-right:5%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const AboutTitle = styled.p`
    font-weight:900;
    font-size: 3dvw;
    margin-bottom:20px;
`

export const TextContainer = styled.div`
    height:70%;
    display:flex;
    gap:20px
`

export const TextBox = styled.div`
    height:100%;
    flex:auto;
    border: solid 1px white;
    padding:20px;
    border-radius:10px;
    background-color: rgba(36, 69, 108, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.28);
    cursor:pointer;
`

export const AboutParagraph = styled.p`
    font-size: 1.2dvw;
    line-height: 1.6;
    text-align: left;
`

export const ButttonContainer = styled.div`
    height: 10%;
    width:100%;
    display:flex;
    gap:20px;
    justify-content:space-around;
`

export const ButtonElement = styled.button`
    width:50%;
    background-color: rgba(36, 69, 108, 0.1);
    backdrop-filter: blur(10px);
    border: solid 1px white;
    color:white;
    border-radius: 10px;
    font-size:1.2vw;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.28);
    cursor:pointer;
`