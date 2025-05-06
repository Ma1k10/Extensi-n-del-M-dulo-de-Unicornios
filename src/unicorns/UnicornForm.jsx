import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUnicornContext } from '../context/UnicornContext';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UnicornForm = ({ match }) => {
  const { createUnicorn, editUnicorn } = useUnicornContext();
  const history = useHistory();
  const [unicorn, setUnicorn] = useState({ id: '', nombre: '', edad: '' });
  const isEditMode = match && match.params.id;

  // Manejo del envío del formulario
  const handleSubmit = (values) => {
    if (isEditMode) {
      // Si estamos en modo de edición, editar el unicornio
      editUnicorn(unicorn.id, values);
    } else {
      // Si estamos en modo de creación, agregar el nuevo unicornio
      const newUnicorn = { ...values, id: Date.now() }; // Usar un ID único temporal
      createUnicorn(newUnicorn);
    }
    history.push('/unicornios'); // Redirigir al listado de unicornios
  };

  return (
    <Formik
      initialValues={unicorn}
      validationSchema={Yup.object({
        nombre: Yup.string().required('Requerido'),
        edad: Yup.number().required('Requerido').positive('Edad debe ser mayor que 0'),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Nombre:</label>
          <Field name="nombre" />
          <ErrorMessage name="nombre" component="div" />
        </div>
        <div>
          <label>Edad:</label>
          <Field name="edad" />
          <ErrorMessage name="edad" component="div" />
        </div>
        <button type="submit">{isEditMode ? 'Editar Unicornio' : 'Crear Unicornio'}</button>
      </Form>
    </Formik>
  );
};

export default UnicornForm;
