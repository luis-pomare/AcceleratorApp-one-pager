import React from "react"
import Nav from "../components/nav"
import * as style from "../styles/index.module.css"
import Footer from "./footer"
import Header from "./header"
import Main from "./main"

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
