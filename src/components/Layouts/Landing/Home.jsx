import Slides from './Slides'
import Services from './Services'
import PortfolioSection from './PortfolioSection'
import AboutSection from './AboutComponents/AboutSection'
const Home = () => {
  return (
    <>
      <Slides/>
      <AboutSection/>
      <Services/>
      <PortfolioSection/>
    </>
  )
}


export default Home