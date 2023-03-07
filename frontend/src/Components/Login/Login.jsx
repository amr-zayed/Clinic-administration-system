import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img src="./Group 1.svg" alt="logo" />
          <h1 className={styles.title}>Healthiner</h1>
        </div>

        <div className={styles['login-form']}>
          <LoginForm />
        </div>
      </div>

    </div>
  );
}
