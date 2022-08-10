import React from "react"
import * as style from "../styles/nav.module.css"

export default function Nav() {
  return (
    <nav className={style.navBar}>
      <span className={style.logoContainer}>
        <img src="/Logo.svg" alt="Logo" id={style.logo} />
        <h2 className={style.logoTitle}>AcceleratorApp</h2>
      </span>
      <img src="/menu.svg" alt="menu" id={style.menu} />
      <ul className={style.menuItems}>
        <li className={style.Item}>Community</li>
        <li className={style.Item}>Modules</li>
        <li className={style.Item}>Company</li>
        <li className={style.Item}>Pricing</li>
        <li className={`${style.Item} ${style.signin}`}>Sign In</li>
        <li className={style.request}>Request a Demo</li>
      </ul>
    </nav>
  )
}
