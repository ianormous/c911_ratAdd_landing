import React, { useRef, useEffect } from 'react';
import Image from 'next/image'

import ratThumbnail from '../../public/c911_ratLanding_thumbnail.png'

import styles from '@/styles/VideoPlayer.module.css'

import playButton from '../../public/playButton.png'


export default function VideoPlayer({ posterURL, videoURL }) {
    const landingVid = useRef(null)
    const videoPlayBtn = useRef(null)
    const videoThumbnail = useRef(null)


    function handlePlayBtnClick(e) {
        videoPlayBtn.current.style.display = 'none'
        videoThumbnail.current.style.display = 'none'
        landingVid.current.play()
    }

    function handleVideoPlayerClick(e) {
        e.target.pause()
        videoPlayBtn.current.style.display = 'block'
    }


    return (
        <div className={styles.videoWrapper}>

            <video
                controls
                ref={landingVid}
                onClick={handleVideoPlayerClick}
                preload="auto"
                playsInline
                loop
                className={styles.videoPlayer}
                // poster="/c911_ratlanding_thumbnail.png"
                poster={ratThumbnail}
            >
                <source src={videoURL} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            {/* thumbnail sits in front to fix bug with poster attrb */}
            <Image
                alt="video thumbnail. dogs chasing a rat"
                className={styles.videoThumbnail}
                ref={videoThumbnail}
                src={ratThumbnail}
                onClick={handlePlayBtnClick}
            />
            <Image
                alt=""
                className={styles.videoPlayButton}
                ref={videoPlayBtn}
                onClick={handlePlayBtnClick}
                src={playButton}
                id="playButton"
            />
        </div >
    )
}