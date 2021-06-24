import React, { useState } from "react";
import Form from "../Form";
import { resumeContext } from "../../helper/context";
import { stepNotes } from "../../helper/constant";
import StepProgress from "../StepProgressBar/Stepper";
import style from "./style.module.css";

function Home() {
  const { Provider } = resumeContext;
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const contextValues = { step, setStep, data, setData };
  
  return (
    <Provider value={contextValues}>
      <div className={style.home}>
        <StepProgress current={step} stepCount={5} stepNotes={stepNotes} />
        <Form />
      </div>
    </Provider>
  );
}

export default Home;
