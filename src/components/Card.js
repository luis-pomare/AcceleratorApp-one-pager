import React from "react"
import * as style from "../styles/card.module.css"

export default function Card(props) {
  const { source, title } = props
  return (
    <section className={style.card}>
      <span className={style.cardHeader}>
        <span className={style.blue}>
          <img src={source} alt="card logo" />
        </span>
        <h2 className={style.title}>{title}</h2>
      </span>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
        <br />
        <br /> Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </p>
      <div className={style.line} />
      <h3 className={style.popular}>Popular Features</h3>
      <span className={style.feature}>
        <img src="/check.svg" alt="card logo" />
        <p>Lorem ipsum dolor sit </p>
      </span>
      <span className={style.feature}>
        <img src="/check.svg" alt="card logo" />
        <p>Lorem ipsum dolor sit </p>
      </span>
      <span className={style.feature}>
        <img src="/check.svg" alt="card logo" />
        <p>Lorem ipsum dolor sit </p>
      </span>
      <button className={style.cardButton}>Get Stared</button>
    </section>
  )
}
