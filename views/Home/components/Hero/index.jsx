/* eslint-disable import/extensions */
import styles from './Hero.module.scss';
import Logo from '@/components/Logo';
import Socials from '@/components/Socials';
import Intro from '@/components/Intro';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <Logo />
        <Socials className={styles.socials} />
      </div>
      <div className={styles.image} />
      <div className={styles.rings} />
      <div className={styles.circle} />
      <Intro className={styles.intro} />
    </div>
  );
}
