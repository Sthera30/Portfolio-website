import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import SchoolPage from "./SchoolPage.jsx";
import Testimonial from "../components/Testimonial.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import CodingJPages from "./CodingJPages.jsx";
import ProjectsPages from "./ProjectsPages.jsx";
import ContactmePages from "./ContactmePages.jsx";

function HomePage() {
    return (
        <>

            <Hero />
            <AboutUsPage />
            <CodingJPages />
            <SchoolPage />
            <Testimonial />
            <ProjectsPages />
            <ContactmePages />
            <Footer />
        </>
    );
}
export default HomePage; 
