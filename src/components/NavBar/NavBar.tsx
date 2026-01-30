import { NavBarContainer, NavBarList, NavBarItem } from "./NavBar.styles";

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
                <NavBarItem onClick={() => scrollToSection('experience')}>Experience</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('projects')}>Projects</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('skills')}>Skills</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('education')}>Education</NavBarItem>
                <NavBarItem onClick={() => scrollToSection('contact')}>Contact</NavBarItem>
            </NavBarList>
        </NavBarContainer>
    );
}

export default NavBar;
