import { HomeContainer,GlobalStyles} from "./Home.styles";

function Home() {

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
            <HomeContainer>
                Home Section
            </HomeContainer>
        </>
    )
}

export default Home;