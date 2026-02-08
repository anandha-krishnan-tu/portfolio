import { NavBarContainer, NavBarList, NavBarItem, NexoButton } from "./NavBar.styles";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function NavBar() {

    const scrollToSection = (id: string) => {
        const ele = document.getElementById(id);
        if(!ele) return;

        ele.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <NavBarContainer>
            <NavBarList>
                <NavBarItem onClick={() => scrollToSection('home')}>Home</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('about')}>About</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('projects')}>Projects</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('skills')}>Skills</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('experience')}>Experience</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('experiments')}>Experiments</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('education')}>Education</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('contact')}>Contact</NavBarItem>
            </NavBarList>
            <NexoButton><AutoAwesomeIcon/> Chat With Nexo</NexoButton>
        </NavBarContainer>
    );
}

export default NavBar;
