
import GetQuoteButtonInverted from './GetQuoteButtonInverted'

import SavingsIcon from '@mui/icons-material/Savings';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


import styles from '@/styles/SellingPoints.module.css'

export default function SellingPoints() {
    return (
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

            <div className={styles.pride_buttonWrapper}>
                <GetQuoteButtonInverted />
            </div>

        </div>
    )
}