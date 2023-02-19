import Image from 'next/image'

import styles from '@/styles/About.module.css'

import happyFamily from '../../public/familyCropped.png'



export default function About() {
    return (
        <div className={`d-flex justify-content-center ${styles.aboutWrapper}`}>
            <div className={`${styles.aboutContainer}`}>
                <div className={styles.about_header}>
                    <span className={styles.about_header_emphasis}>FAST </span>
                    {/* &gt;&gt;&gt;  */}
                    <br></br>
                    100% Effective Rat &<br></br>
                    Mouse Solutions
                </div>

                <div className={`d-flex flex-column justify-content-center align-items-center ${styles.about_subHeader}`}>
                    <div className={styles.about_subHeader1}>
                        Residential | Commercial | Multi Unit | Institutional
                    </div>
                    <div className={styles.about_subHeader2}>
                        Rodent (Rat & Mouse) Solutions
                    </div>
                </div>

                <div className={styles.about_ctaWrapper}>
                    <a className={styles.about_cta}>Don't Wait Call 407-719-6221</a>
                </div>

                <hr className={styles.about_hr} />

                <div className={styles.about_bio}>
                    <div className={styles.happyFamilyWrapper}>
                        <Image src={happyFamily} className={styles.happyFamily}></Image>
                    </div>
                    Here at Orlando Critter 911 we understand! Nothing is more important to you than the health & safety of your family, home or business... Fact is that providing you with rat a& mouse free peace of mind is what we do best.
                </div>
            </div>
        </div>
    )
}