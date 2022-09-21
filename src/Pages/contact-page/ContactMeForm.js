import { useState } from 'react';
import Navbar from '../../components/UI/Navbar';
import styles from './ContactMeForm.module.scss';
import Card from '../../components/UI/Card';
import TextInput from '../../components/inputs/TextInput';
// import TextArea from '../../components/inputs/TextArea';
// import Button from '../../components/Buttons/Button';

function ContactMeForm() {
  const [inputText, setInputText] = useState('');

  return (
    <section className={styles['contact-me-form']}>
      <Navbar links={[{ link: '#input', name: 'Start' }]} />
      <Card>
        <div className={styles['contact-me-form__content']}>
          <TextInput name='name' label='Name' placeholder='Enter your name' />
          <TextInput name='email' label='Email' placeholder='Enter your email' />
          <TextInput name='subject' label='Subject' placeholder='Enter the subject' />
          <TextInput name='message' label='Message' placeholder='Enter your message' />
        </div>
      </Card>
    </section>
  );
}

export default ContactMeForm;
