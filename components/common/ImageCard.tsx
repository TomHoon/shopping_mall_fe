import styles from './ImageCard.module.css';

export interface ImgCardInfoProp {
  src: string;
  alt?: string;
  className?: string;
}

export default function ImageCard({
  src,
  alt = 'image',
  className = styles.imageCard,
}: ImgCardInfoProp) {
  return (
    <div>
      <img {...(className && { className })} src={src} alt={alt} />
    </div>
  );
}
