import { Formik, Form, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';

const initialState = {
  nombre: '',
  apellido: '',
  email: '',
  accept: false,
  lenguaje: '',
  sexo: ''
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

  /////////77
  if (!values.accept) {
    errors.accept = 'requerido';
  }

  if (!values.lenguaje) {
    errors.lenguaje = 'requerido';
  }

  if (!values.sexo) {
    errors.sexo = 'requerido';
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

        <TextInput
          name='apellido'
          label='Apellido'
        />

        <br />

        <TextInput
          name='email'
          type='email'
          label='Correo'
        />

        <Select name='lenguaje' label='tipo de lenguaje'>
          <option value=''>Seleccione el lenguaje</option>
          <option value='vue'>VUE</option>
          <option value='react'>React</option>
          <option value='angular'>Angular</option>
        </Select>

        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>

        <Radio label='Hombre' name='sexo' value='h' />
        <Radio label='Mujer' name='sexo' value='m' />

        <ErrorMessage name='sexo' />

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
