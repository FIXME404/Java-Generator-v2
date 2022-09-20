import Navbar from '../../components/UI/Navbar';
import styles from './ContactMeForm.module.scss';
import Card from '../../components/UI/Card';

function ContactMeForm() {
  return (
    <section className={styles['contact-me-form']}>
      <Navbar links={[{ link: '#input', name: 'Start' }]} />
      <Card>
        <div className={styles['contact-me-form__content']}>
          <h1>CONTACT ME</h1>
        </div>
      </Card>
    </section>
  );
}

export default ContactMeForm;
