import { useState } from 'react';
import Navbar from '../../components/UI/Navbar';
import styles from './ContactMeForm.module.scss';
import Card from '../../components/UI/Card';
import TextInput from '../../components/inputs/TextInput';
import { useNavigate } from 'react-router-dom';

function ReportBugPage() {
  const [inputText, setInputText] = useState('');

  const navigate = useNavigate();

  const handleSubmitting = event => {
    event.preventDefault();
    navigate('/success');
  };

  const navbarLinks = [
    { link: '/', name: 'Home' },
    { link: '/report-bug', name: 'Contact Me' }
  ];

  return (
    <section className={styles['contact-section']}>
      <Navbar links={navbarLinks} />
      <h1>Report A Bug</h1>
      <Card>
        <form className={styles['contact-section__content']}>
          <TextInput name='name' label='Name (Optional)' placeholder='Enter your name' />
          <TextInput name='email' label='Email (Optional)' placeholder='Enter your email' />
          <TextInput name='url' label='Url (Optional)' placeholder='Enter the url' />
          <TextInput name='subject' label='Subject' placeholder='Enter the subject' />
          <textarea name='message' placeholder='Enter your message' required />
          <button type='submit' onClick={handleSubmitting}>
            REPORT
          </button>
        </form>
      </Card>
    </section>
  );
}

export default ReportBugPage;
