import BigContainer from '../components/layout/BigContainer';
import MainNavigationBar from '../components/layout/MainNavigationBar';
import ProjectContainer from '../components/layout/ProjectContainer';
import ImageBanner from '../components/layout/ImageBanner';
import Footer from '../components/layout/Footer';
import CircularImage from '../components/ui/CircularImage';
import AboutMe from '../components/layout/AboutMe';

const MainPage = () => {
  return (
    <BigContainer>
      <MainNavigationBar />
      <AboutMe />
      <ProjectContainer>Project</ProjectContainer>
      <Footer />
    </BigContainer>
  );
};

export default MainPage;
