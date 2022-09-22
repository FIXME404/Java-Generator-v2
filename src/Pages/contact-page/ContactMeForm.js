import { useCallback, useState } from 'react';
import Navbar from '../../components/UI/Navbar';
import styles from './ContactMeForm.module.scss';
import Card from '../../components/UI/Card';
import TextInput from '../../components/inputs/TextInput';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

const initialState = { name: '', email: '', subject: '', message: '' };

const formReducer = (state, action) => {
  if (action.type === 'NAME') {
    return { ...state, name: action.value };
  } else if (action.type === 'EMAIL') {
    return { ...state, email: action.value };
  } else if (action.type === 'SUBJECT') {
    return { ...state, subject: action.value };
  } else if (action.type === 'MESSAGE') {
    return { ...state, message: action.value };
  } else {
    return initialState;
  }
};

function ContactMeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchActions] = useReducer(formReducer, initialState);

  const handleTextChange = (state, action) => dispatchActions({ type: action, value: state });

  const handleOnBlur = event => dispatchActions({ type: 'MESSAGE', value: event.target.value });

  const navigate = useNavigate();

  const postContactForm = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(process.env.REACT_APP_FIREBASE_URL, {
      method: 'POST',
      body: JSON.stringify(formState)
    });

    const data = response.json();

    setIsLoading(false);
  }, [formState, navigate]);

  const handleSubmitting = event => {
    event.preventDefault();
    postContactForm();
    navigate('/success');
  };

  const navbarLinks = [
    { link: '/', name: 'Home' },
    { link: '/report-bug', name: 'Report Bug' }
  ];

  return (
    <section className={styles['contact-section']}>
      <Navbar links={navbarLinks} />
      <h1>Contact Me</h1>
      <Card>
        <form className={styles['contact-section__content']}>
          <TextInput name='NAME' label='Name' placeholder='Enter your name' updateMethod={handleTextChange} />
          <TextInput name='EMAIL' label='Email' placeholder='Enter your email' updateMethod={handleTextChange} />
          <TextInput name='SUBJECT' label='Subject' placeholder='Enter the subject' updateMethod={handleTextChange} />
          <textarea name='MESSAGE' placeholder='Enter your message' onBlur={handleOnBlur} required />
          <button type='submit' onClick={handleSubmitting}>
            SUBMIT
          </button>
        </form>
      </Card>
    </section>
  );
}

export default ContactMeForm;
