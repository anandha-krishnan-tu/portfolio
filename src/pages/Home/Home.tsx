import { HomeContainer, GlobalStyles, MainHead, SubHead, HeadContainer, ButtonContainer, Button } from "./Home.styles";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HandshakeIcon from '@mui/icons-material/Handshake';
import NearMeIcon from '@mui/icons-material/NearMe';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    // Scroll into view
    function ScrollIntoSection(id: string) {
        const ele = document.getElementById(id);
        if (ele) {
            ele.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    const squareRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".page-container",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })
                .to(squareRef.current, { xPercent: -120 }, 0)
                .to(circleRef.current, { xPercent: 120 }, 0);

        })

        return () => ctx.revert();
    }, [])

    return (
        <>
            <GlobalStyles />
            <HomeContainer className="page-container" id="home">
                <HeadContainer>
                    <MainHead>Anandhakrishnan T U</MainHead>
                    <SubHead>UI/UX Developer who designs with empathy and builds with performance in mind. | I don’t just create interfaces — I solve user problems through design + code</SubHead>
                    <ButtonContainer>
                        <Button className="btn" onClick={()=>ScrollIntoSection('projects')}>View My Works <NearMeIcon /></Button>
                        <Button className="btn secondary-btn" onClick={()=>ScrollIntoSection('contact')}>Contact Me <HandshakeIcon /></Button>
                    </ButtonContainer>
                </HeadContainer>
                <div className="home-bg-square-wrapper" ref={squareRef}>
                    <div className="home-bg-square"></div>
                </div>

                <div className="home-bg-circle-wrapper" ref={circleRef}>
                    <div className="home-bg-circle"></div>
                </div>
            </HomeContainer>
        </>
    )
}

export default Home;