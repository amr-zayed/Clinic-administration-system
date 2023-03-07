import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateLogin from './validateLogin';

const useLoginForm = (setLoader) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  // const { login, setAuth } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateLogin(values));
    if (Object.keys(validateLogin(values)).length === 0) {
      // there is no errors
      setLoader(true);
      // signin(values).then((response) => {
      //   if (response.status === 200) {
      //     (async () => {
      //       const resp = await checkActivation(response.data.authorization.token);
      //       if (resp.status === 200) {
      //         // no need for anything login Ok
      //         setAuth({ token: response.data.authorization.token });
      //         login({ token: response.data.authorization.token });
      navigate('/Dportal');
      //         setActivationModal(false);
      //         setVerificationModal(false);
      //       } else if (resp.status === 419) {
      //         setActivationModal(true);
      //       } else if (resp.status === 409) {
      //         setVerificationModal(true);
      //       }
      //     })();
      //   } else if (response.status === 422) {
      //     setError({
      //       ...error,
      //       password: response.data.message,
      //     });
      //   }
      setLoader(false);
      // });
    }
  };
  return {
    handleChange, values, setValues, handleSubmit, error,
  };
};
export default useLoginForm;