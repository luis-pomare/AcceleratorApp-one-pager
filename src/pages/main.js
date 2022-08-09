import React from "react"
import * as style from "../styles/main.module.css"

export default function Main() {
  return (
    <main className={style.main}>
      <span className={style.logos}>
        <div className={style.logo}>
          <img src="/graphic.svg" alt="graphic" />
        </div>
        <div className={style.logo}>
          <img src="/startup.svg" alt="startup" />
        </div>
        <div className={style.logo}>
          <img src="/window.svg" alt="window" />
        </div>
        <div className={style.logo}>
          <img src="/paper.svg" alt="paper" />
        </div>
        <div className={style.logo}>
          <img src="/rise.svg" alt="rise" />
        </div>
      </span>
      <span className={style.comunityHeader}>
        <h2 className={style.title}>Community</h2>
        <h3 className={style.subtitle}>Lorem ipsum dolor sit amet</h3>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </span>
      <span className={style.cards}></span>
    </main>
  )
}
