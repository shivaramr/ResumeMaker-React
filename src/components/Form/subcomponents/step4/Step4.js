import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resumeContext } from "../../../../helper/context";
import style from "./style.module.css";

function Step4() {
  const { setStep, data } = useContext(resumeContext);

  var initialValues = {
    ref1: "",
    details1: "",
    ref2: "",
    details2: "",
  };

  const validationSchema = Yup.object({
    ref1: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    details1: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    ref2: Yup.string().min(3, "Must be at least 3 characters"),
    details2: Yup.string().min(3, "Must be at least 3 characters"),
  });

  const onSubmit = (values) => {
    setStep(5);
    data.refer = values;
  };

  return (
    <Formik
      initialValues={data.refer || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        <h3>For a final touch now!</h3>

        <label htmlFor="ref1">Reference 1</label>
        <Field
          name="ref1"
          placeholder="Drake Gonzalez"
          className={style.textField}
        />
        <ErrorMessage name="ref1">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="details1">Contact details</label>
        <Field
          name="details1"
          placeholder="drakeG@rocketmail.com, +91-9999999999"
          className={style.textField}
        />
        <ErrorMessage name="details1">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>
        <br></br>

        <label htmlFor="ref2">Reference 2</label>
        <Field
          name="ref2"
          placeholder="Peter Moury"
          className={style.textField}
        />
        <ErrorMessage name="ref2">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="details2">Contact details</label>
        <Field
          name="details2"
          placeholder="peterMan@rocketmail.com, +91-9999999999"
          className={style.textField}
        />
        <ErrorMessage name="details2">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <div className={style.buttons}>
          <button className={style.button} onClick={() => setStep(3)}>
            Previous
          </button>
          <button type="submit" className={style.button}>
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Step4;
