import React from "react"
import Nav from "../components/nav"
import * as style from "../styles/index.module.css"
import Header from "./header"
import Main from "./main"

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Nav />
      <Header />
      <Main />
    </div>
  )
}
