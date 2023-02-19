import React, { useRef } from 'react';
import Image from 'next/image'

import styles from '@/styles/VideoPlayer.module.css'

import playButton from '../../public/playButton.png'


export default function VideoPlayer({ posterURL, videoURL }) {
    const landingVid = useRef(null)
    const videoPlayBtn = useRef(null)


    function handlePlayBtnClick(e) {
        videoPlayBtn.current.style.display = 'none'
        landingVid.current.play()
    }

    function handleVideoPlayerClick(e) {
        e.target.pause()
        videoPlayBtn.current.style.display = 'block'
    }


    return (
        <div className={styles.videoWrapper}>
            <video
                ref={landingVid}
                onClick={handleVideoPlayerClick}
                preload="auto"
                playsInline
                loop
                className={styles.videoPlayer}
                poster="/c911_ratlanding_thumbnail.png"
            // poster={posterURL}
            >
                <source src={videoURL} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <Image
                alt="video thumbnail. dogs chasing a rat"
                className={styles.videoPlayButton}
                ref={videoPlayBtn}
                onClick={handlePlayBtnClick}
                src={playButton}
                id="playButton"
            />
        </div>
    )
}