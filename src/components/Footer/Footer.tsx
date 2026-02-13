import { FooterContainer } from "./Footer.styles";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    
    const year = new Date().getFullYear();

    return (
        <FooterContainer>
            <CopyrightIcon/> {year} Anandhakrishnan T U  | Crafting intelligent & meaningful digital experiences.
        </FooterContainer>
    );
}

export default Footer;
