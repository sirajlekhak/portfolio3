import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:crajmusics@gmail.com">crajmusics@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
                    <a href="https://www.linkedin.com/in/sirajlekhak/">LinkedIn/sirajlekhak</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
                    <a href="https://github.com/sirajlekhak">GitHub/sirajlekhak</a>
                </li>
            </ul>
        </footer>
    )
}
