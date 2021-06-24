import React, { useContext } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resumeContext } from "../../../../helper/context";
import style from "./style.module.css";

function Step3() {
  const { setStep, data } = useContext(resumeContext);

  const initialValues = {
    noOfExp: "",
    experiences: [],
  };

  const validationSchema = Yup.object().shape({
    noOfExp: Yup.string().required("* Required"),
    experiences: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("* Required"),
        designation: Yup.string().required("* Required"),
        note: Yup.string().required("* Required"),
      })
    ),
  });

  const onChangeNumber = (e, field, values, setValues) => {
    const experiences = [...values.experiences];
    const noOfExp = e.target.value || 0;
    const previousNumb = parseInt(field.value || "0");

    if (previousNumb < noOfExp) {
      for (let i = previousNumb; i < noOfExp; i++) {
        experiences.push({ companyName: "", designation: "", note: "" });
      }
    } else {
      for (let i = previousNumb; i >= noOfExp; i--) {
        experiences.splice(i, 1);
      }
    }
    setValues({ ...values, experiences });

    field.onChange(e);
  };

  const onSubmit = (fields) => {
    setStep(4);
    data.experiences = fields.experiences;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, values, touched, setValues }) => (
        <Form>
          <div className="1">
            <h3>Job History please...</h3>
            <div className={style.formInput}>
              <label>Number of Experiences</label>
              <Field name="noOfExp">
                {({ field }) => (
                  <select
                    {...field}
                    onChange={(e) =>
                      onChangeNumber(e, field, values, setValues)
                    }
                  >
                    <option value=""></option>
                    {[1, 2, 3].map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <ErrorMessage name="noOfExp">
                {(msg) => <div className={style.error}>{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <FieldArray name="experiences">
            {() =>
              values.experiences.map((experience, i) => {
                return (
                  <div key={i} className={style.expRow}>
                    <h5>Experience {i + 1}</h5>

                    <label>Company Name</label>
                    <Field
                      name={`experiences.${i}.companyName`}
                      className={style.textField}
                    />
                    <ErrorMessage name={`experiences.${i}.companyName`}>
                      {(msg) => <div className={style.error}>{msg}</div>}
                    </ErrorMessage>

                    <label>Designation</label>
                    <Field
                      name={`experiences.${i}.designation`}
                      className={style.textField}
                    />
                    <ErrorMessage name={`experiences.${i}.designation`}>
                      {(msg) => <div className={style.error}>{msg}</div>}
                    </ErrorMessage>

                    <label>Note</label>
                    <Field
                      name={`experiences.${i}.note`}
                      className={style.textField}
                    />
                    <ErrorMessage name={`experiences.${i}.note`}>
                      {(msg) => <div className={style.error}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                );
              })
            }
          </FieldArray>
          <div className={style.buttons}>
            <button className={style.button} onClick={() => setStep(2)}>
              Previous
            </button>
            <button type="submit" className={style.button}>
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Step3;
