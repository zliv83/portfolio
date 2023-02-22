/* eslint-disable import/extensions */
import UnderScoreText from '@/components/UnderScoreText';
import Projects from '@/components/Projects';
import styles from './Projects.module.scss';

export default function ProjectsBlock() {
  const projectList = [
    {
      title: 'Design Portfolio',
      tech: ['React', 'Sass', 'NextJS'],
      className: styles.design,
      key: 1,
    },
    {
      title: 'e-learning landing page',
      tech: ['React', 'Sass', 'NextJS'],
      className: styles.elearning,
      key: 2,
    },
    {
      title: 'todo web app',
      tech: ['React', 'Sass', 'NextJS'],
      className: styles.todo,
      key: 3,
    },
    {
      title: 'entertainment web app',
      tech: ['React', 'Sass', 'NextJS'],
      className: styles.entertainment,
      key: 4,
    },
    {
      title: 'memory game',
      tech: ['React', 'Sass', 'NextJS'],
      className: styles.memory,
      key: 5,
    },
    {
      title: 'art gallery showcase',
      tech: ['React', 'Sass', 'NextJS'],
      className: styles.art,
      key: 6,
    },
  ];

  const projects = projectList.map((project) => (
    <Projects
      key={project.key}
      title={project.title}
      tech={project.tech}
      className={project.className}
    />
  ));

  return (
    <div className={styles.projects}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Projects</span>
        <UnderScoreText title="contact me" />
      </div>
      <div className={styles.projectsContainer}>{projects}</div>
    </div>
  );
}
