/* eslint-disable import/extensions */
import Logo from '@/components/Logo';
import Socials from '@/components/Socials';
import TextArea from '@/components/TextArea';
import UnderScoreText from '@/components/UnderScoreText';
import styles from './Contact.module.scss';

export default function Contact() {
  const inputs = [
    {
      placeholder: 'Name',
      name: 'name',
      key: 1,
    },
    {
      placeholder: 'Email',
      name: 'email',
      key: 2,
    },
    {
      placeholder: 'Message',
      name: 'message',
      key: 3,
      rows: 4,
    },
  ];

  const textArea = inputs.map((item) => (
    <TextArea
      key={item.key}
      placeholder={item.placeholder}
      name={item.name}
      rows={item.rows}
    />
  ));
  return (
    <div className={styles.contact}>
      <span className={styles.title}>Contact</span>
      <span className={styles.description}>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I&apos;ll get back to you as soon as possible.
      </span>
      <div className={styles.textArea}>{textArea}</div>
      <UnderScoreText className={styles.underscoreText} title="send message" />
      <div className={styles.underscore} />
      <div className={styles.footer}>
        <Logo />
        <Socials />
      </div>
      <div className={styles.rings} />
    </div>
  );
}
