import React from "react"
import Cookies from "../components/Cookies"
import * as style from "../styles/header.module.css"

export default function Header() {
  return (
    <header>
      <h2 className={style.titleOne}>Join in and connect</h2>
      <h1 className={style.titleTwo}>To faster your innovation potential</h1>
      <p className={style.paragraph}>
        AcceleratorApp Innovation Community — Tools and community to facilitate
        innovation between all members of our community
      </p>
      <button type="button" className={style.headerButton}>
        Schedule a Demo
      </button>
      <img src="/Video.svg" alt="video logo" />
      <Cookies />
    </header>
  )
}
