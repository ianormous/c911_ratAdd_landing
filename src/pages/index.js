import React, { useRef } from 'react';
import Head from 'next/head'

import config from '../config'

import Landing from '../Components/Landing'
import About from '../Components/About'
import SellingPoints from '../Components/SellingPoints'
import Contact from '../Components/Contact'
import MoreFacts from '../Components/MoreFacts'
import Footer from '../Components/Footer'

//landing
import thumbnail from '../../public/thumbnail.png'
import ratBackground from '../../public/rat_background.png'
import logo from '../../public/logo.png'

// MORE FACTS IMGS
import fireRisk from '../../public/rat_risks/fire_risk.jpg'
import parasiteRisk from '../../public/rat_risks/parasite_risk.png'
import structureRisk from '../../public/rat_risks/chewed_pipe.png'
import floodRisk from '../../public/rat_risks/floodRisk.png'
import diseaseRisk from '../../public/rat_risks/diseaseRisk.png'
import judgementRisk from '../../public/rat_risks/judgementRisk.jpg'
import acRisk from '../../public/rat_risks/acRisk.jpg'


export default function Home() {
    const landingProps = {
        logo: logo,
        background: ratBackground,
        videoProps: {
            videoURL: "/c911_general_ad_landing_video_v2.mp4",
            posterURL: thumbnail,
        },
        header1: "You Want Them Gone Now",
        header2: "affordable flat rate animal removal"
    }

    const moreFactsProps = {
        factsList: ratFacts
    }

    const aboutProps = {
        aboutText,
    }


    const footerProps = {
        footerItems: [
            {
                text: "Visit our site",
                link: "https://www.critter911.com"
            },
            {
                text: "Learn More About Rats",
                link: "https://www.critter911.com/rats"
            },
            {
                text: "Learn More About Raccoons",
                link: "https://critter911.com/raccoons-1"
            },
            {
                text: "Learn More About Ducks",
                link: "https://critter911.com/ducks-1"
            },
            {
                text: "Learn More About Bats",
                link: "https://critter911.com/bats-1"
            }
        ],
        BOTTOM_TEXT: "Critter 911™",
    }


    return (
        <>
            <Head>
                <title>Critter 911 Wildlife Removal</title>
            </Head>
            <main>
                <Landing {...landingProps} />
                <About  {...aboutProps} />
                <SellingPoints />
                {/* <Contact /> */}
                <MoreFacts {...moreFactsProps} />
                <Footer {...footerProps} />
            </main>
        </>
    )
}


const aboutText = {
    flash: "",
    header: "",
    subheader1: "Residential | Commercial | Multi Unit | Institutional",
    subheader2: "Nuisance Wildlife Removal",
    body: "Here at Orlando Critter 911 we understand! Nothing is more important to you than the health & safety of your family, home or business... Fact is that providing you with rat and wildlife free peace of mind is what we do best."
}




const ratFacts = [
    {
        header: 'Disease Risk',
        body: "Wildlife infestations make millions of people sick every year. Animal dropping can spread diseases to humans, many of which can be fatal. Exposure to feces dust, urine crystals, hair and dander can cause asthma, allergies, inflammation and immune deficiencies.",
        img: diseaseRisk,
        alt: "infestation fecal matter"
    },
    {
        header: 'Fire Risk',
        body: "Rodents and other wildlife instinctively gnaw on objects like electricl wires. This causes expensive repairs and can cause electrical fires. It is estimated that a substantial number of fires start with exposed wireing caused by rats and mice",
        img: fireRisk,
        alt: "building on fire"
    },
    {
        header: 'AC Systems Damage Risk',
        body: "Animals love to chew and rip apart the soft, tearable material that makes  AC ducts. Holes in your AC Ducts cause your power bills to rise sharply and can outright destroy your AC unit (avg. cost $6,000 - $8,000). And there is nothing worse than paying to cool your attic.",
        img: acRisk,
        alt: "ac duct damage"
    },
    {
        header: 'Plumbing/Flooding Risk',
        body: "Animals are survivors. When thirsty they will gnaw into pipes in your attic to access water, causing a massive leak. This water damage can go unnoticed for weeks until it causes thousands of dollars of damage",
        img: floodRisk,
        alt: "chewed pipe"
    },
    {
        header: 'Social Jugement Risk',
        body: "People fear rodents and other types of infestations for good reason. They carry diseases, cause major damage to your property. They are are also just plain gross. No one wants to be the \"rat house\" or the \"raccoon hangout\",",
        img: judgementRisk,
        alt: "disgusted woman"
    },
    {
        header: 'Structural Damage Risk',
        body: "Animals are destructive to any structure they inhabit. While in your home or business, they are always gnawing on or breaking something. Roof shingle, flashing, drywall, supports, carpeting you name it, they don't discriminate",
        img: structureRisk,
        alt: "gnawed plumbing stack causing water damage"
    },
    {
        header: 'Parasites Risk',
        body: "Rodents and other animals bring fleas, ticks and mites (all of which are notorious vectors of disease transmission) with them. As rodents travel or die, they are depositing fleas and ticks everywhere to infect someone else. The black plague the caused so much destruction in medieval Europe was in-fact spread by rat fleas.",
        img: parasiteRisk,
        alt: 'tick under microscope'
    }
]

