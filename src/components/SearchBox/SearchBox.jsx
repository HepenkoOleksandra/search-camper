import css from './SearchBox.module.css'
import { GrLocation } from "react-icons/gr";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


const initialValues = {
      location: '',
      airConditioner: false,
      transmission: false,
      kitchen: false,
      TV: false,
      shower: false,
      form: '',
};

const ContactSchema = Yup.object().shape({
  location: Yup.string(),
    // .min(3, "The name must be at least 3 characters!")
    // .max(50, "The name must not exceed 50 characters!")
    // .required("Contact name is required!"),
  airConditioner: Yup.string(),
  transmission: Yup.string(),
  kitchen: Yup.string(),
  TV: Yup.string(),
  shower: Yup.string(),
  form: Yup.string(), 
});

const SearchBox = ({setFieldValue, value}) => {
    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
        <Form className={css.form}>
          <label className={css.label}>
                  <span className={css.span}>Location</span>
                  <GrLocation/>
                  <Field type="text" name="location" placeholder={`Kyiv, Ukraine`} className={css.field} />
            <ErrorMessage component="p" name="location" className={css.error} />
        </label>
                     
        <div>
        <button type="button" onClick={() => setFieldValue('airConditioner', !values.checkbox1)}>
          AC
        </button>
        <button type="button" onClick={() => setFieldValue('transmission', !values.checkbox2)}>
          Automatic
        </button>
        <button type="button" onClick={() => setFieldValue('kitchen', !values.checkbox3)}>
          Kitchen
        </button>
        <button type="button" onClick={() => setFieldValue('TV', !values.checkbox4)}>
          TV
        </button>
        <button type="button" onClick={() => setFieldValue('shower' && '', !values.checkbox5)}>
          Shower/WC
        </button>
      </div>

            <div>
        <button type="button" onClick={() => setFieldValue('form', 'option1')}>
          Van
        </button>
        <button type="button" onClick={() => setFieldValue('form', 'option2')}>
          Fully Integrated
        </button>
        <button type="button" onClick={() => setFieldValue('form', 'option3')}>
          Alcove
        </button>
      </div>

          <button type="submit" className={css.button}>Search</button>
			</Form>
      </Formik>
  )
}

export default SearchBox