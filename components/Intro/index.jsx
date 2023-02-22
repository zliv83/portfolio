/* eslint-disable react/jsx-one-expression-per-line */
import UnderScoreText from '../UnderScoreText';
import styles from './Intro.module.scss';

export default function Intro({ className }) {
  return (
    <div className={`${styles.intro} ${className}`}>
      <span className={styles.title}>
        Nice to <br className={styles.break} /> meet you!&nbsp;
        <br className={styles.breakMobile} />
        I&apos;m <br className={styles.break} /> Zach Livingston.
        <div className={styles.titleUnderscore} />
      </span>
      <span className={styles.description}>
        Based in North Carolina, I&apos;m a full-stack web developer with a
        passion for building apps that people love.
      </span>
      <UnderScoreText title="contact me" className={styles.underScoreText} />
    </div>
  );
}
