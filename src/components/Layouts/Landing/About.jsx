import Client from "./AboutComponents/Client"
import Skills from "./AboutComponents/Skills"
import Team from "./AboutComponents/Team"
import AboutSection from "./AboutComponents/AboutSection"
import Breadcrumbs from "./master/Breadcrumbs"

const About = () => {
  return (
    <>
    <Breadcrumbs title='À propos'/>    
    <AboutSection/>
    <Team/>
    <Skills/>
    <Client/>
    </>
  )
}

export default About
