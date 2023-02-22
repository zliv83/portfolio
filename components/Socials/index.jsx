import Image from 'next/image';
import Link from 'next/link';
import github from '@/public/icon-github.svg';
import frontendMentor from '@/public/icon-frontend-mentor.svg';
import linkedin from '@/public/icon-linkedin.svg';
import twitter from '@/public/icon-twitter.svg';
import styles from './Socials.module.scss';

export default function Socials({ className }) {
  const socials = [
    {
      icon: github,
      href: 'https://github.com/zliv83',
      key: 1,
      alt: 'Github',
    },
    {
      icon: frontendMentor,
      href: 'https://www.frontendmentor.io/profile/zliv83',
      key: 2,
      alt: 'Frontend Mentor',
    },
    {
      icon: linkedin,
      href: 'https://www.linkedin.com/in/zliv83/',
      key: 3,
      alt: 'LinkedIn',
    },
    {
      icon: twitter,
      href: 'https://twitter.com/zliv83',
      key: 4,
      alt: 'Twitter',
    },
  ];
  const socialsList = socials.map((social) => (
    <Link href={social.href} target="_blank">
      <Image
        className={styles.icon}
        src={social.icon}
        alt={social.alt}
        key={social.key}
      />
    </Link>
  ));
  return <div className={`${styles.socials} ${className}`}>{socialsList}</div>;
}
