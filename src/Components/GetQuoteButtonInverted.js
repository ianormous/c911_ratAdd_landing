import sx from '../styles/GetQuoteButtons.module.css'


export default function GetQuoteButtonInverted() {
    return (
        <>
            <a href="tel:4077196221">
                <button
                    className={`d-flex justify-content-center align-item-center ${sx.invertedButton}`}
                >
                    <div
                        className={sx.invertedButtonText}
                    >
                        get a free quote
                    </div>
                </button>
            </a>
        </>
    )
}