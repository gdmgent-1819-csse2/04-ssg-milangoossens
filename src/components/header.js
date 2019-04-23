import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default () => (
  <header>
    <div className={headerStyles.container}>
      <h1 className={headerStyles.logo}>CSSE2</h1>
      <Link className={headerStyles.link} to="/">Home</Link>
      <Link className={headerStyles.link} to="/about"> About </Link>
      <Link className={headerStyles.link} to="/vectoren">Vectoren</Link>
      <Link className={headerStyles.link} to="/matrices"> Matrices </Link>
    </div>
  </header>
)

//export default Header