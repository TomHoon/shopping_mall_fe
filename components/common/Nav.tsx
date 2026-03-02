import styles from './Nav.module.css';

export default function Nav() {
  // Nav 왼쪽 데이터
  const mockWrapperLeft = [
    {
      id: 1,
      content: (
        <div className={styles.commonHeightCenter}>
          <i
            className="bx bx-list-ul"
            style={{ fontSize: '28px', color: '#FFFFFFCC' }}
          />
        </div>
      ),
      onclick: () => {},
      title: '',
    },
    {
      id: 2,
      content: (
        <>
          <div className={styles.commonNavMenus}>
            <a href="">MUSINSA</a>
            <a href="">BEAUTY</a>
            <a href="">PLAYER</a>
            <a href="">OUTLET</a>
            <a href="">BOUTIQUE</a>
            <a href="">KICKS</a>
            <a href="">KIDS</a>
            <a href="">USED</a>
          </div>
        </>
      ),
      onclick: () => {},
      title: '',
    },
    {
      id: 3,
      content: (
        <>
          <div>
            <a href="">
              <span>(S)</span>
              SNAP
            </a>
          </div>
        </>
      ),
      onclick: () => {},
      title: '',
    },
  ];

  // Nav 오른쪽 데이터
  const mockWrapperRight = [
    {
      id: 1,
      content: (
        <div>
          <a href="">오프라인 스토어</a>
        </div>
      ),
      onclick: () => {},
      title: '',
    },
    {
      id: 2,
      content: (
        <>
          <div className={styles.commonNavMyMenus}>
            <a href="">
              <div className={styles.commonHeightCenter}>
                <i
                  className="bx bx-search"
                  style={{ fontSize: '16px', color: '#FFFFFFCC' }}
                />
                검색
              </div>
            </a>

            <a href="">
              <div className={styles.commonHeightCenter}>
                <i
                  className="bx bx-heart"
                  style={{ fontSize: '16px', color: '#FFFFFFCC' }}
                />
                좋아요
              </div>
            </a>

            <a href="">
              <div className={styles.commonHeightCenter}>
                <i
                  className="bx bx-user"
                  style={{ fontSize: '16px', color: '#FFFFFFCC' }}
                />
                마이
              </div>
            </a>

            <a href="">
              <div className={styles.commonHeightCenter}>
                <i
                  className="bx bx-shopping-bag"
                  style={{ fontSize: '16px', color: '#FFFFFFCC' }}
                />
                장바구니
                <span className={styles.cartNumber}>1</span>
              </div>
            </a>
          </div>
        </>
      ),
      onclick: () => {},
      title: '',
    },
    {
      id: 3,
      content: (
        <div className={styles.login}>
          <a href="">로그아웃</a>
        </div>
      ),
      onclick: () => {},
      title: '',
    },
  ];

  return (
    <>
      <div className={styles.commonLayoutGnb}>
        <div className={styles.commonGnbContainer}>
          <div className={styles.commonWrapperLeft}>
            {mockWrapperLeft.map((item) => item.content)}
          </div>

          <div className={styles.commonWrapperRight}>
            {mockWrapperRight.map((item) => item.content)}
          </div>
        </div>
      </div>
    </>
  );
}
