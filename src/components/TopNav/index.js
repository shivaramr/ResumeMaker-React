import React from "react";
import style from "./style.module.css";

function TopNav() {
  return (
    <div className={style.topNav}>
      ResumeMaker
      <button className={style.button}>Sign Up!</button>
    </div>
  );
}

export default TopNav;
