import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import TextInput from './components/TextInput';

const initialState = {
  nombre: '',
  apellido: '',
  email: '',
  accept: false
};

const validate = values => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'el nombre es muy corto';
  }

  if (!values.apellido) {
    errors.apellido = 'requerido';
  } else if (values.apellido.length < 5) {
    errors.apellido = 'el apellido es muy corto';
  }

  if (!values.email) {
    errors.email = 'requerido';
  } else if (values.email.length < 5) {
    errors.email = 'el email es muy corto';
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={initialState}
      validate={validate}
      onSubmit={values => console.log('values: ', values)}
    >
      <Form>
        <TextInput
          name='nombre'
          label='Nombre'
        />

        <br />

        <label>Apellido</label>
        <Field
          type="text"
          name='apellido'
        />
        <ErrorMessage name='apellido' />

        <br />

        <label>Correo</label>
        <Field
          type="email"
          name='email'
        />
        <ErrorMessage name='email' />

        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
