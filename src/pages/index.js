import React, { useRef } from 'react';
import Head from 'next/head'


import Test from '../Components/Test'

import Landing from '../Components/Landing'
import About from '../Components/About'
import SellingPoints from '../Components/SellingPoints'
import RatFacts from '../Components/MoreFacts'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

import ratBackground from '../../public/rat_background.png'
import logo from '../../public/logo.png'


// RAT RISKS IMGS
import fireRisk from '../../public/rat_risks/fire_risk.jpg'

import parasiteRisk from '../../public/rat_risks/parasite_risk.png'
import structureRisk from '../../public/rat_risks/chewed_pipe.png'
import floodRisk from '../../public/rat_risks/floodRisk.png'
import diseaseRisk from '../../public/rat_risks/diseaseRisk.png'
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
                {/* <Test /> */}
                <Landing {...landingProps} />
                <About />
                <SellingPoints />
                <Contact />
                <RatFacts {...ratFactsProps} />
                <Footer />
            </main>
        </>
    )
}


const ratFacts = [
    {
        header: 'Disease Risk',
        body: "Rats and mice make millions of people sick every year. Their dropping can spread diseases to humans, many of which can be fatal. Their feces dust, urine crystals, hair and dander. Rat skin cells cause asthma, allergies, inflammation and immune deficiencies.",
        img: diseaseRisk,
        alt: "infestation fecal matter"
    },
    {
        header: 'Fire Risk',
        body: "Rodents, including rats & mice, instinctively gnaw on objects like electrical wires. This causes expensive repairs and can cause electrical fires. It is estimated that a substantial number of fires start with exposed wiring caused by rats and mice",
        img: fireRisk,
        alt: "building on fire"
    },
    {
        header: 'AC Systems Damage Risk',
        body: "Rats & Mice chew into ducts. Once in they cause your power bills to rise sharply and can destroy your AC unit (avg. cost $6,000 - $8,000). And there is nothing worse than paying to cool your attic.",
        img: acRisk,
        alt: "ac duct damage"
    },
    {
        header: 'Plumbing/Flooding Risk',
        body: "Rodents including rats & mice, cannot dray water from the eat, they must seek water sources to survive. They often locate plastic plumbing and gnaw into them causing significant damage and very costly repairs due to water flooding.",
        img: floodRisk,
        alt: "chewed pipe"
    },
    {
        header: 'Social Jugement Risk',
        body: "People fear rats and mice for good reason. They carry diseases, cause major damage to your property and they are just plain gross. No one wants to be the \"rat house\"",
        img: judgementRisk,
        alt: "disgusted woman"
    },
    {
        header: 'Structural Damage Risk',
        body: "Rodent teeth never stop growing and constant gnawing and chewing is required to wear them down. While in your home or business, they are chewing on something. Roof shingle, flashing, drywall, supports, carpeting you name it, they don't discriminate.",
        img: structureRisk,
        alt: "gnawed plumbing stack causing water damage"
    },
    {
        header: 'Parasites Risk',
        body: "Rats & Mice bring fleas, ticks and mites (all of which are notorious vectors of disease transmission) with them. As rodents travel or die, they are depositing fleas and ticks everywhere to wait for another live host to infect, which, in turn, can cause diseases.",
        img: parasiteRisk,
        alt: 'tick under microscope'
    }
]

