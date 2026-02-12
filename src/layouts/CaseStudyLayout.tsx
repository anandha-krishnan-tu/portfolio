import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function CaseStudyLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default CaseStudyLayout;
