
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import PortfolioSection from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';
import SkillSection from './components/SkillSection';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <HeroSection></HeroSection>
      <main id="main">
        <AboutSection></AboutSection>
        <SkillSection></SkillSection>
        <ResumeSection></ResumeSection>
        <PortfolioSection></PortfolioSection>
        <ContactSection></ContactSection>
      </main>
    </div>
  );
}

export default App;
