import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Siraj</h1>
                <p className={styles.description}>I am a full stack developer with 3 years of experience using React and NodeJS.
                    Reach out if you'd like to learn mode!
                </p>
                <a href="mailto:crajmusics@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
