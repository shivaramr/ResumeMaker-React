import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../../../helper/constant";
import { resumeContext } from "../../../../helper/context";
import style from "./style.module.css";

function Step1() {
  const { setStep, data } = useContext(resumeContext);

  var initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    email: Yup.string()
      .email("Please type a valid email address")
      .required("* Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Please type a valid mobile number")
      .required("* Required"),
    address: Yup.string(),
  });

  const onSubmit = (values) => {
    setStep(2);
    data.heading = values;
  };

  return (
    <Formik
      initialValues={data.heading || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        <h3>Please fill in your data here</h3>

        <label htmlFor="fullName">Full Name</label>
        <Field
          name="fullName"
          placeholder="Frank Austin"
          className={style.textField}
        />
        <ErrorMessage name="fullName">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          placeholder="frankAustin@rocketmail.com"
          className={style.textField}
        />
        <ErrorMessage name="email">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="phoneNumber">Phone</label>
        <Field
          name="phoneNumber"
          placeholder="+91 9999999999"
          className={style.textField}
        />
        <ErrorMessage name="phoneNumber">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="address">Address</label>
        <Field
          name="address"
          placeholder="You know this..."
          className={style.textField}
        />
        <ErrorMessage name="address">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <div className={style.buttons}>
          <button type="submit" className={style.button}>
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Step1;
