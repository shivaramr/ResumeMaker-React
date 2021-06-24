import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resumeContext } from "../../../../helper/context";
import style from "./style.module.css";

function Step2() {
  const { setStep, data } = useContext(resumeContext);

  var initialValues = {
    resumeObjective: "",
    domainKnowledge: "",
    languages: "",
    hobbies: "",
    graduation: "",
    gNote: "",
    HSC: "",
    hscNote: "",
  };

  const validationSchema = Yup.object({
    resumeObjective: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    domainKnowledge: Yup.string().required("* Required"),
    languages: Yup.string(),
    hobbies: Yup.string(),
    graduation: Yup.string()
      .min(3, "Your college has a bigger name")
      .required("* Required"),
    gNote: Yup.string(),
    HSC: Yup.string().required("* Required"),
    hscNote: Yup.string(),
  });

  const onSubmit = (values) => {
    setStep(3);
    data.pInfo = values;
  };

  return (
    <Formik
      initialValues={data.pInfo || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        <h3>Good Going!!!</h3>

        <label htmlFor="resumeObjective">Resume Objective</label>
        <Field
          name="resumeObjective"
          placeholder="A motivated enthusiast looking for a job!"
          className={style.textField}
        />
        <ErrorMessage name="resumeObjective">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="domainKnowledge">Domain Knowledge</label>
        <Field
          name="domainKnowledge"
          placeholder="C,C++,C# etc..."
          className={style.textField}
        />
        <ErrorMessage name="domainKnowledge">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="languages">Languages</label>
        <Field
          name="languages"
          placeholder="English,Hindi,Malayalam,Tamil"
          className={style.textField}
        />
        <ErrorMessage name="languages">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>

        <label htmlFor="graduation">Graduated from</label>
        <Field
          name="graduation"
          placeholder="Govt. Engineering College, 2016-2020"
          className={style.textField}
        />
        <ErrorMessage name="graduation">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="gNote">Graduation Note</label>
        <Field
          name="gNote"
          placeholder="B.tech in CSE 2016-20 and achievements..."
          className={style.textField}
        />
        <ErrorMessage name="gNote">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="HSC">High School Education from</label>
        <Field
          name="HSC"
          placeholder="Kendriya Vidyalaya No.2, Naval Base"
          className={style.textField}
        />
        <ErrorMessage name="HSC">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="hscNote">High School Experience</label>
        <Field
          name="hscNote"
          placeholder="Your achievements at school!"
          className={style.textField}
        />
        <ErrorMessage name="hscNote">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <br></br>

        <label htmlFor="hobbies">Hobbies</label>
        <Field
          name="hobbies"
          placeholder="You know this..."
          className={style.textField}
        />
        <ErrorMessage name="hobbies">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <div className={style.buttons}>
          <button className={style.button} onClick={() => setStep(1)}>
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

export default Step2;
