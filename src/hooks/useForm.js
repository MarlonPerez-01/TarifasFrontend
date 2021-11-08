import { useState, useEffect } from 'react';

const useForm = (initial, callback, validate) => {
  const [state, setState] = useState(initial);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(state));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const limpiar = () => {
    setState({ ...initial });
  };

  return {
    handleChange,
    handleSubmit,
    state,
    errors,
    limpiar,
  };
};

export default useForm;
