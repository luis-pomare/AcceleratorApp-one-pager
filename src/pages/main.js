import React from "react"
import Card from "../components/Card"
import * as style from "../styles/main.module.css"

export default function Main() {
  return (
    <main className={style.main}>
      <span className={style.logos}>
        <div className={style.logo}>
          <img className={style.image} src="/graphic.svg" alt="graphic" />
        </div>
        <div className={`${style.logo} ${style.logoOne}`}>
          <img className={style.image} src="/startup.svg" alt="startup" />
        </div>
        <div className={`${style.logo} ${style.logoTwo}`}>
          <img className={style.image} src="/window.svg" alt="window" />
        </div>
        <div className={`${style.logo} ${style.logoOne}`}>
          <img className={style.image} src="/paper.svg" alt="paper" />
        </div>
        <div className={style.logo}>
          <img className={style.image} src="/rise.svg" alt="rise" />
        </div>
      </span>
      <span className={style.comunityHeader}>
        <h2 className={style.title}>Community</h2>
        <h3 className={style.subtitle}>Lorem ipsum dolor sit amet</h3>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </span>
      <span className={style.cards}>
        <Card source="/cardOne.svg" title="Incubator/Accelerator" />
        <Card source="/cardTwo.svg" title="Coporations" />
        <Card source="/cardThree.svg" title="Investor" />
        <Card source="/cardFour.svg" title="Startup" />
        <Card source="/cardFive.svg" title="Open Challenge" />
      </span>
    </main>
  )
}
