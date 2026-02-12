import { ProjectsContainer, ProjectsHeading, ProjectCardsContainer, ProjectBgRectangleOne, ProjectBgRectangleTwo } from "./Projects.styles";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
    {
        id: 1,
        title: "WeatherDates",
        description: "This is a application that gives you all realtime wheather data of any location.",
        image: "/images/projectImages/project-image-one.jpeg",
        study: "https://www.google.com/",
        demo: "https://www.linkedin.com/",
        github: "https://github.com/"
    },
    {
        id: 2,
        title: "Sigon",
        description: "This is a application can translate any language to another from text,voice and sign formats.",
        image: "/images/projectImages/project-image-two.jpeg",
        study: "https://www.google.com/",
        demo: "https://www.linkedin.com/",
        github: "https://github.com/"
    }
    ,
    {
        id: 3,
        title: "Resumate",
        description: "This Web application helps you to create ATS approved resumes in minutes easly.",
        image: "/images/projectImages/project-image-three.jpeg",
        study: "https://www.google.com/",
        demo: "https://www.linkedin.com/",
        github: "https://github.com/"
    },
    {
        id: 4,
        title: "EVen Photo Organizer",
        description: "TYou can simply organize images based on face from thousands of them.",
        image: "/images/projectImages/project-image-four.jpeg",
        study: "https://www.google.com/",
        demo: "https://www.linkedin.com/",
        github: "https://github.com/"
    }
    ,
    {
        id: 5,
        title: "Elderely",
        description: "An application that keeps tracks on medicine timing and diet of elder people.",
        image: "/images/projectImages/project-image-five.jpeg",
        study: "https://www.google.com/",
        demo: "https://www.linkedin.com/",
        github: "https://github.com/"
    },
    {
        id: 6,
        title: "Travel Buddy",
        description: "Looking for a best AI based travel partner? this is the application you are looking for..",
        image: "/images/projectImages/project-image-six.jpeg",
        study: "https://www.google.com/",
        demo: "https://www.linkedin.com/",
        github: "https://github.com/"
    }

]

function Projects() {

    const RectOne = useRef<HTMLDivElement>(null);
    const RectTwo = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                RectOne.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    scrollTrigger: {
                        trigger: ".projects-container",
                        start: "top center",
                        end: "top top",
                        scrub: true
                    }
                }
            );

            gsap.fromTo(
                RectTwo.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    scrollTrigger: {
                        trigger: ".projects-container",
                        start: "top center",
                        end: "top top",
                        scrub: true
                    }
                }
            );

            gsap.to([RectOne.current, RectTwo.current], {
                y:50,            // slight increase
                duration: 2.5,
                repeat: -1,              // infinite
                yoyo: true,              // reverse back
                ease: "sine.inOut"
            });
        });

        return () => ctx.revert();
    }, [])

    return (
        <ProjectsContainer id="projects" className="page-container projects-container">
            <ProjectsHeading>Projects</ProjectsHeading>
            <ProjectCardsContainer>
                {projectData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ProjectCardsContainer>
            <ProjectBgRectangleOne ref={RectOne} />
            <ProjectBgRectangleTwo ref={RectTwo} />
        </ProjectsContainer>
    );
}

export default Projects;
