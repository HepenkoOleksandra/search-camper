import css from './SearchBox.module.css'
import { GrLocation } from "react-icons/gr";
import { ErrorMessage, Field, Form, Formik } from "formik"


const initialValues = {
//   name: "",
//   number: "", 
};

// const ContactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, "The name must be at least 3 characters!")
//     .max(50, "The name must not exceed 50 characters!")
//     .required("Contact name is required!"),
//   number: Yup.string()
//     .min(7, "The number must have at least 7 characters!")
//     .max(20, "The number must not exceed 20 characters!")
//     .required("Contact number is required!"),
// });

const SearchBox = () => {
    // const handleSubmit = (values, actions) => {
	// 	console.log(values);
	// 	actions.resetForm();
	// };

    // validationSchema={ContactSchema}
    // onSubmit={handleSubmit}

  return (
      <Formik initialValues={initialValues}  >
        <Form className={css.form}>
          <label className={css.label}>
                  <span className={css.span}>Location</span>
                  <GrLocation/>
                  <Field type="text" name="location" placeholder={`Kyiv, Ukraine`} className={css.field} />
            <ErrorMessage component="p" name="location" className={css.error} />
              </label>
             
        <div id="checkbox-group">Filters</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>

            <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            {/* <div>Picked: {values.picked}</div> */}
          </div>

          <button type="submit" className={css.button}>Search</button>
			</Form>
      </Formik>
  )
}

export default SearchBox