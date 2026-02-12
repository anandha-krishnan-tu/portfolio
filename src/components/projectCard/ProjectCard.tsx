import '../projectCard/projectCard.css'
import { useNavigate } from 'react-router-dom';

type Project = {
    id: number,
    title: string,
    description: string,
    image: string,
    study?: string,
    demo?: string,
    github?: string
}

type ProjectProps = {
    project: Project;
}

function ProjectCard({ project }: ProjectProps) {

    const navigate = useNavigate();

    return (
        <div className="project-card">
            <img src={project.image} alt="project demo image" className="project-image" />
            <p className="project-heading">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <div className="button-container">
                {project.study && (
                    <button onClick={()=> navigate(`/case-study/${project.id}`)} className="case-study-button">View Case Study</button>
                )}
                {project.demo && (
                    <button className="live-demo-button">Live Demo</button>
                )}
                {project.github && (
                    <button className="github-button">GitHub</button>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;