import Image from 'next/image'

import VideoPlayer from './VideoPlayer'
import GetQuoteButton from './GetQuoteButton'

import styles from '@/styles/Landing.module.css'


export default function Landing({
    videoProps,
    background,
    logo,
}) {


    return (
        <div>
            <div className={styles.landingContainer}>
                <Image alt="conniving, menacing background rat" src={background} className={styles.landingBackground}></Image>

                {/* utility content wrapper (a part of the Next Image background fix) */}
                <div style={{ zIndex: '1', position: 'absolute', height: '100%', width: '100%' }}>
                    {/* logo banner */}
                    <div className={`d-flex justify-content-center ${styles.logoContainer}`}>
                        <Image alt="critter911 logo" src={logo} className={styles.logo}></Image>
                    </div>

                    {/* video group container */}
                    <div className={`d-flex flex-column align-items-center ${styles.videoContainer}`}>
                        {/* header */}
                        <div className={`d-flex align-items-center justify-content-center ${styles.videoTextWrapper}`}>
                            <div className={`${styles.videoText}`}>You Want Them Gone Now</div>
                        </div>

                        {/* video player */}
                        <VideoPlayer {...videoProps} />


                        {/* cta area #1 */}
                        <div className={`d-flex justify-content-center flex-column ${styles.callnowContainer}`}>
                            <div className={styles.callnow_text}>affordable flat rate rat trapping</div>
                            <GetQuoteButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
