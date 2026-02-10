import styled, {createGlobalStyle} from "styled-components";
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
`

export const GlobalStyles = createGlobalStyle`
    .about-bg-star{
        width:100px;
        height:100px;
        background:gold;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%. 39% 35%);
    }
`