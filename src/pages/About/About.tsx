import { AboutContainer, ImageContainer, GlobalStyles } from "./About.styles";

function About() {
    return (
        <AboutContainer className="page-container" id="about">
            <GlobalStyles/>
            About Section
            <ImageContainer src="/images/about-bg.png"></ImageContainer>
            <div className="about-bg-star"></div>
        </AboutContainer>
    )
}

export default About;