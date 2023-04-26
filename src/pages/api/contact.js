import nodemailer from 'nodemailer'
import joi from 'joi'


const recaptchVerifyURL = "https://www.google.com/recaptcha/api/siteverify"


export default async (req, res) => {
    try {
        const { email, name, tel, message } = req.body

        //validate google recaptcha
        let googleRes = await fetch(`${recaptchVerifyURL}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
            method: "POST",
        });
        googleRes = googleRes.json()
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
        user: "igentleswork@gmail.com",
        pass: "FaNHQMt43SUW6E1Y"
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