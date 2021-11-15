import { useField } from 'formik';

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <select {...field} {...props} />
      {(meta.touched && meta.error) && <div>{meta.error}</div>}
    </div>
  );
};

export default Select;