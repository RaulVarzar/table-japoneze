import FileInput from '../FileInput';
import { FadeIn } from '../../utils/animations';
import { useState } from 'react';
import Form from '../Form';
import { noEmptyValues } from '../../utils/form-validation';

export default function AddCar() {
  const [forms, setForms] = useState({
    carForm: null,
    contactForm: null,
    photo: null,
  });
  const [activeForm, setActiveForm] = useState(1);

  const carForm = [
    {
      label: 'brand',
      type: 'select',
      options: ['honda', 'toyota', 'mazda', 'subaru', 'mitsubishi', 'suzuki'],
    },
    { label: 'model', type: 'text' },
    { label: 'year', type: 'number' },
    { label: 'power', type: 'number' },
    { label: 'cc', type: 'number' },
  ];

  const contactForm = [
    { label: 'nume', type: 'text' },
    { label: 'email', type: 'email' },
    { label: 'social', type: 'text' },
  ];

  function handleSubmitForm(formValues, name) {
    // submit received values from the Form component into the forms object
    setForms((prevValues) => ({
      ...prevValues,
      [name]: formValues,
    }));
    // jump to the next form
    setActiveForm(activeForm + 1);
  }

  function handlePhoto(photo) {
    setForms((prevValues) => ({
      ...prevValues,
      photo: photo,
    }));
  }

  function submitAll() {
    if (noEmptyValues(forms)) {
      console.log('Details submitted...', forms);
    }
  }

  return (
    <FadeIn
      delay={0.3}
      duration={0.2}
      className="grid w-full gap-8 pt-4 mx-auto md:p-6 lg:p-12"
    >
      <h3 className="mx-auto font-bold leading-tight text-center lg:text-2xl lg:px-8">
        Completează formularul pentru a-ți adăuga mașina în galerie.
      </h3>

      <div
        tabIndex={0}
        className={
          'collapse bg-neutral ' +
          (activeForm === 1 ? ' bg-opacity-60' : ' bg-opacity-40')
        }
      >
        <input
          type="checkbox"
          onClick={() => setActiveForm(1)}
          checked={activeForm === 1}
        />
        <div className="text-xl font-bold text-center uppercase collapse-title">
          Detalii despre mașină
          {forms.carForm ? (
            <i className="absolute right-4 fa-solid fa-circle-check text-accent"></i>
          ) : (
            <i className="absolute right-4 fa-regular fa-circle opacity-40"></i>
          )}
        </div>
        <div className="collapse-content">
          <Form
            formFields={carForm}
            onSubmit={(event) => handleSubmitForm(event, 'carForm')}
          />
        </div>
      </div>

      <div
        tabIndex={0}
        className={
          'collapse bg-neutral ' +
          (activeForm === 2 ? ' bg-opacity-60' : ' bg-opacity-40')
        }
      >
        <input
          type="checkbox"
          onClick={() => setActiveForm(2)}
          checked={activeForm === 2}
        />
        <div className="text-xl font-bold text-center uppercase collapse-title">
          Date de contact
          {forms.contactForm ? (
            <i className="absolute right-4 fa-solid fa-circle-check text-accent"></i>
          ) : (
            <i className="absolute right-4 fa-regular fa-circle opacity-40"></i>
          )}
        </div>
        <div className="collapse-content">
          <Form
            formFields={contactForm}
            onSubmit={(event) => handleSubmitForm(event, 'contactForm')}
          />
        </div>
      </div>

      <FileInput uploadFile={handlePhoto} />

      <button
        className="mx-auto uppercase btn btn-lg w-fit btn-accent btn-outline"
        onClick={submitAll}
      >
        TRIMITE
      </button>
    </FadeIn>
  );
}
