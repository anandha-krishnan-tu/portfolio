import { AboutContainer, LeftSection, RightSection, AboutTitle, AboutParagraph, ButttonContainer, ButtonElement, TextContainer, TextBox } from "./About.styles";
import ThreeDCanvas from "../../components/ThreeD/ThreeDCanvas";

function About() {
    return (
        <AboutContainer id="about" className="about-section page-container">
            <LeftSection className="left-section">
                <ThreeDCanvas />
            </LeftSection>
            <RightSection className="right-section">
                <AboutTitle className="about-title">About Me</AboutTitle>
                <TextContainer>
                    <TextBox>
                        <AboutParagraph className="about-paragraph">
                            I’m a frontend and UI/UX developer with over two years of professional experience, currently based in Kochi, Kerala. My work focuses on building visually appealing, responsive, and user-friendly interfaces using modern web technologies.
                        </AboutParagraph>
                    </TextBox>
                    <TextBox>
                        <AboutParagraph className="about-paragraph">
                            What excites me most about frontend development is the ability to combine logic, design, and interaction into a single experience. I care deeply about how users feel while using a product — not just how it looks, but how smooth, intuitive, and enjoyable it is.
                        </AboutParagraph>
                    </TextBox>
                    <TextBox>
                        <AboutParagraph className="about-paragraph">
                            I’m particularly interested in integrating new technologies such as AI-driven interfaces, animations, and 3D elements into web applications, while still maintaining performance, accessibility, and clarity. My goal is to build interfaces that feel modern today and relevant tomorrow.
                        </AboutParagraph>
                    </TextBox>
                </TextContainer>
                <ButttonContainer>
                    <ButtonElement>View My Works</ButtonElement>
                    <ButtonElement>Download CV</ButtonElement>
                </ButttonContainer>
            </RightSection>
        </AboutContainer>
    )
}

export default About;