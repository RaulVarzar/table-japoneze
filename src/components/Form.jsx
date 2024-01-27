import Input from './Input';
import { useState } from 'react';
import {
  noEmptyValues,
  //   isEmail,
  //   isPassword,
  //   notNegative,
} from '../utils/form-validation';

// function isValidInput(value, type) {
//     if (type === "email"){
//         return isEmail(value)
//     } else if (type === "password"){
//         return isPassword(value, 8)
//     } else if (type === "number") {
//         return notNegative(value)
//     } else {
//         return true
//     }
// }

export default function Form({ formFields, onSubmit }) {
  const [formValues, setFormValues] = useState(
    formFields
      .map((person) => person.label)
      .reduce((key, value) => ({ ...key, [value]: null }), {})
  );

  function handleInputChange(label, event) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [label]: event.target.value,
    }));
  }

  function onSubmitForm(event) {
    event.preventDefault();
    if (noEmptyValues(formValues)) {
      onSubmit(formValues);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => onSubmitForm(event)}
        className="flex flex-col justify-center w-full gap-4 px-3 py-4 mx-auto "
      >
        <div className="flex flex-col w-full gap-2 mx-auto md:flex-row">
          {formFields.map((item) =>
            item.type === 'text' ||
            item.type === 'number' ||
            item.type === 'email' ||
            item.type === 'password' ? (
              <Input
                key={item.label}
                name={item.label}
                value={formValues.label}
                label={item.label}
                type={item.type}
                valid={formValues.label}
                onChange={(event) => handleInputChange(item.label, event)}
                maxW={item.type === 'number' && '100px'}
              />
            ) : (
              item.type === 'select' && (
                <select
                  key={item.label}
                  onChange={(event) => handleInputChange(item.label, event)}
                  name={item.label}
                  className="w-full max-w-xs mx-auto capitalize bg-transparent border-0 border-b-2 border-opacity-30 border-base-content select select-ghost"
                >
                  <option disabled selected>
                    {item.label}
                  </option>
                  {item.options.map((value) => (
                    <option>{value}</option>
                  ))}
                </select>
              )
            )
          )}
        </div>

        <button className="mx-auto uppercase btn btn-accent btn-outline">
          CONFIRM
        </button>
      </form>
    </>
  );
}
