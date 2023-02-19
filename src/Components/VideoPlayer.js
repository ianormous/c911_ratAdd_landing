import React, { useRef, useEffect } from 'react';
import Image from 'next/image'

import ratThumbnail from '../../public/c911_ratLanding_thumbnail.png'

import styles from '@/styles/VideoPlayer.module.css'

import playButton from '../../public/playButton.png'


export default function VideoPlayer({ posterURL, videoURL }) {
    const landingVid = useRef(null)
    const videoPlayBtn = useRef(null)

    //fixes known bug when control=false, autoplay, post....video dissapears. 
    useEffect(() => {

        landingVid.current.addEventListener("play", () => {
            if (landingVid.current.getAttribute('controls') !== 'true') {
                landingVid.current.setAttribute('controls', 'true')
            }
            landingVid.current.removeAttribute('controls')
        })
    }, [])


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
            <Image
                alt="video thumbnail. dogs chasing a rat"
                className={styles.videoPlayButton}
                ref={videoPlayBtn}
                onClick={handlePlayBtnClick}
                src={playButton}
                id="playButton"
            />
        </div >
    )
}