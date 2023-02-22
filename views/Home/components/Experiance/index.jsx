import styles from './Experiance.module.scss';
import ExperianceContent from '../../../../components/ExperianceContent';

export default function Experiance() {
  const experiance = [
    {
      title: 'Javascript',
      years: 3,
      key: 1,
    },
    {
      title: 'React',
      years: 3,
      key: 2,
    },
    {
      title: 'NextJS',
      years: 3,
      key: 3,
    },
    {
      title: 'SASS/CSS',
      years: 3,
      key: 4,
    },
  ];

  const experiances = experiance.map((item) => (
    <ExperianceContent key={item.key} title={item.title} years={item.years} />
  ));
  return (
    <div className={styles.container}>
      <div className={styles.borderTop} />
      <div className={styles.content}>{experiances}</div>
      <div className={styles.borderBottom} />
      <div className={styles.rings} />
    </div>
  );
}
