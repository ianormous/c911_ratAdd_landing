import Image from 'next/image'

import styles from '@/styles/Footer.module.css'

import logoV2 from '../../public/greenLogoTransparent_v2.png'


export default function Footer() {
    return (
        <div className={`d-flex flex-column align-items-center ${styles.footer}`}>
            <div className={`d-flex justify-content-center ${styles.footer_logoWrapper}`}>
                <Image src={logoV2} className={styles.footer_logo}></Image>
            </div>
            <ul className={styles.footter_list}>
                <li className={styles.footer_listItem}><a className={styles.footer_link}>Visit Our Site</a></li>
                <li className={styles.footer_listItem}><a className={styles.footer_link}>Learn More About Rats</a></li>
            </ul>
            <div className={styles.footer_copyright}>
                Critter 911 &#8482;
            </div>
        </div>
    )
}