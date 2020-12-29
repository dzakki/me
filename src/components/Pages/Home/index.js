import React, { /*useEffect*/ } from 'react'
import cx from "classnames"
import SectionHome from "components/Organisms/SectionHome";
import FooterHome from "components/Organisms/FooterHome"
import styles from "./styles.module.scss"

const Home = () => {

  return (
    <div className={cx(styles.customContainer, "section")}>
      <SectionHome />
      <FooterHome />
    </div>
  )
}

export default Home
