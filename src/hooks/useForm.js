import { useState } from 'react';

const useForm = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [name]: value };
    });
  };
  return { formValues, handleChange };
};
export default useForm;
