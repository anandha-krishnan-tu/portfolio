import { SkillsContainer, DataBoxes, DataContainer, DataContainerBottom, DataContainerTop, SkillsHead, SubHead, GlobalStyles } from "./Skills.styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import InterestsIcon from '@mui/icons-material/Interests';
import PsychologyIcon from '@mui/icons-material/Psychology';

gsap.registerPlugin(ScrollTrigger);

function Skills() {

    const HexLeftRef = useRef<HTMLDivElement>(null);
    const HexRightRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".skills-container",
                    start: "top center",
                    end: "top top",
                    scrub: true
                }
            })
                .from(HexLeftRef.current, { xPercent: -120 }, 0)
                .from(HexRightRef.current, { xPercent: 120 }, 0);
        })

        return () => ctx.revert();
    },[])

    return (
        <>
            <GlobalStyles />
            <SkillsContainer className="skills-container page-container" id="skills">
                <SkillsHead>SKILLS</SkillsHead>
                <DataContainer>
                    <DataContainerTop>
                        <DataBoxes>
                            <SubHead>Experience Design & UX Foundations</SubHead>
                            <ul className="databox-ul">
                                <li className="databox-li">User Research & Insight Analysis</li>
                                <li className="databox-li">Wireframing & Information Architecture</li>
                                <li className="databox-li">Interaction Design & Micro-Interactions</li>
                                <li className="databox-li">Accessibility & WCAG Compliance</li>
                                <li className="databox-li">Design Systems & Component Consistency</li>
                                <li className="databox-li">Usability-Driven Interface Decisions</li>
                            </ul>
                            <AutoGraphIcon className="box-bg-icon"/>
                        </DataBoxes>
                        <DataBoxes>
                            <SubHead>Frontend Engineering & Architecture</SubHead>
                            <ul className="databox-ul">
                                <li className="databox-li">React (Hooks, State Optimization, Performance)</li>
                                <li className="databox-li">TypeScript (Type Safety & Scalable Patterns)</li>
                                <li className="databox-li">Component-Based Architecture</li>
                                <li className="databox-li">Animation & Motion Implementation</li>
                                <li className="databox-li">Responsive & Adaptive Layout Systems</li>
                                <li className="databox-li">UI Performance Optimization</li>
                            </ul>
                            <PhonelinkIcon className="box-bg-icon"/>
                        </DataBoxes>
                        <DataBoxes>
                            <SubHead>Design & Development Toolkit</SubHead>
                            <ul className="databox-ul">
                                <li className="databox-li">Figma</li>
                                <li className="databox-li">Adobe Illustrator</li>
                                <li className="databox-li">Adobe Photoshop</li>
                                <li className="databox-li">Adobe XD</li>
                                <li className="databox-li">GitHub</li>
                                <li className="databox-li">Chrome DevTools</li>
                            </ul>
                            <InterestsIcon className="box-bg-icon"/>
                        </DataBoxes>
                        <DataBoxes>
                            <SubHead>Professional Strengths</SubHead>
                            <ul className="databox-ul">
                                <li className="databox-li">UX-Driven Problem Solving</li>
                                <li className="databox-li">Design-to-Code Translation</li>
                                <li className="databox-li">Cross-Team Collaboration</li>
                                <li className="databox-li">Component Reusability Strategy</li>
                                <li className="databox-li">Accessibility Awareness</li>
                            </ul>
                            <PsychologyIcon className="box-bg-icon"/>
                        </DataBoxes>
                    </DataContainerTop>
                    <DataContainerBottom>
                        <DataBoxes>
                            <SubHead>Core Programming Languages</SubHead>
                            <div className="coding-languages-main-container">
                                <div className="code-language-container">
                                    <p>• JavaScript (ES6+)</p>
                                    <div className="loader-div">
                                        <div className="loaded js">95%</div>
                                    </div>
                                </div>
                                <div className="code-language-container">
                                    <p>• TypeScript</p>
                                    <div className="loader-div">
                                        <div className="loaded ts">95%</div>
                                    </div>
                                </div>
                                <div className="code-language-container">
                                    <p>• Python</p>
                                    <div className="loader-div">
                                        <div className="loaded python">70%</div>
                                    </div>
                                </div>
                                <div className="code-language-container">
                                    <p>• Java</p>
                                    <div className="loader-div">
                                        <div className="loaded java">70%</div>
                                    </div>
                                </div>
                                <div className="code-language-container">
                                    <p>• HTML5 / CSS3 / SCSS</p>
                                    <div className="loader-div">
                                        <div className="loaded html">98%</div>
                                    </div>
                                </div>
                            </div>
                        </DataBoxes>
                        <DataBoxes>
                            <SubHead>Languages & Communication</SubHead>
                            <div className="communication-languages-main-container">
                                <div className="communication-language-container">
                                    <p>• Malayalam</p>
                                    <div className="check-box-container">
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Speak</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Read</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Write</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="communication-language-container">
                                    <p>• English</p>
                                    <div className="check-box-container">
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Speak</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Read</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Write</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="communication-language-container">
                                    <p>• Hindi</p>
                                    <div className="check-box-container">
                                        <div>
                                            <input type="checkbox" disabled />
                                            <label>Speak</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Read</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" checked />
                                            <label>Write</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DataBoxes>
                    </DataContainerBottom>
                </DataContainer>

                <div className="hexagon-right-wrapper" ref={HexRightRef}>
                    <div className="skills-bg-hexagon-one"></div>
                </div>

                <div className="hexagon-left-wrapper" ref={HexLeftRef}>
                    <div className="skills-bg-hexagon-two"></div>
                </div>
            </SkillsContainer>
        </>
    );
}

export default Skills;