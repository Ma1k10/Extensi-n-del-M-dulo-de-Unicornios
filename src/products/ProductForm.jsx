import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  return (
    <Formik
      initialValues={{ nombre: '', precio: '' }}
      validationSchema={Yup.object({
        nombre: Yup.string().required('Requerido'),
        precio: Yup.number().required('Requerido').positive('Precio debe ser mayor que 0'),
      })}
      onSubmit={(values) => {
        setProducts([...products, values]);
        history.push('/productos');
      }}
    >
      <Form>
        <div>
          <label>Nombre:</label>
          <Field name="nombre" />
          <ErrorMessage name="nombre" component="div" />
        </div>
        <div>
          <label>Precio:</label>
          <Field name="precio" />
          <ErrorMessage name="precio" component="div" />
        </div>
        <button type="submit">Crear Producto</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
