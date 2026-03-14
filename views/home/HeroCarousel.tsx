import ImageCard, { ImgCardInfoProp } from '@/components/common/ImageCard';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel({
  imageCardList,
}: {
  imageCardList: ImgCardInfoProp[];
}) {
  return (
    <div className={styles.container}>
      {imageCardList.map((item, idx) => (
        <ImageCard key={idx} {...item} />
      ))}
    </div>
  );
}
