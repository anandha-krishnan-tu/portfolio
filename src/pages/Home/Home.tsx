import { HomeContainer, HomeTitle, HomeSubTitle, GlobalStyles, ButtonElement, ButtonContainer } from "./Home.styles";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useEffect, useRef } from "react";

function Home() {

    // Vanta JS background effect

    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            vantaEffect.current = FOG({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x363b8b,
                midtoneColor: 0x5092de,
                lowlightColor: 0xffffff,
                baseColor: 0x101b3b,
                blurFactor: 0.44,
                speed: 2.30,
                zoom: 1.20
            });

        }
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    // Scroll into view
    
    function ScrollIntoSection(id: string) {
        const ele = document.getElementById(id);
        if(ele){
            ele.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    return (
        <>
            <GlobalStyles />
            <HomeContainer id="home" className="home-section page-container" ref={vantaRef}>
                <HomeTitle>Anandhakrishnan T U</HomeTitle>
                <HomeSubTitle>UI/UX Designer | Frontend Developer | UI/UX Developer | Problem Solver | Tech Enthusiast</HomeSubTitle>
                <ButtonContainer>
                    <ButtonElement onClick={() => ScrollIntoSection("contact")}>Contact Me</ButtonElement>
                    <ButtonElement>Chat with nexo</ButtonElement>
                </ButtonContainer>
            </HomeContainer>
        </>
    )
}

export default Home;