import React, { useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import ratBackground from '../../public/rat_background.png'
import logo from '../../public/logo.png'
import happyFamily from '../../public/familyCropped.png'
import playButton from '../../public/playButton.png'
import logoV2 from '../../public/greenLogoTransparent_v2.png'
import landingThumbnail from '../../public/c911_ratLanding_thumbnail.png'
// import ratLandingVid from '../../public/c911_rat_add_landing_video.mp4'

// RAT RISKS IMGS
import fireRisk from '../../public/rat_risks/fire_risk.jpg'
import parasiteRisk from '../../public/rat_risks/parasite_risk.png'
import structureRisk from '../../public/rat_risks/chewed_pipe.JPG'
import floodRisk from '../../public/rat_risks/floodRisk.jpg'
import diseaseRisk from '../../public/rat_risks/diseaseRisk.jpg'
import judgementRisk from '../../public/rat_risks/judgementRisk.jpg'
import acRisk from '../../public/rat_risks/acRisk.jpg'

// import diseaseRisks from '../../public/rat_risks/tick1'


import SavingsIcon from '@mui/icons-material/Savings';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';



function GetQuoteButton() {
  return (
    <>
      <button className={`d-flex justify-content-center align-item-center ${styles.callnow_button}`}>
        <div className={styles.callnow_button_text}>get a free quote</div>
      </button>
    </>
  )
}

function GetQuoteButtonInverted() {
  return (
    <>
      <button className={`d-flex justify-content-center align-item-center ${styles.callnow_button_inverted}`}>
        <div className={styles.callnow_button_text_inverted}>get a free quote</div>
      </button>
    </>
  )
}


export default function Home() {
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

  const moreRatInfo = ratFacts.map(fact => {
    return RatFact(fact)
  })


  return (
    <>
      <Head>
        <title>Critter 911 Rat Removal</title>
      </Head>
      <main>
        {/* landing container */}
        <div className={styles.landingContainer}>
          <Image src={ratBackground} className={styles.landingBackground}></Image>

          {/* utility content wrapper (a part of the Next Image background fix) */}
          <div style={{ zIndex: '1', position: 'absolute', height: '100%', width: '100%' }}>
            {/* logo banner */}
            <div className={`d-flex justify-content-center ${styles.logoContainer}`}>
              <Image src={logo} className={styles.logo}></Image>
            </div>

            {/* video group container */}
            <div className={`d-flex flex-column align-items-center ${styles.videoContainer}`}>
              {/* header */}
              <div className={`d-flex align-items-center justify-content-center ${styles.videoTextWrapper}`}>
                <div className={`${styles.videoText}`}>You Want Them Gone Now</div>
              </div>

              {/* video player */}
              <div className={styles.videoWrapper}>
                <video
                  ref={landingVid}
                  onClick={handleVideoPlayerClick}
                  id="video"
                  preload="auto"
                  playsInline
                  loop
                  className={styles.videoPlayer}
                  poster="/c911_ratlanding_thumbnail.png"
                >
                  <source src={"/ratLanding_video.mp4"} type="video/mp4"></source>
                  Your browser does not support the video tag.
                </video>
                <Image
                  className={styles.videoPlayButton}
                  ref={videoPlayBtn}
                  onClick={handlePlayBtnClick}
                  src={playButton}
                  id="playButton"
                />
              </div>

              {/* cta area #1 */}
              <div className={`d-flex justify-content-center flex-column ${styles.callnowContainer}`}>
                <div className={styles.callnow_text}>affordable flat rate rat trapping</div>
                <GetQuoteButton />
              </div>

            </div>
          </div>
        </div>

        {/* about */}
        <div className={`${styles.aboutContainer}`}>
          <div className={styles.about_header}>
            <span className={styles.about_header_emphasis}>FAST </span>
            &gt;&gt;&gt; <br></br>
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

        {/* IM BETTER */}
        {/* <div className={`d-flex align-items-center flex-column ${styles.prideContainer}`}> */}
        <div className={`${styles.prideContainer}`}>
          <div className={styles.pride_header}>WE'RE BETTER</div>

          <div className={styles.reasonContainer}>
            <div className={styles.reasonGroupContainer}>
              <SavingsIcon sx={{ fontSize: '3.5rem', marginBottom: '0rem' }} />
              <div className={styles.reason_header}>Flat Rate</div>
              <div className={styles.reason_body}>
                No hidden fees or escalating costs. We do not charge by the animal, visit or week,. What you agree to is all you pay.
              </div>
            </div>

            <div className={styles.reasonGroupContainer}>
              <MilitaryTechIcon sx={{ fontSize: '4.5rem', marginBottom: '0rem' }} />
              <div className={styles.reason_header}>BEAT ANY ESTIMATE BY 10%</div>
              <div className={styles.reason_body}>We never want to lose your business over price. Bring us any written estimate for the same work and we'll beat it by 10%</div>
            </div>

            <div className={styles.reasonGroupContainer}>
              <AddIcCallIcon sx={{ fontSize: '3rem', marginBottom: '0rem' }} />
              <div className={styles.reason_header}>AVAILABLE EVERY DAY</div>
              <div className={styles.reason_body}>Weekend emergencies are no problem. We are available all days of the week.  You will never be left hanging when you have a question or an animal in the trap. </div>
            </div>
          </div>

          <div style={{ width: '100%', paddingLeft: '10%', paddingRight: '10%' }}>
            <GetQuoteButtonInverted />
          </div>

        </div>

        {/* learn mroe bout rts */}
        <div className={styles.learnMoreContainer}>
          <div className={styles.learnMore_header}>
            rat and mouse infestations cause:
          </div>
          {moreRatInfo}
          <div className={styles.learnMore_ctaWrapper}>
            <GetQuoteButton />
          </div>
        </div>

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

      </main>
    </>
  )
}

function RatFact(props) {
  const {
    img,
    header,
    body
  } = props

  return (
    <div className={styles.ratFact}>
      <div className={styles.ratFact_imgWrapper}>
        <Image src={img} className={styles.ratFact_img} />
      </div>
      <span className={styles.ratFact_header} >{header}</span>
      <p>{body}</p>
    </div>
  )
}


const ratFacts = [
  {
    header: 'Fire Risk',
    body: "Rodents, including rats & mice, instinctively gnaw on bjects like electricl wires. This causes expensive repairs and can cause electrical fires. It is estimated that a sebstantial number of fires start with exposed wireing caused by rats and mice",
    img: fireRisk,
  },
  {
    header: 'Disease Risk',
    body: "Rats and mice make millions of people sick every year. Their dropping can spread diseases to humans, many of which can be fatal. Their feces dust, urine crystals, hair and dander. Rat skin cells cause asthma, allergies, inflammation and imminue deficiencies.",
    img: diseaseRisk,
  },
  {
    header: 'AC Systems Damage Risk',
    body: "Rats & Mice chew into ducts. Once in they cayse your power bills to rise sharply and can destrouy your AC unit (avg. cost $6,000 - $8,000). An there is nothing worse than paying to cool your attic.",
    img: acRisk,
  },
  {
    header: 'Plumbing/Flooding Risk',
    body: "Rodenets including rats & mice, cnnot dray water from the eat, they mut seek water sources to survive. They often locate plastic plymbing and ganw into them causeing significant amage and very costly repairs due to water flooding.",
    img: floodRisk,
  },
  {
    header: 'Social Jugement Risk',
    body: "People fear rats and mice for good reason. They carry diseases, cause major amge to your property and they are just plain gross. No one wants to be the \"rat house\"",
    img: judgementRisk,
  },
  {
    header: 'Structural Damage Risk',
    body: "Rodent teeth never stop growing and constnt gnawing and chewing is required to wear them down. While in your home or business, they are chewing on something. Roof shingle, flashing, drywall, supports, carpeting you name it, they don't diiscriminate.",
    img: structureRisk,
  },
  {
    header: 'Parasites Risk',
    body: "Rats & Mice bring fleas, ticks and mites (all of which are notorious vectors of disese transmission) with them. As rodents travel or die, they are depsoitiong fleas and ticks everywhereto wait for another live host to infect,. Which, in turn, can cause diseeases.",
    img: parasiteRisk,
  }
]

