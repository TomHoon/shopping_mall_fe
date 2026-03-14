import styles from '@/components/common/Header.module.css';

export default function Header() {
  return (
    <div className={styles.commonLayoutHeader}>
      <section>
        <div className={styles.appBarContainer}>
          <img src="/appBar.png" alt="" />
          <i
            className="bx bx-bell"
            style={{ color: '#FFFFFF', fontSize: '24px' }}
          />
        </div>
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="팁토우 위시 글레이즈 틴트 단독 발매"
          />
          <i
            className="bx bx-search"
            style={{ fontSize: '19px', color: '#b9aaaacc' }}
          />
        </div>
      </section>
    </div>
  );
}
