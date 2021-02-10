import React from 'react';
import styles from './MemeCard.module.css';

function MemeCard(props) {
  const { name, path } = props;
  return (
    <div className={styles.card} style={{
      position: 'relative',
      maxWidth: 800,
      margin: 'auto'
    }}>
      <h3>{name}</h3>
      <img src={path} alt={name} style={{
        maxHeight: 300,
        objectFit: 'cover'
      }} />
    </div>
  )
}

export default MemeCard;