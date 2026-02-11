import { AboutContainer, ImageContainer, GlobalStyles, AboutHeading, AboutDetailsContainer, DataCard } from "./About.styles";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {

    const starRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-container",
                    start: "top bottom",
                    end: "top top",
                    scrub: true
                }
            })
                .from(starRef.current, { xPercent: -420 }, 0);

        })

        return () => ctx.revert();
    }, [])

    return (
        <AboutContainer className="page-container about-container" id="about">
            <GlobalStyles />
            <AboutHeading>ABOUT ME</AboutHeading>
            <AboutDetailsContainer>
                <div className="about-top">
                    <div className="about-left about-details">
                        <DataCard>I started as a frontend developer, but I noticed something missing…</DataCard>
                        <DataCard>Good-looking apps were failing users.</DataCard>
                        <DataCard>That’s when I shifted my focus to UI/UX — not just how things look, but how they feel and work.</DataCard>
                    </div>
                    <div className="about-right about-details">
                        <p>My Design Principles</p>
                        <DataCard className="about-right-data-card">Clarity over decoration</DataCard>
                        <DataCard className="about-right-data-card">Performance is part of UX</DataCard>
                        <DataCard className="about-right-data-card">Accessibility is non-negotiable</DataCard>
                        <DataCard className="about-right-data-card">Every animation must have meaning</DataCard>
                    </div>
                </div>
                <div className="about-bottom about-details">
                    <div className="bottom-top">
                        <p>My Workflow</p>
                    </div>

                    <div className="bottom-bottom">
                        <div className="bottom-data-card">Research</div>
                        <ArrowRightIcon className="right-arrow-icon"/>
                        <div className="bottom-data-card">Wireframe</div>
                        <ArrowRightIcon className="right-arrow-icon"/>
                        <div className="bottom-data-card">Design</div>
                        <ArrowRightIcon className="right-arrow-icon"/>
                        <div className="bottom-data-card">Develop</div>
                        <ArrowRightIcon className="right-arrow-icon"/>
                        <div className="bottom-data-card">Optimize</div>
                        <ArrowRightIcon className="right-arrow-icon"/>
                        <div className="bottom-data-card">Test</div>
                    </div>
                </div>
            </AboutDetailsContainer>
            <ImageContainer src="/images/about-bg.png"></ImageContainer>
            <div className="about-bg-star-wrapper" ref={starRef}>
                <div className="about-bg-star"></div>
            </div>
        </AboutContainer>
    )
}

export default About;