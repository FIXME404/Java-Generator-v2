import React from 'react';
import styles from './Card.module.scss';

type Children = {
  children: React.ReactNode;
};

function Card(props: Children): JSX.Element {
  return <div className={styles.card}>{props.children}</div>;
}

export default Card;
