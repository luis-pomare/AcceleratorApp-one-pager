import React from "react"
import Cookies from "../components/Cookies"
import * as style from "../styles/header.module.css"

export default function Header() {
  return (
    <header>
      <div className={style.circles}>
        <div className={`${style.circle} ${style.a}`} />
        <div className={`${style.circle} ${style.b}`} />
        <div className={`${style.circle} ${style.c}`} />
        <div className={`${style.circle} ${style.d}`} />
        <div className={`${style.circle} ${style.e}`} />
        <div className={`${style.circle} ${style.f}`} />
        <div className={`${style.circle} ${style.g}`} />
        <div className={`${style.circle} ${style.h}`} />
        <div className={`${style.circle} ${style.i}`} />
        <div className={`${style.circle} ${style.j}`} />
        <div className={`${style.circle} ${style.k}`} />
        <div className={`${style.circle} ${style.l}`} />
        <div className={`${style.circle} ${style.m}`} />
        <div className={`${style.circle} ${style.n}`} />
        <div className={`${style.circle} ${style.o}`} />
      </div>
      <h2 className={style.titleOne}>Join in and connect</h2>
      <h1 className={style.titleTwo}>
        To faster your
        <br />
        innovation potential
      </h1>
      <p className={style.paragraph}>
        AcceleratorApp Innovation Community — Tools and community to facilitate
        innovation between all members of our community
      </p>
      <button type="button" className={style.headerButton}>
        Schedule a Demo
      </button>
      <img src="/Video.svg" alt="video logo" className={style.video} />
      <Cookies />
    </header>
  )
}
