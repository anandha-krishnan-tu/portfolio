import { useParams, useNavigate } from "react-router-dom";;
import { projectsData } from "../../data/projectsData";
import { CaseStudyContainer, Button, List, ListItem, MainTitle, Paragraph, ProjectImage, SubTitle, GlobalStyles, ButtonContainer, MediaContainer, ProjectVideo } from "./CaseStudy.styles";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function CaseStudy() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(
        (p) => p.id === Number(projectId)
    );

    if (!project) {
        return <div>Project Info Not Found</div>
    }

    return (
        <>
            <GlobalStyles />
            <CaseStudyContainer>
                <ButtonContainer>
                    <Button onClick={() => navigate(-1)}><KeyboardBackspaceIcon className="back-icon" />Back</Button>
                    <Button ><AutoAwesomeIcon /> Chat With Nexo</Button>
                </ButtonContainer>
                <MainTitle>{project.title}</MainTitle>
                <MediaContainer>
                    <div className="media-container-left">
                        <ProjectImage src={project.image}></ProjectImage>
                        <Paragraph>This is the sample screenshot from {project.title} project.</Paragraph>
                    </div>
                    <div className="media-container-right">
                        <ProjectVideo
                            src="/videos/video-one.mp4"
                            muted
                            autoPlay
                            loop
                            playsInline
                            controls
                        >
                            
                        </ProjectVideo>
                        <Paragraph>This is the sample screenrecorded video from {project.title} project to show how it works.</Paragraph>
                    </div>
                </MediaContainer>
                <div className="data-container-box">
                    <Paragraph>{project.description}</Paragraph>
                </div>
                <div className="data-container-box">
                    <SubTitle>Problem</SubTitle>
                    <Paragraph>{project.problem}</Paragraph>
                </div>
                <div className="data-container-box">
                    <SubTitle>User Goal</SubTitle>
                    <Paragraph>{project.userGoal}</Paragraph>
                </div>
                <div className="data-container-box">
                    <SubTitle>UX Decisions</SubTitle>
                    <List>
                        <ListItem>list 1</ListItem>
                        <ListItem>list 2</ListItem>
                        <ListItem>list 3</ListItem>
                    </List>
                </div>
                <div className="data-container-box">
                    <SubTitle>UI Design</SubTitle>
                    <List>
                        <ListItem>list 1</ListItem>
                        <ListItem>list 2</ListItem>
                        <ListItem>list 3</ListItem>
                    </List>
                </div>
                <div className="data-container-box">
                    <SubTitle>Development</SubTitle>
                    <List>
                        <ListItem>list 1</ListItem>
                        <ListItem>list 2</ListItem>
                        <ListItem>list 3</ListItem>
                    </List>
                </div>
                <div className="data-container-box">
                    <SubTitle>UX Dev Impact</SubTitle>
                    <List>
                        <ListItem>list 1</ListItem>
                        <ListItem>list 2</ListItem>
                        <ListItem>list 3</ListItem>
                    </List>
                </div>

                <div className="case-study-bg-circle-one"></div>
                <div className="case-study-bg-circle-two"></div>
            </CaseStudyContainer>
        </>
    )
}

export default CaseStudy;