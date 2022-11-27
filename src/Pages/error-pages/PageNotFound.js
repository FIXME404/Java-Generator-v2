import styles from './PageNotFound.module.scss';
import Navbar from '../../components/UI/Navbar';

function PageNotFound() {
  const navbarLinks = [
    { path: '/', name: 'Home' },
    { path: '/report-bug', name: 'Report Bug' }
  ];

  return (
    <section className={styles['section']}>
      <Navbar links={navbarLinks} />
      <div className={styles['section__content']}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <i class='fa-solid fa-code'></i>
      </div>
    </section>
  );
}

export default PageNotFound;
