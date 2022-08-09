import React from "react"
import * as style from "../styles/nav.module.css"

export default function Nav() {
  return (
    <nav className={style.navBar}>
      <img src="/Logo.svg" alt="Logo" id={style.logo} />
      <img src="/menu.svg" alt="menu" id={style.menu} />
    </nav>
  )
}
