import nodemailer from 'nodemailer'
import joi from 'joi'
const rateLimit = require("express-rate-limit");


const recaptchVerifyURL = "https://www.google.com/recaptcha/api/siteverify"




export default async (req, res) => {
    try {
        const { email, name, tel, message, token } = req.body

        //ip address rate limiter


        //validate google recaptcha
        let googleRes = await fetch(`${recaptchVerifyURL}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
            method: "POST",
        });
        googleRes = await googleRes.json()
        const { success } = googleRes
        if (!success) {
            throw new Error('google recaptcha error')
        }


        //validate user input
        const { err, value } = formVal.validate(req.body)
        if (err) { throw new Error('validation error') }

        await transporter.sendMail({
            from: `potential customer <${email}`,
            to: 'bugsandcritters@gmail.com',
            subject: 'potential customer from rat landing',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${tel}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        })

        res.status(200).json({ success: true })
    } catch (error) {
        console.error(error)
        if (error.message == 'validation error') {
            res.status(403)
        } else if (error.message == 'google recaptcha error') {
            res.status(429)
        }
        else res.status(500)
    }
}


//smtp sender
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

//validation object
const formVal = joi.object({
    email: joi.string()
        .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .required(),
    tel: joi.string()
        .regex(/^[0-9]{10}$/)
        .required(),
    message: joi.string()
        .max(200)
        .min(10)
        .required(),
    name: joi.string()
        .max(30)
        .min(2)
        .required()
})

//rate limiter
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message: "Too many submissions from this IP, please try again later"
});