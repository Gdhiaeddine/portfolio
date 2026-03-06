import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";
import AboutMe from "../components/aboutMe";
import Experience from "../components/experience";
import Contact from "../components/contact";
import SocialMedia from "../components/socialMedia";
import Footer from "../components/footer";

export default function Home() {

  return (
    <div className="mx-auto bg-black overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Contact />
      <SocialMedia/>
      <Footer/>
    </div>
  );
}
