import { useFormik } from 'formik';

const initialState = {
  nombre: '',
  apellido: '',
  email: ''
};

function App() {
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: values => console.log('values: ', values)
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

      <label>Apellido</label>
      <input
        name='apellido'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.apellido}
      />

      <label>Correo</label>
      <input
        name='email'
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
