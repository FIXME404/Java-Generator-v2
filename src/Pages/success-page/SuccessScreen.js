import styles from './SuccessScreen.module.scss';
import Navbar from '../../components/UI/Navbar';
import Card from '../../components/UI/Card';

function SuccessScreen(props) {
  const navbarLinks = [
    { link: '/', name: 'Home' },
    { link: '/report-bug', name: 'Report Bug' }
  ];

  return (
    <section className={styles['success-section']}>
      <Navbar links={navbarLinks} />
      <Card>
        <div className={styles['success-section__content']}>
          <h1>
            Success! <i class='fa-solid fa-check'></i>
          </h1>
          <h2>Your message has been sent successfully.</h2>
          <p>Thank you for your feedback!</p>
          <a class='fa-brands fa-github-alt' href='https://github.com/FIXME404'></a>
          <a class='fa-brands fa-linkedin' href='https://github.com/FIXME404'></a>
        </div>
      </Card>
    </section>
  );
}

export default SuccessScreen;
