import React from "react"
import * as style from "../styles/cookies.module.css"

export default function Cookies() {
  return (
    <div className={style.container}>
      <p className={style.paragraph}>
        By using this site on the AcceleratorApp network, you agree with our use
        of cookies.
      </p>
      <span className={style.buttons}>
        <button className={style.buttonOne}>Accept cookies</button>
        <button className={style.buttonTwo}>Want to know more?</button>
      </span>
      <p className={style.paragraph}>Read our Cookie Policy</p>
    </div>
  )
}
