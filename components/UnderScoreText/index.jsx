import styles from './UnderScoreText.module.scss';

export default function UnderScoreText({ title, className }) {
  return (
    <div className={`${styles.underScoreText} ${className}`}>
      <span className={styles.title}>{title}</span>
      <div className={styles.underscore} />
    </div>
  );
}
