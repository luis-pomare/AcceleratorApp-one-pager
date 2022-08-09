import React from "react"
import Nav from "../components/nav"
import * as style from "../styles/index.module.css"
import Header from "./header"

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Nav />
      <Header />
    </div>
  )
}
