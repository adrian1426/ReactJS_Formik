import { useField } from 'formik';

const TextInput = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps);

  return (
    <div>
      <label>{label}</label>
      <input {...field} />
      {(meta.touched && meta.error) && <div>{meta.error}</div>}
    </div>
  );
};

export default TextInput;