import { ProjectsContainer, ProjectsHeading, ProjectCardsContainer,ProjectCards } from "./Projects.styles";

function Projects() {
    return (
        <ProjectsContainer id="projects" className="page-container projects-container">
            <ProjectsHeading>Projects Page</ProjectsHeading>
            <ProjectCardsContainer>
                <ProjectCards>item 1</ProjectCards>
                <ProjectCards>item 2</ProjectCards>
                <ProjectCards>item 3</ProjectCards>
                <ProjectCards>item 4</ProjectCards>
                <ProjectCards>item 5</ProjectCards>
                <ProjectCards>item 6</ProjectCards>
            </ProjectCardsContainer>
        </ProjectsContainer> 
    );
}

export default Projects;
