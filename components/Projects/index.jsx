import UnderScoreText from '../UnderScoreText';
import styles from './Projects.module.scss';

export default function Projects({ title, tech, className }) {
  const techStack = tech.map((item) => (
    <span className={styles.tech}>{item}</span>
  ));
  return (
    <div className={styles.project}>
      <div className={`${styles.image} ${className}`} />
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.techContainer}>{techStack}</div>
      </div>
      <div className={styles.view}>
        <UnderScoreText title="view project" />
        <UnderScoreText title="view code" />
      </div>
    </div>
  );
}
