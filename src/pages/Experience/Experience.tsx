import { ExperienceContainer, ExperienceBox, ExperienceTitle, ExperienceLeft, ExperienceRight, GlobalStyles, Heading, Paragraph } from "./Experience.styles";

function Experience() {
    return (
        <>
            <GlobalStyles />
            <ExperienceContainer id="experience" className="experience-section page-container">
                <ExperienceTitle>Experience</ExperienceTitle>
                {/* <p className="sub-title">Frontend developer focused on building scalable, high-performance, and accessible web applications with measurable business impact.</p> */}
                <ExperienceBox>
                    <ExperienceLeft className="exp-left">
                        <Heading className="main-head">Frontend Developer</Heading>
                        <Heading className="sub-head">UST | Jan 2024 – Present</Heading>
                        <ul>
                            <li>Architected and developed scalable, reusable UI components using modern frontend technologies</li>
                            <li>Improved overall UX consistency across multiple enterprise modules</li>
                            <li>Reduced production UI defects by implementing structured component architecture</li>
                            <li>Collaborated closely with designers, backend teams, and product owners</li>
                            <li>Optimized application performance resulting in faster load times</li>
                            <li>Ensured accessibility compliance following WCAG standards</li>
                            <li>Contributed to design system enhancements and UI documentation</li>
                            <li>Participated in code reviews and mentored junior developers</li>
                        </ul>
                    </ExperienceLeft>
                    <ExperienceRight className="exp-right">
                        <div className="exp-right-top">
                            <Heading className="main-head">Growth Timeline</Heading>
                            <div className="timeline-data-container">
                                <div className="timeline-data">
                                    <p className="head">Jan 2024<br />Joined UST</p>
                                    <div className="dot"></div>
                                    <p className="desc">Started building scalable UI components.</p>
                                </div>
                                <div className="timeline-data">
                                    <p className="head">Mid 2024<br />UI Modernization</p>
                                    <div className="dot"></div>
                                    <p className="desc">Refactored legacy UI and improved consistency.</p>
                                </div>
                                <div className="timeline-data">
                                    <p className="head">Jan 2025<br />1 Year Milestone</p>
                                    <div className="dot"></div>
                                    <p className="desc">Delivered high-performance frontend solutions.</p>
                                </div>
                                <div className="timeline-data">
                                    <p className="head">2025 - Performance & Accessibility</p>
                                    <div className="dot"></div>
                                    <p className="desc">Boosted Lighthouse score by 30%+</p>
                                </div>
                                <div className="timeline-data">
                                    <p className="head">2026<br />2 Years</p>
                                    <div className="dot"></div>
                                    <p className="desc">Leading frontend architecture initiatives.</p>
                                </div>
                                <div className="progress-line"></div>
                            </div>
                        </div>
                        <div className="exp-right-middle">
                            <Heading className="main-head">Expanded Responsibilities</Heading>
                            <div className="responsibilities-container">
                                <div className="progress-bar-container">
                                    <div className="bar-data">
                                        <p>UI Development</p>
                                        <div className="bar">
                                            <div className="bar-length one">90%</div>
                                        </div>
                                    </div>
                                    <div className="bar-data">
                                        <p>UX Research & Design Collaboration</p>
                                        <div className="bar">
                                            <div className="bar-length two">75%</div>
                                        </div>
                                    </div>
                                    <div className="bar-data">
                                        <p>Component Architecture</p>
                                        <div className="bar">
                                            <div className="bar-length three">85%</div>
                                        </div>
                                    </div>
                                    <div className="bar-data">
                                        <p>Performance Optimization</p>
                                        <div className="bar">
                                            <div className="bar-length four">80%</div>
                                        </div>
                                    </div>
                                    <div className="bar-data">
                                        <p>Accessibility Implementation</p>
                                        <div className="bar">
                                            <div className="bar-length five">70%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="graph-container">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="exp-right-bottom">
                            <div className="exp-bottom-box">
                                <Heading className="main-head">Improved UI Consistency</Heading>
                                <p className="sub-head">Implemented a scalable component-based architecture that:</p>
                                <ul>
                                    <li>Increased design consistency across 8+ modules</li>
                                    <li>Reduced UI development time by 25%</li>
                                    <li>Standardized styling using reusable design tokens</li>
                                    <li>Enhanced maintainability and scalability</li>
                                </ul>
                            </div>
                            <div className="exp-bottom-box">
                                <Heading className="main-head">Optimized Performance</Heading>
                                <p className="sub-head">Delivered measurable frontend performance improvements:</p>
                                <ul>
                                    <li>Reduced initial load time by 40%</li>
                                    <li>Improved Lighthouse performance score from 65 → 92</li>
                                    <li>Minimized bundle size using code splitting & lazy loading</li>
                                    <li>Optimized API rendering and state management</li>
                                </ul>
                            </div>
                            <div className="exp-bottom-box">
                                <Heading className="main-head">Enhanced Accessibility</Heading>
                                <p className="sub-head">Focused on inclusive and accessible experiences:</p>
                                <ul>
                                    <li>Implemented WCAG 2.1 compliance standards</li>
                                    <li>Improved keyboard navigation and screen reader support</li>
                                    <li>Increased accessibility score to 95+</li>
                                    <li>Ensured proper color contrast and semantic structure</li>
                                </ul>
                            </div>
                        </div>
                    </ExperienceRight>
                </ExperienceBox>
            </ExperienceContainer>
        </>
    );
}

export default Experience;
