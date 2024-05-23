import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const QueryValidationSchema = Yup.object().shape({
  query: Yup.string().required("Write your query first!"),
});

const MoviesSearchBar = ({ onSubmit }) => {
  const submitQuery = (values, actions) => {
    onSubmit(values.query);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={submitQuery}
        validationSchema={QueryValidationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="query" />
            <ErrorMessage name="query" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Search movies
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoviesSearchBar;
