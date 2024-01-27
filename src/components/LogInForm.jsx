import { Form } from 'react-router-dom';
import Input from './Input';
import { useState } from 'react';

export default function LogInForm() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(inputId, event) {
    setEnteredValues((prevEnteredValues) => ({
      ...prevEnteredValues,
      [inputId]: event.target.value.replace(/\s/g, ''),
    }));
  }

  return (
    <Form
      method="post"
      className="flex flex-col items-center justify-between max-w-sm gap-1 px-8 py-6 mx-auto"
    >
      <Input
        name="email"
        id="email"
        value={enteredValues.email}
        onChange={(event) => handleInputChange('email', event)}
        label="Email"
        type="email"
      />
      <Input
        name="password"
        id="password"
        value={enteredValues.password}
        onChange={(event) => handleInputChange('password', event)}
        label="Parolă"
        type="password"
      />

      <button className="mx-auto mt-6 uppercase rounded-sm btn btn-accent btn-outline btn-md w-fit">
        autentificare
        <i className="fa-solid fa-right-to-bracket"></i>
      </button>
    </Form>
  );
}
