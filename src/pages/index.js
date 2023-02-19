import React, { useRef } from 'react';
import Head from 'next/head'

import Landing from '../Components/Landing'
import About from '../Components/About'
import SellingPoints from '../Components/SellingPoints'
import RatFacts from '../Components/MoreFacts'
import Footer from '../Components/Footer'

import ratBackground from '../../public/rat_background.png'
import logo from '../../public/logo.png'

// RAT RISKS IMGS
import fireRisk from '../../public/rat_risks/fire_risk.jpg'
import parasiteRisk from '../../public/rat_risks/parasite_risk.png'
import structureRisk from '../../public/rat_risks/chewed_pipe.jpg'
import floodRisk from '../../public/rat_risks/floodRisk.jpg'
import diseaseRisk from '../../public/rat_risks/diseaseRisk.jpg'
import judgementRisk from '../../public/rat_risks/judgementRisk.jpg'
import acRisk from '../../public/rat_risks/acRisk.jpg'

import styles from '@/styles/Home.module.css'


export default function Home() {
  const landingProps = {
    logo: logo,
    background: ratBackground,
    videoProps: {
      videoURL: "/ratLanding_video.mp4",
      posterURL: "/c911_ratlanding_thumbnail.png",
    }
  }

  const ratFactsProps = {
    factsList: ratFacts
  }


  return (
    <>
      <Head>
        <title>Critter 911 Rat Removal</title>
      </Head>
      <main>
        <Landing {...landingProps} />
        <About />
        <SellingPoints />
        <RatFacts {...ratFactsProps} />
        <Footer />
      </main>
    </>
  )
}


const ratFacts = [
  {
    header: 'Fire Risk',
    body: "Rodents, including rats & mice, instinctively gnaw on bjects like electricl wires. This causes expensive repairs and can cause electrical fires. It is estimated that a sebstantial number of fires start with exposed wireing caused by rats and mice",
    img: fireRisk,
    alt: "building on fire"
  },
  {
    header: 'Disease Risk',
    body: "Rats and mice make millions of people sick every year. Their dropping can spread diseases to humans, many of which can be fatal. Their feces dust, urine crystals, hair and dander. Rat skin cells cause asthma, allergies, inflammation and imminue deficiencies.",
    img: diseaseRisk,
    alt: "infestation fecal matter"
  },
  {
    header: 'AC Systems Damage Risk',
    body: "Rats & Mice chew into ducts. Once in they cayse your power bills to rise sharply and can destrouy your AC unit (avg. cost $6,000 - $8,000). An there is nothing worse than paying to cool your attic.",
    img: acRisk,
    alt: "ac duct damage"
  },
  {
    header: 'Plumbing/Flooding Risk',
    body: "Rodenets including rats & mice, cnnot dray water from the eat, they mut seek water sources to survive. They often locate plastic plymbing and ganw into them causeing significant amage and very costly repairs due to water flooding.",
    img: floodRisk,
    alt: "chewed pipe"
  },
  {
    header: 'Social Jugement Risk',
    body: "People fear rats and mice for good reason. They carry diseases, cause major amge to your property and they are just plain gross. No one wants to be the \"rat house\"",
    img: judgementRisk,
    alt: "disgusted woman"
  },
  {
    header: 'Structural Damage Risk',
    body: "Rodent teeth never stop growing and constnt gnawing and chewing is required to wear them down. While in your home or business, they are chewing on something. Roof shingle, flashing, drywall, supports, carpeting you name it, they don't diiscriminate.",
    img: structureRisk,
    alt: "gnawed plumbing stack causing water damage"
  },
  {
    header: 'Parasites Risk',
    body: "Rats & Mice bring fleas, ticks and mites (all of which are notorious vectors of disese transmission) with them. As rodents travel or die, they are depsoitiong fleas and ticks everywhereto wait for another live host to infect,. Which, in turn, can cause diseeases.",
    img: parasiteRisk,
    alt: 'tick under microscope'
  }
]

