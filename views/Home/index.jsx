import Experiance from './components/Experiance';
import Hero from './components/Hero';
import ProjectsBlock from './components/ProjectsBlock';
import Contact from './components/Contact';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Experiance />
      <ProjectsBlock />
      <Contact />
    </div>
  );
}
