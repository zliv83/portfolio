import Image from 'next/image';
import Link from 'next/link';
import styles from './Socials.module.scss';

export default function Socials({ className }) {
  const socials = [
    {
      icon: './icon-github.svg',
      href: 'https://github.com/zliv83',
      key: 1,
      alt: 'Github',
    },
    {
      icon: './icon-frontend-mentor.svg',
      href: 'https://www.frontendmentor.io/profile/zliv83',
      key: 2,
      alt: 'Frontend Mentor',
    },
    {
      icon: './icon-linkedin.svg',
      href: 'https://www.linkedin.com/in/zliv83/',
      key: 3,
      alt: 'LinkedIn',
    },
    {
      icon: './icon-twitter.svg',
      href: 'https://twitter.com/zliv83',
      key: 4,
      alt: 'Twitter',
    },
  ];
  const socialsList = socials.map((social) => (
    <Link href={social.href}>
      <Image
        height={20}
        width={20}
        src={social.icon}
        alt={social.alt}
        key={social.key}
      />
    </Link>
  ));
  return <div className={`${styles.socials} ${className}`}>{socialsList}</div>;
}
