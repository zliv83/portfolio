import styles from './TextArea.module.scss';

export default function TextArea({ placeholder, name, className, rows = 1 }) {
  return (
    <textarea
      className={`${styles.input} ${className}`}
      name={name}
      placeholder={placeholder}
      rows={rows}
    />
  );
}
