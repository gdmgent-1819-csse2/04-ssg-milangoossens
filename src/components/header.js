import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default () => (
  <header>
    <div className={headerStyles.container}>
      <h1 className={headerStyles.logo}>CSSE2</h1>
      <Link className={headerStyles.link} to="/">Home</Link>
      <Link className={headerStyles.link} to="/page1"> About </Link>
      <Link className={headerStyles.link} to="/page2">Vectoren</Link>
      <Link className={headerStyles.link} to="/page3"> Matrices </Link>
    </div>
  </header>
)

//export default Header