import { useFormik } from 'formik';

const initialState = {
  nombre: '',
  apellido: '',
  email: ''
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
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: values => console.log('values: ', values),
    validate
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name='nombre'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      {formik.errors.nombre && <div>{formik.errors.nombre}</div>}

      <br />

      <label>Apellido</label>
      <input
        name='apellido'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.apellido}
      />
      {formik.errors.apellido && <div>{formik.errors.apellido}</div>}

      <br />

      <label>Correo</label>
      <input
        name='email'
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <div>{formik.errors.email}</div>}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
