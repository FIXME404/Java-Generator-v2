import React, { Component, ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={styles['section']}>
          <div className={styles['section__content']}>
            <h1>OOPS!</h1>
            <h2>Something went wrong.</h2>
            <p>Sorry, an error has occurred. Please try again.</p>
            <i className='fa-solid fa-code'></i>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
