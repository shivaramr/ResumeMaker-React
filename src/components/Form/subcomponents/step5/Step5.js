import React, { useContext } from "react";
import { resumeContext } from "../../../../helper/context";
import pdfMaker from "./pdfMake/pdfMaker";
import style from "./style.module.css";

function Step5() {
  const { setStep, data, setData } = useContext(resumeContext);

  const submit = () => {
    pdfMaker(data);
  }
  
  const clear = () => {
    setData({});
    setStep(1)
  }
  
  return (
    <div className={style.main}>
      <h2>And.....its done!</h2>
      <div className={style.buttons}>
        <button className={style.button} onClick={() => setStep(4)}>
          Previous
        </button>
        <button
          className={style.button1}
          onClick={submit}
        >
          Download
        </button>
        <button
          className={style.button2}
          onClick={clear}
        >
          New!
        </button>
      </div>
    </div>
  );
}

export default Step5;
