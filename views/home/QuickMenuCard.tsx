import styles from './QuickMenuCard.module.css';

interface QuickMenuProp {
  src: string;
  alt?: string;
  type?: string;
  title?: string;
}

export default function QuickMenuCard({
  src,
  alt = 'image',
  type = 'main',
  title,
}: QuickMenuProp) {
  return (
    <div
      className={
        type === 'main' ? styles.quickMenuCard : styles.quickSubMenuCard
      }
    >
      <img className={styles.quickMenuCardImg} src={src} alt={alt} />

      {title && <span className={styles.title}>{title}</span>}
    </div>
  );
}
