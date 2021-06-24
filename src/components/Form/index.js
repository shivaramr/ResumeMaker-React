import React, { useContext } from "react";
import Step1 from "./subcomponents/step1/Step1";
import Step2 from "./subcomponents/step2/Step2";
import Step3 from "./subcomponents/step3/Step3";
import Step4 from "./subcomponents/step4/Step4";
import clipImg from "./subcomponents/step1/clipboard.png";
import bookImg from "./subcomponents/step2/book.png";
import userImg from "./subcomponents/step3/User.png";
import managerImg from "./subcomponents/step4/manager.png";
import { resumeContext } from "../../helper/context";
import style from "./style.module.css";
import Step5 from "./subcomponents/step5/Step5";
import homeImg from "./subcomponents/step5/house.png";

function Form() {
  const { step } = useContext(resumeContext);
  let renderComp = null;

  switch (step) {
    case 1:
      return (renderComp = (
        <div className={style.form}>
          <Step1 />
          <img src={clipImg} alt="" class={style.img} />
        </div>
      ));

    case 2:
      return (renderComp = (
        <div className={style.form}>
          <Step2 />
          <img src={bookImg} alt="" class={style.img} />
        </div>
      ));
    case 3:
      return (renderComp = (
        <div className={style.form}>
          <Step3 />
          <img src={userImg} alt="" class={style.img} />
        </div>
      ));
    case 4:
      return (renderComp = (
        <div className={style.form}>
          <Step4 />
          <img src={managerImg} alt="" class={style.img} />
        </div>
      ));
    case 5:
      return (renderComp = (
        <div className={style.formLast}>
          <Step5 />
          <img src={homeImg} alt="" class={style.img} />
        </div>
      ));
    default:
      renderComp = null;
  }

  return renderComp;
}

export default Form;
