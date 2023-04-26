import { useState, useRef, createRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import TextareaAutosize from 'react-textarea-autosize';


import sx from '@/styles/Contact.module.css'

console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)

const SubmitButton = () => {
    return (
        <button
            className={`d-flex justify-content-center align-item-center ${sx.button}`}
        >
            <div className={`${sx.buttonText}`}>Submit</div>
        </button>
    )
}


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const recaptchaRef = createRef();

    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        alert(`Hey, ${email}`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            recaptchaRef.current.execute();

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })

            if (response.ok) {
                setSuccess(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={`d-flex flex-column align-items-center ${sx.container}`}>
            <div className={`${sx.contentWrapper}`}>
                <h1 className={`${sx.header}`}>Tell Us About Your Rat Issue</h1>
                {success ?
                    <p>Thanks for leaving a message! We will be reaching out soon!</p>
                    :
                    // <form onSubmit={handleSubmit} className={`d-flex flex-column ${sx.form}`}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            {/* <label className={`${sx.label}`} htmlFor="name">Name:</label> */}
                            <input
                                className={`${sx.input}`}
                                type="text"
                                id="name"
                                autoComplete="name"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                                placeholder="name"
                            />
                        </div>
                        <div>
                            {/* <label className={`${sx.label}`} htmlFor="name">Name:</label> */}
                            <input
                                className={`${sx.input}`}
                                type="tel"
                                autoComplete="tel"
                                id="tel"
                                name="tel"
                                value={tel}
                                onChange={(event) => setTel(event.target.value)}
                                required
                                placeholder="phone"
                            />
                        </div>
                        <div>
                            {/* <label className={`${sx.label}`} htmlFor="email">Email:</label> */}
                            <input
                                className={`${sx.input}`}
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                autoComplete="email"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                placeholder="email"
                            />
                        </div>
                        {/* <div>
                            <label className={`${sx.label}`} htmlFor="message">Message:</label>
                            <textarea
                                rows="2"
                                className={`${sx.input}`}
                                id="message" name="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                                placeholder="describe your critter problem"
                            />
                        </div> */}
                        <div>
                            {/* <label className={`${sx.label}`} htmlFor="message">Message:</label> */}
                            <TextareaAutosize
                                maxRows={4}
                                minRows={2}
                                className={`${sx.input}`}
                                id="message" name="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                                placeholder="describe your critter problem"
                            />
                        </div>
                        {/* <ReCAPTCHA
                            ref={recaptchaRef}
                            // size="invisible"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                        /> */}

                        <button
                            className={`d-flex justify-content-center align-item-center ${sx.button}`}
                        >
                            <p className={`${sx.buttonText}`}>Submit</p>
                        </button>
                    </form>

                }
            </div>
        </div >

    )
}

export default Contact