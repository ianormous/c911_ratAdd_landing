import Image from 'next/image'

import GetQuoteButton from './GetQuoteButton'

import styles from '@/styles/MoreFacts.module.css'


export default function MoreFacts(props) {
    const {
        factsList
    } = props

    const moreFacts = factsList.map((fact, index) => {
        return <Fact key={index} {...fact} />
    })

    return (
        <div className={styles.learnMoreContainer}>
            <div className={styles.learnMore_header}>
                rat and mouse infestations cause:
            </div>
            {moreFacts}
            <div className={styles.learnMore_ctaWrapper}>
                <GetQuoteButton />
            </div>
        </div>
    )
}

function Fact(props) {
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