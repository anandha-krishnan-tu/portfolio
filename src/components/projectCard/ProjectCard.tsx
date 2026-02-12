import '../projectCard/projectCard.css'

type Project = {
    id: number,
    title: string,
    description: string,
    image: string,
    study?:string,
    demo?:string,
    github?:string
}

type ProjectProps = {
    project: Project;
}

function ProjectCard({project}: ProjectProps){
    return(
        <div className="project-card">
            <img src={project.image} alt="project demo image" className="project-image" />
            <p className="project-heading">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <div className="button-container">
                {project.study && (
                    <a href={project.study} target="_blank" rel="noreferrer">
                        <button className="case-study-button">View Case Study</button>
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                        <button className="live-demo-button">Live Demo</button>
                    </a>
                )}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <button className="github-button">GitHub</button>
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;