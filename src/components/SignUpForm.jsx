import Input from './Input';
import { useState } from 'react';
import {
  isEmail,
  isPassword,
  includesCapital,
  includesLowercase,
  minLength,
} from '../utils/form-validation';
import { Form } from 'react-router-dom';

function isValidForm(obj) {
  return Object.values(obj).every((item) => item);
}

export default function SignUpForm() {
  const [validInputs, setValidInputs] = useState({
    username: false,
    email: false,
    password: false,
  });

  const [enteredValues, setEnteredValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  function changeValidInput(inputId, value) {
    setValidInputs((prevValidInputs) => ({
      ...prevValidInputs,
      [inputId]: value,
    }));
  }

  function handleInputChange(inputId, event) {
    setEnteredValues((prevEnteredValues) => ({
      ...prevEnteredValues,
      [inputId]: event.target.value,
    }));
    if (inputId === 'email') {
      changeValidInput('email', isEmail(event.target.value));
    } else if (inputId === 'password') {
      changeValidInput('password', isPassword(event.target.value, 8));
    } else if (inputId === 'username') {
      changeValidInput('username', minLength(event.target.value, 4));
    }
  }

  return (
    <Form
      action="/authentication?mode=signup"
      method="post"
      className="flex flex-col items-center justify-between max-w-sm gap-1 px-8 py-6 mx-auto"
    >
      <div className="flex flex-row items-center w-full">
        <Input
          name="username"
          id="username"
          value={enteredValues.username}
          onChange={(event) => handleInputChange('username', event)}
          label="Numele tău"
          valid={validInputs.username}
          type="text"
        />
      </div>

      <div className="flex flex-row items-center w-full">
        <Input
          name="email"
          value={enteredValues.email}
          onChange={(event) => handleInputChange('email', event)}
          label="Email"
          id="sign-up-email"
          valid={validInputs.email}
          type="email"
        />
      </div>

      <div className="flex flex-row w-full items-cente">
        <Input
          name="password"
          id="password"
          value={enteredValues.password}
          onBlur={(event) => handleInputChange('password', event)}
          onChange={(event) => handleInputChange('password', event)}
          label="Parolă"
          valid={validInputs.password}
          type="password"
        />
      </div>

      <ul className="grid gap-2 mx-auto mt-2 text-sm text-left w-fit ">
        <li
          className={
            includesLowercase(enteredValues.password)
              ? 'text-emerald-700'
              : 'text-stone-500'
          }
        >
          <i
            className={
              includesLowercase(enteredValues.password)
                ? 'fa-regular fa-circle-dot'
                : 'fa-regular fa-circle'
            }
          ></i>
          <span className="ml-2 lg:text-lg">Minim 1 literă mică</span>
        </li>
        <li
          className={
            includesCapital(enteredValues.password)
              ? 'text-emerald-700'
              : 'text-stone-500'
          }
        >
          <i
            className={
              includesCapital(enteredValues.password)
                ? 'fa-regular fa-circle-dot'
                : 'fa-regular fa-circle'
            }
          ></i>
          <span className="ml-2 lg:text-lg">Minim 1 literă mare</span>
        </li>
        <li
          className={
            minLength(enteredValues.password, 8)
              ? 'text-emerald-700'
              : 'text-stone-500'
          }
        >
          <i
            className={
              minLength(enteredValues.password, 8)
                ? 'fa-regular fa-circle-dot'
                : 'fa-regular fa-circle'
            }
          ></i>
          <span className="ml-2 lg:text-lg">Cel puțin 8 caractere</span>
        </li>
      </ul>

      <button
        className={
          'mx-auto mt-6 uppercase btn btn-outline btn-md w-fit transition duration-300' +
          (isValidForm(validInputs) ? ' btn-accent' : ' btn-disabled')
        }
      >
        Creează cont
        <i className="text-lg fa-solid fa-caret-right"></i>
      </button>
    </Form>
  );
}
