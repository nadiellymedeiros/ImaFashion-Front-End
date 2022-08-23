import React from 'react'
import { InstagramLogo } from 'phosphor-react'
import styles from './Instagram.module.css'

const Instagram = () => {
  return (
    <a className={styles.instaIcon} href="https://instagram.com">
      <InstagramLogo />
    </a>
  )
}

export default Instagram
