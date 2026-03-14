'use client';

import styles from '@/views/home/Main.module.css';
import { useState } from 'react';
import HeroCarousel from '@/views/home/HeroCarousel';
import QuickMenuCard from '@/views/home/QuickMenuCard';

type Tab =
  | {
      title: string;
      active: boolean;
    }
  | {
      title: React.ReactNode;
      active: boolean;
    };

const mockTabs = [
  { title: '추천', active: true },
  {
    title: (
      <>
        <img src="/aftersale.png" alt="sale.png" />
      </>
    ),
    active: false,
  },
  { title: '랭킹', active: false },
  { title: '세일', active: false },
  { title: '발매', active: false },
  { title: '콘텐츠', active: false },
];

const heroItems = [
  { src: '/heroImg1.jpg' },
  { src: '/heroImg2.jpg' },
  { src: '/heroImg3.jpg' },
  { src: '/heroImg4.jpg' },
  { src: '/heroImg5.jpg' },
  { src: '/heroImg6.jpg' },
];

const quickmenuItems = [
  { src: '/quickMenu/asus.jpg' },
  { src: '/quickMenu/champion.jpg' },
  { src: '/quickMenu/cyberfunk.jpg' },
  { src: '/quickMenu/discus.jpg' },
  { src: '/quickMenu/eights.jpg' },
  { src: '/quickMenu/ept.jpg' },
  { src: '/quickMenu/hooves.jpg' },
  { src: '/quickMenu/kiwoom.jpg' },
  { src: '/quickMenu/mahagrid.jpg' },
  { src: '/quickMenu/moif.jpg' },
  { src: '/quickMenu/northface.jpg' },
  { src: '/quickMenu/plac.jpg' },
  { src: '/quickMenu/propspec.jpg' },
  { src: '/quickMenu/taylor.jpg' },
  { src: '/quickMenu/thisisneverthat.jpg' },
  { src: '/quickMenu/vunque.jpg' },
];

const quickSubMenuItems = [
  { src: '/quickSubMenu/brandweek.jpg', title: '브랜드위크' },
  { src: '/quickSubMenu/cam.png', title: '라이브' },
  { src: '/quickSubMenu/cap.png', title: '체험단' },
  { src: '/quickSubMenu/clock.png', title: '타임세일' },
  { src: '/quickSubMenu/downarrow.jpg', title: '최저가 보상제' },
  { src: '/quickSubMenu/menu.png', title: '서비스 전체보기' },
  { src: '/quickSubMenu/muquiz.jpg', title: '무퀴즈x애프터 세일' },
  { src: '/quickSubMenu/musinsa.png', title: '최대 8% 적립' },
  { src: '/quickSubMenu/outer.jpg', title: '매일 아울렛 입고' },
  { src: '/quickSubMenu/yellow.jpg', title: '유즈드 수수료 인하' },
];

export default function Main() {
  const [tabs, setTabs] = useState(mockTabs);

  const chagneActive = (tab: Tab) => {
    const _tabs = tabs.map((item) => ({
      ...item,
      active: item.title === tab.title,
    }));
    setTabs(_tabs);
  };

  return (
    <div>
      {/*탭 영역*/}
      <div className={styles.appTabWrapper}>
        {tabs.map((tab, idx) => (
          <div
            className={`${styles.appTab} ${tab.active ? styles.active : styles.normal}`}
            key={idx}
            onClick={() => chagneActive(tab)}
          >
            <span>{tab.title}</span>
          </div>
        ))}
      </div>

      {/*히어로영역*/}
      <div className={styles.heroWrapper}>
        <HeroCarousel imageCardList={heroItems} />
      </div>

      {/*퀵메뉴 메인*/}
      <div className={styles.quickMenuWrapper}>
        {quickmenuItems.map((item, idx) => (
          <QuickMenuCard key={idx} {...item} />
        ))}
      </div>

      {/*퀵메뉴 서브*/}
      <div className={styles.quickSubMenuWrapper}>
        {quickSubMenuItems.map((item, idx) => (
          <QuickMenuCard key={idx} {...item} type="sub" />
        ))}
      </div>
    </div>
  );
}
