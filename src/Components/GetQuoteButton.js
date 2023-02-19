import sx from '../styles/GetQuoteButtons.module.css'


export default function GetQuoteButton() {
    return (
        <>
            <a href="tel:5554280940">
                <button
                    className={`d-flex justify-content-center align-item-center ${sx.button}`}
                >
                    <div className={`${sx.buttonText}`}>get a free quote</div>
                </button>
            </a>
        </>
    )
}
