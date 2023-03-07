import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { Button, Input } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.css';
import useLoginForm from './useLoginForm';

export default function LoginForm() {
  const [loader, setLoader] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  const {
    // setValues,
    handleChange, values, handleSubmit, error,
  } = useLoginForm(setLoader);
  const [visibility, setVisibility] = useState({
    password: '',
    showPassword: false,
  });
  const responseMessage = (response) => {
    console.log(response);
    // Then here send the google token to the backend and get a new token to login
  };
  const errorMessage = (errors) => {
    console.log(errors);
  };
  const handleClickShowPassword = () => {
    setVisibility({ ...visibility, showPassword: !visibility.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={styles['form-conatiner']}>
      <p className={styles.title}>Sign in</p>
      <div className={styles.fields}>
        <FormControl className={styles['text-field']} sx={{ '& label': { color: 'primary.black' } }} variant="standard">
          <InputLabel color={error.email && 'secondary'} htmlFor="login-email">Username or E-mail</InputLabel>
          <Input
            className={styles['text-field']}
            id="login-email"
            label="Email"
            name="email"
            value={values.email || null}
            onChange={handleChange}
            type="email"
            color={error.email ? 'secondary' : 'primary'}
          />
        </FormControl>
      </div>
      {(error.email || error.password) && (
      <p className={styles.error}>
        {error.email}
      </p>
      )}
      <div className={styles.fields}>
        <FormControl sx={{ '& label': { color: 'primary.black' } }} variant="standard">
          <InputLabel color={error.password && 'secondary'} htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            className={styles['text-field']}
            id="login-password"
            type={visibility.showPassword ? 'text' : 'password'}
            value={values.password || null}
            name="password"
            onChange={handleChange}
            color={error.password && 'secondary'}
            endAdornment={(
              <InputAdornment
                position="end"
              >
                <IconButton
                  sx={{ color: 'primary.black' }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  { visibility.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={70}
            label="Password"
          />
        </FormControl>
      </div>
      {(error.password) && (
      <p className={styles.error}>
        {error.password}
      </p>
      )}
      <div className={styles['forgot-password-continer']}>
        <a href="/forgot-password " className={styles['forgot-password']}>Forget password?</a>
        <div>
          <Button disabled={loader} type="submit" variant="contained" className={styles['login-button']}>
            {loader ? 'Please wait...' : 'Sign in'}
          </Button>
        </div>
      </div>
    </form>

  );
}
