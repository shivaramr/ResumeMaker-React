import React from "react";
import { Steps } from "antd";
import "antd/dist/antd.css";
import style from "./style.module.css";

const { Step } = Steps;

function StepProgress(props) {
  const { current, stepCount, stepNotes } = props;
  let theSteps = [];

  for (let i = 0; i < stepCount; i++) {
    theSteps.push(
      <Step title={`Step ${i + 1}`} description={stepNotes && stepNotes[i]} />
    );
  }

  return (
    <Steps className={style.progBar} current={current - 1}>
      {theSteps}
    </Steps>
  );
}

export default StepProgress;
