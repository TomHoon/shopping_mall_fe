import styles from '@/views/home/HomeView.module.css';
import Nav from '@/components/common/Nav';
import Header from '@/components/common/Header';
import Aside from '@/components/common/Aside';
import Footer from '@/components/common/Footer';
import Main from '@/views/home/Main';

export default function HomeView() {
  return (
    <div>
      <div className={styles.commonLayoutContainer}>
        <Nav />
        <Header />
        <Aside />
        <Footer />
        <Main />
      </div>
    </div>
  );
}
