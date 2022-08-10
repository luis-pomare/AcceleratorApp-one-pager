import React from "react"
import * as style from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer>
      <h2 className={style.title}>Join our growing community</h2>
      <form>
        <label htmlFor="email" className={style.label}>
          Sign up for news and updates about AcceleratorApp
        </label>
        <span>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Your email"
            className={style.footerInput}
          />
          <img src="/footerInput.svg" alt="footer input" />
        </span>
        <div className={style.line} />
      </form>
      <div className={style.sectionContainer}>
        <div className={style.section}>
          <h2>Community</h2>
          <div className={style.line} />
          <ul>
            <li>Incubator/Accelerator</li>
            <li>Corporations</li>
            <li>Startups</li>
            <li>Investor</li>
            <li>Open Challenges</li>
          </ul>
        </div>
        <div className={style.section}>
          <h2>Modules</h2>
          <div className={style.line} />
          <ul>
            <li>Coaching Module</li>
            <li>Data Module</li>
            <li>Ecosystem Module</li>
            <li>LMS Module</li>
            <li>Events</li>
            <li>Application Proccessing</li>
          </ul>
        </div>
        <div className={style.section}>
          <h2>Company</h2>
          <div className={style.line} />
          <ul>
            <li>About Us</li>
            <li>Carrers</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={style.section}>
          <h2>Documentation</h2>
          <div className={style.line} />
          <ul>
            <li>Documentation</li>
            <li>Release Log</li>
            <li>FAQ</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className={style.section}>
          <h2>Follow</h2>
          <div className={style.socialLine} />
          <ul className={style.social}>
            <li>
              <img src="/Linkedin.svg" alt="linkeding logo" />
            </li>
            <li>
              <img src="/Facebook.svg" alt="facebook logo" />
            </li>
            <li>
              <img src="/Instagram.svg" alt="instagram logo" />
            </li>
            <li>
              <img src="/Twitter.svg" alt="twitter logo" />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.termsContainer}>
        <span className={style.privacy}>
          <p>Privacy</p>
          <p>Cookies</p>
        </span>
        <div className={style.line} />
        <span className={style.terms}>
          <p>Terms Of Use</p>
          <p>DPA</p>
          <p>Subproccesors</p>
        </span>
        <span className={style.copyright}>
          <p>Copyright © 2022 AcceleratorApp All Rights Reserved</p>
          <img src="/globe.svg" alt="globe icon" />
        </span>
      </div>
    </footer>
  )
}
