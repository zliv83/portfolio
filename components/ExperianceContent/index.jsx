import styles from './ExperianceContent.module.scss';

export default function ExperianceContent({ title, years }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.years}>{`${years} Years Experiance`}</div>
    </div>
  );
}
